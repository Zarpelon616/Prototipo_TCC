// Função para alternar a sidebar esquerda
const toggleSidebarEsquerda = () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('minimized');
};

// Função para alternar a sidebar direita
const toggleSidebarDireita = () => {
    const sidebar = document.getElementById('sidebar-direita');
    sidebar.classList.toggle('minimized');
};

// Adiciona os event listeners aos botões
// Esta parte agora só é executada após as funções estarem definidas
document.getElementById('toggle-btn-esquerda').addEventListener('click', toggleSidebarEsquerda);
document.getElementById('toggle-btn-direita').addEventListener('click', toggleSidebarDireita);