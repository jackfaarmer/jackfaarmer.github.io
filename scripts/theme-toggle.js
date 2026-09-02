/* Wires the nav toggle. The icons swap in CSS, so this only has to flip
   the attribute, remember the choice, and keep the label honest. */
(function () {
  var button = document.getElementById('theme-toggle');
  if (!button) return;

  var root = document.documentElement;
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  /* Before the first click there is no attribute, so the live theme is
     whatever the OS says. After it, the attribute is the source of truth. */
  function current() {
    var set = root.getAttribute('data-theme');
    if (set === 'light' || set === 'dark') return set;
    return prefersDark.matches ? 'dark' : 'light';
  }

  function relabel() {
    button.setAttribute(
      'aria-label',
      current() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
    );
  }

  button.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {
      /* Choice still applies for this page view, just won't persist. */
    }
    relabel();
  });

  /* Only reaches here while the OS is still in charge; once a choice is
     stored, current() ignores the media query and the label holds. */
  prefersDark.addEventListener('change', relabel);

  relabel();
})();
