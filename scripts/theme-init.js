/* Runs before first paint, blocking on purpose. Stamps a stored override
   onto <html> so the page never flashes the wrong palette. With nothing
   stored — or no localStorage at all — the attribute stays off and the
   CSS falls back to prefers-color-scheme. */
(function () {
  try {
    var stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.setAttribute('data-theme', stored);
    }
  } catch (e) {
    /* Safari private mode throws on localStorage. Fall through to the OS. */
  }
})();
