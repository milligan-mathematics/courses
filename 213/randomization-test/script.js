const groupAInput = document.getElementById('groupA');
const groupBInput = document.getElementById('groupB');
const numShufflesInput = document.getElementById('numShuffles');
const loadDataBtn = document.getElementById('loadDataBtn');
const runTestBtn = document.getElementById('runTestBtn');
const obsDiffDisplay = document.getElementById('obsDiffDisplay');
const pValueDisplay = document.getElementById('pValueDisplay');
const canvas = document.getElementById('histogramCanvas');
let chartInstance = null;

// Sample Data (Caffeine vs No Caffeine tapping task)
const sampleData = {
    groupA: "245, 246, 246, 248, 248, 248, 250, 250, 250, 252",
    groupB: "242, 242, 242, 244, 244, 245, 246, 246, 246, 248"
};

loadDataBtn.addEventListener('click', () => {
    groupAInput.value = sampleData.groupA;
    groupBInput.value = sampleData.groupB;
    
    // Add brief animation to highlight data load
    groupAInput.style.background = "rgba(59, 130, 246, 0.2)";
    groupBInput.style.background = "rgba(59, 130, 246, 0.2)";
    setTimeout(() => {
        groupAInput.style.background = "";
        groupBInput.style.background = "";
    }, 500);
});

function parseData(str) {
    return str.split(',')
              .map(v => parseFloat(v.trim()))
              .filter(v => !isNaN(v));
}

function mean(arr) {
    if (arr.length === 0) return 0;
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function fisherYatesShuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

runTestBtn.addEventListener('click', () => {
    const dataA = parseData(groupAInput.value);
    const dataB = parseData(groupBInput.value);
    const numShuffles = parseInt(numShufflesInput.value);

    if (dataA.length === 0 || dataB.length === 0) {
        alert("Please enter valid numeric data for both groups.");
        return;
    }
    if (isNaN(numShuffles) || numShuffles < 1 || numShuffles > 100000) {
        alert("Please enter a valid number of shuffles (1 - 100000).");
        return;
    }

    // Changing button state
    runTestBtn.textContent = "Running...";
    runTestBtn.disabled = true;

    // Use a small timeout to allow UI update before heavy loop
    setTimeout(() => {
        executeSimulation(dataA, dataB, numShuffles);
        runTestBtn.textContent = "Run Randomization Test";
        runTestBtn.disabled = false;
    }, 50);
});

function executeSimulation(dataA, dataB, numShuffles) {
    const nA = dataA.length;
    const meanA = mean(dataA);
    const meanB = mean(dataB);
    const obsDiff = meanA - meanB;
    
    const pool = dataA.concat(dataB);
    const diffs = [];
    let pValueCount = 0;

    for (let i = 0; i < numShuffles; i++) {
        // Fast copy & shuffle
        const shuffled = fisherYatesShuffle([...pool]);
        const newA = shuffled.slice(0, nA);
        const newB = shuffled.slice(nA);
        
        const simDiff = mean(newA) - mean(newB);
        diffs.push(simDiff);
        
        if (simDiff >= obsDiff) {
            pValueCount++;
        }
    }

    const pValue = pValueCount / numShuffles;

    // Update UI
    obsDiffDisplay.innerHTML = `<strong>${obsDiff.toFixed(3)}</strong>`;
    pValueDisplay.innerHTML = `<strong>${pValue.toFixed(4)}</strong>`;

    drawHistogram(diffs, obsDiff);
}

function drawHistogram(diffs, obsDiff) {
    if (chartInstance) {
        chartInstance.destroy();
    }

    // Determine limits to center histogram at 0
    let maxDiff = Math.max(...diffs, obsDiff);
    let minDiff = Math.min(...diffs, obsDiff);
    let limit = Math.max(Math.abs(maxDiff), Math.abs(minDiff)) * 1.1; // Add 10% padding
    if (limit === 0) limit = 1;

    // Create Bins
    const numBins = 40;
    const step = (2 * limit) / numBins;
    const bins = new Array(numBins).fill(0);
    const binCenters = new Array(numBins).fill(0);

    for (let i = 0; i < numBins; i++) {
        binCenters[i] = -limit + (i + 0.5) * step;
    }

    for (let diff of diffs) {
        let binIndex = Math.floor((diff + limit) / step);
        if (binIndex < 0) binIndex = 0;
        if (binIndex >= numBins) binIndex = numBins - 1;
        bins[binIndex]++;
    }

    // Colors: P-value area (tail) is red, rest is blue
    const bgColors = binCenters.map(center => 
        (center >= obsDiff) ? 'rgba(239, 68, 68, 0.8)' : 'rgba(59, 130, 246, 0.7)'
    );

    const borderColors = binCenters.map(center => 
        (center >= obsDiff) ? 'rgba(239, 68, 68, 1)' : 'rgba(59, 130, 246, 1)'
    );

    // Find the category index for the observed diff annotation
    let obsDiffIndex = Math.floor((obsDiff + limit) / step);

    const data = {
        labels: binCenters.map(c => c.toFixed(2)),
        datasets: [{
            label: 'Frequency',
            data: bins,
            backgroundColor: bgColors,
            borderColor: borderColors,
            borderWidth: 1,
            barPercentage: 1.0,
            categoryPercentage: 1.0
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Difference in Means',
                        color: '#94A3B8',
                        font: { size: 14 }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                        color: '#94A3B8',
                        maxTicksLimit: 10
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Frequency',
                        color: '#94A3B8',
                        font: { size: 14 }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#94A3B8'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            return 'Diff Center: ' + context[0].label;
                        }
                    }
                },
                annotation: {
                    annotations: {
                        line1: {
                            type: 'line',
                            xMin: obsDiffIndex,
                            xMax: obsDiffIndex,
                            borderColor: '#F1F5F9',
                            borderWidth: 2,
                            borderDash: [6, 6],
                            label: {
                                display: true,
                                content: 'Observed Diff',
                                position: 'start',
                                backgroundColor: 'rgba(0,0,0,0.7)',
                                color: 'white'
                            }
                        }
                    }
                }
            }
        }
    };

    chartInstance = new Chart(canvas, config);
}

// Initial draw with empty data to show nice axes and layout
drawHistogram([], 0);
