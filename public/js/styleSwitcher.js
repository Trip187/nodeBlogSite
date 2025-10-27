sc = {
  init: function () {
    // Apply saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    }

    // Setup theme button
    sc.first = document.getElementsByTagName("p")[0];
    const btn = DOMhelp.createLink("#", "Theme");
    sc.first.replaceChild(btn, sc.first.firstChild);
    DOMhelp.addEvent(btn, "click", sc.toggleTheme, false);

    // Apply correct icon
    sc.updateIcon(btn);
  },

  toggleTheme: function (e) {
    const isDark = document.body.classList.toggle("dark-mode");

    // Save to localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Update icon
    sc.updateIcon(this);

    DOMhelp.cancelClick(e);
  },

  updateIcon: function (btn) {
    btn.innerHTML = document.body.classList.contains("dark-mode")
      ? `Theme 🌙`
      : `Theme ☀️`;
  },
};

DOMhelp.addEvent(window, "load", sc.init, false);
