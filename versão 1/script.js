(function () {
  const body = document.body;
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleSidebar");
  const STORAGE_KEY = "prototype.sidebarCollapsed";

  // Restaura estado salvo
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "1") {
    body.classList.add("is-collapsed");
    toggleBtn.setAttribute("aria-expanded", "false");
  }

  function toggleSidebar() {
    const collapsed = body.classList.toggle("is-collapsed");
    toggleBtn.setAttribute("aria-expanded", String(!collapsed));
    localStorage.setItem(STORAGE_KEY, collapsed ? "1" : "0");
  }

  toggleBtn.addEventListener("click", toggleSidebar);

  // Tecla rápida: Ctrl/Cmd + B para colapsar/expandir
  window.addEventListener("keydown", (e) => {
    const isMeta = e.ctrlKey || e.metaKey;
    if (isMeta && (e.key.toLowerCase() === "b")) {
      e.preventDefault();
      toggleSidebar();
    }
  });

  // Apenas para protótipo visual: feedback ao clicar nos botões do menu
  sidebar.addEventListener("click", (e) => {
    const btn = e.target.closest(".nav__item");
    if (!btn) return;
    const label = btn.querySelector(".label")?.textContent || "Item";
    // Mostra um feedback simples na área de conteúdo
    const main = document.getElementById("main");
    const box = document.createElement("div");
    box.className = "card";
    box.innerHTML = `<h2>${label}</h2><p>Este botão é apenas ilustrativo no protótipo.</p>`;
    main.prepend(box);
    // Remove depois de alguns segundos para não poluir
    setTimeout(() => box.remove(), 2200);
  });
})();
