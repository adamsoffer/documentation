/* Sets body[data-surface] = "developers" | "network" so style.css can
 * scope per-surface navbar CTA visibility. Auto-loaded by Mintlify on
 * every page. Updates on SPA route changes (Mintlify is Next.js).
 */
(function () {
  function setSurface() {
    var s = location.pathname.indexOf("/network") === 0 ? "network" : "developers";
    document.body.setAttribute("data-surface", s);
  }
  setSurface();
  ["pushState", "replaceState"].forEach(function (m) {
    var orig = history[m];
    history[m] = function () {
      var r = orig.apply(this, arguments);
      setSurface();
      return r;
    };
  });
  window.addEventListener("popstate", setSurface);
})();
