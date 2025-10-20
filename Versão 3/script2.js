// Toggle left sidebar
const sidebar = document.getElementById('sidebar');
const toggleLeft = document.getElementById('toggle-btn-esquerda');
toggleLeft.addEventListener('click', ()=>{
    sidebar.classList.toggle('minimized');
    document.body.classList.toggle('sidebar-left-minimized');
    // rotate icon
    const icon = toggleLeft.querySelector('i');
    icon.classList.toggle('fa-chevron-left');
    icon.classList.toggle('fa-chevron-right');
});

// Toggle right sidebar
const sidebarR = document.getElementById('sidebar-direita');
const toggleRight = document.getElementById('toggle-btn-direita');
toggleRight.addEventListener('click', ()=>{
    sidebarR.classList.toggle('minimized');
    document.body.classList.toggle('sidebar-right-minimized');
    const icon = toggleRight.querySelector('i');
    icon.classList.toggle('fa-chevron-right');
    icon.classList.toggle('fa-chevron-left');
});

// Edit panel
const editBtn = document.getElementById('editBtn');
const editPanel = document.getElementById('editPanel');
const closeEdit = document.getElementById('closeEdit');
const saveBtn = document.getElementById('saveBtn');
const cancelBtn = document.getElementById('cancelBtn');

editBtn.addEventListener('click', ()=> editPanel.style.display = 'block');
closeEdit.addEventListener('click', ()=> editPanel.style.display = 'none');
cancelBtn.addEventListener('click', ()=> editPanel.style.display = 'none');

saveBtn.addEventListener('click', ()=>{
    const name = document.getElementById('inputName').value.trim();
    const role = document.getElementById('inputRole').value.trim();
    const bio = document.getElementById('inputBio').value.trim();
    if(name) document.getElementById('profileName').textContent = name;
    if(role) document.getElementById('profileRole').textContent = role;
    if(bio) document.getElementById('profileBio').textContent = bio;
    editPanel.style.display = 'none';
});

// Download CV (simulação)
const downloadBtn = document.getElementById('downloadBtn');
downloadBtn.addEventListener('click', ()=>{
    const blob = new Blob([`CV de ${document.getElementById('profileName').textContent}`],{type:'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'CV.txt';
    document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
});
