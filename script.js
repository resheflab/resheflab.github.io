/* ==========================================================================
   Reshef Lab — the only JavaScript on this site.

   All it does is make the "Menu" button open and close the section links
   on a phone. Everything else on the site is plain HTML and CSS.

   If this file were deleted, the site would still work: the section links
   would just always be visible instead of hiding behind a button.
   ========================================================================== */

(function () {
  var button = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');

  if (!button || !nav) return;

  // Show the button, and let the stylesheet know it can hide the links.
  button.hidden = false;
  document.body.classList.add('js-nav');

  // Clicking the button opens or closes the links.
  button.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(isOpen));
  });

  // Tapping one of the links closes the menu again.
  nav.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      nav.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
    }
  });
})();
