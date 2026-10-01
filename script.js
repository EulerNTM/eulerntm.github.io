(function () {
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var label = document.getElementById("theme-label");
  var toc = document.getElementById("toc");

  function applyTheme(theme) {
    var dark = theme === "dark";
    root.setAttribute("data-theme", theme);
    toggle.setAttribute("aria-pressed", String(dark));
    label.textContent = dark ? "Light mode" : "Dark mode";
  }

  applyTheme(root.getAttribute("data-theme") || "light");

  toggle.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // Close the contents dropdown after choosing a link, clicking elsewhere, or pressing Escape
  toc.addEventListener("click", function (e) { if (e.target.tagName === "A") toc.removeAttribute("open"); });
  document.addEventListener("click", function (e) { if (!toc.contains(e.target)) toc.removeAttribute("open"); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") toc.removeAttribute("open"); });
})();
