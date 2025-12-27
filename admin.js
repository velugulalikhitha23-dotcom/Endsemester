document.addEventListener('DOMContentLoaded', () => {
    const projectForm = document.getElementById('projectForm');
    const progressTable = document.getElementById('progressTable').querySelector('tbody');

    
    let savedProjects = JSON.parse(localStorage.getItem('eduSyncProjects')) || [];
    renderTable();

    
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();

        
        const newProject = {
            id: Date.now(), 
            title: document.getElementById('title').value,
            group: document.getElementById('group').value,
            status: document.getElementById('status').value
        };

        
        savedProjects.push(newProject);
        localStorage.setItem('eduSyncProjects', JSON.stringify(savedProjects));

        
        renderTable();
        projectForm.reset();
    });

    
    function renderTable() {
        progressTable.innerHTML = ''; 
        savedProjects.forEach(project => {
            const row = document.createElement('tr');
            
            
            let statusColor = "#f4a261"; 
            if(project.status === "In Progress") statusColor = "#2a9d8f"; // Greenish
            if(project.status === "Completed") statusColor = "#264653"; // Dark Blue

            row.innerHTML = `
                <td>${project.title}</td>
                <td>${project.group}</td>
                <td style="color: ${statusColor}; font-weight: bold;">${project.status}</td>
                <td><button class="delete-btn" onclick="deleteProject(${project.id})">Remove</button></td>
            `;
            progressTable.appendChild(row);
        });
    }

    
    window.deleteProject = (id) => {
        savedProjects = savedProjects.filter(p => p.id !== id);
        localStorage.setItem('eduSyncProjects', JSON.stringify(savedProjects));
        renderTable();
    };
});