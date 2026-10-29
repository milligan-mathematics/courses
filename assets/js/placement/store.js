/* Math placement assessment: where a finished record goes.
   PL.store.live()     true once a backend is configured (window.PL_BACKEND); until then the page runs
                       in preview: records stay in this browser and can be downloaded as JSON
   PL.store.signIn()   -> Promise<{ name, email }>  (Milligan Microsoft account, via the backend)
   PL.store.submit(r)  -> Promise<{ where: 'local' | 'sent' }>

   The Firebase backend (Microsoft sign-in, a write-only Firestore collection) plugs in here by
   setting window.PL_BACKEND = { signIn, submit } before this file loads; see firebase/README.md.
   The record format is the same either way, so tools/sync_registrar.py reads downloaded JSON files
   and Firestore exports alike. */
(function (root) {
  'use strict';
  var PL = root.PL;
  var B = root.PL_BACKEND || null;
  var LOCAL = 'pl-placement-records';

  PL.store = {
    live: function () { return !!B; },
    signIn: function () { return B ? B.signIn() : Promise.reject(new Error('sign-in is not set up yet')); },
    submit: function (record) {
      if (B) return B.submit(record).then(function () { return { where: 'sent' }; });
      try {
        var all = JSON.parse(localStorage.getItem(LOCAL) || '[]');
        all.push(record);
        localStorage.setItem(LOCAL, JSON.stringify(all));
      } catch (e) { /* private mode: the result screen still offers a download */ }
      return Promise.resolve({ where: 'local' });
    }
  };
})(typeof window !== 'undefined' ? window : globalThis);
