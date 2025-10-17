// Garante que o DOM já foi carregado
document.addEventListener('DOMContentLoaded', () => {

// --- Seleções ---
const leftBtn = document.getElementById('toggle-btn-esquerda');
const rightBtn = document.getElementById('toggle-btn-direita');
const leftSidebar = document.getElementById('sidebar');
const rightSidebar = document.getElementById('sidebar-direita');

// Função para alternar sidebar esquerda e trocar ícone
const toggleSidebarEsquerda = () => {
if (!leftSidebar) return;
leftSidebar.classList.toggle('minimized');

if (leftBtn) {
    const icon = leftBtn.querySelector('i');
    if (icon) {
    if (icon.classList.contains('fa-chevron-left')) {
        icon.classList.remove('fa-chevron-left');
        icon.classList.add('fa-chevron-right');
    } else {
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-left');
    }
    }
}
};

// Função para alternar sidebar direita e trocar ícone
const toggleSidebarDireita = () => {
if (!rightSidebar) return;
rightSidebar.classList.toggle('minimized');

if (rightBtn) {
    const icon = rightBtn.querySelector('i');
    if (icon) {
    if (icon.classList.contains('fa-chevron-right')) {
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-left');
    } else {
        icon.classList.remove('fa-chevron-left');
        icon.classList.add('fa-chevron-right');
    }
    }
}
};

// Adiciona event listeners apenas se os botões existirem
if (leftBtn) leftBtn.addEventListener('click', toggleSidebarEsquerda);
if (rightBtn) rightBtn.addEventListener('click', toggleSidebarDireita);

// --- Lógica do Quiz (mantida aqui para garantir carregamento) ---
const submitBtn = document.getElementById("submit");
if (submitBtn) {
submitBtn.addEventListener("click", () => {
    let score = 0;
    const answers = { q1: "b", q2: "c", q3: "b" };

    for (let q in answers) {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected && selected.value === answers[q]) score++;
    }

    const result = document.getElementById("result");
    if (result) {
    result.textContent = `Você acertou ${score} de 3 perguntas.`;
    result.style.color = score === 3 ? "green" : score === 2 ? "orange" : "red";
    }
});
}

});
