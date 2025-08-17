(function () {
  const body = document.body;

  const toggleSidebar = document.getElementById("toggleSidebar");
  const toggleUserbar = document.getElementById("toggleUserbar");

  const KEY_LEFT = "prototype.sidebarLeft";
  const KEY_RIGHT = "prototype.sidebarRight";

  // Restaura estado salvo
  if (localStorage.getItem(KEY_LEFT) === "1") {
    body.classList.add("is-collapsed-left");
    toggleSidebar?.setAttribute("aria-expanded", "false");
  }
  if (localStorage.getItem(KEY_RIGHT) === "1") {
    body.classList.add("is-collapsed-right");
    toggleUserbar?.setAttribute("aria-expanded", "false");
  }

  function setAriaAndSave(side, collapsed) {
    if (side === "left") {
      toggleSidebar?.setAttribute("aria-expanded", String(!collapsed));
      localStorage.setItem(KEY_LEFT, collapsed ? "1" : "0");
    } else {
      toggleUserbar?.setAttribute("aria-expanded", String(!collapsed));
      localStorage.setItem(KEY_RIGHT, collapsed ? "1" : "0");
    }
  }

  // ---- SIDEBAR ESQUERDA ----
  toggleSidebar?.addEventListener("click", () => {
    const collapsed = body.classList.toggle("is-collapsed-left");
    setAriaAndSave("left", collapsed);
  });

  // ---- SIDEBAR DIREITA ----
  toggleUserbar?.addEventListener("click", () => {
    const collapsed = body.classList.toggle("is-collapsed-right");
    setAriaAndSave("right", collapsed);
  });

  // Feedback visual nos botões (de ambas as barras)
  document.querySelectorAll(".nav__item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const label = btn.querySelector(".label")?.textContent || "Botão";
      const main = document.getElementById("main");
      const box = document.createElement("div");
      box.className = "card";
      box.innerHTML = `<h2>${label}</h2><p>Este botão é apenas ilustrativo no protótipo.</p>`;
      main.prepend(box);
      setTimeout(() => box.remove(), 2200);
    });
  });
})();
