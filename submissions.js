document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('submissionsTableBody');
    const emptyMessage = document.getElementById('emptyMessage');

    function loadSubmissions() {
        const data = JSON.parse(localStorage.getItem('eduSyncSubmissions')) || [];
        tableBody.innerHTML = "";

        if (data.length === 0) {
            emptyMessage.style.display = "block";
            return;
        }

        emptyMessage.style.display = "none";

        data.forEach((sub, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${sub.project}</td>
                <td>${sub.group}</td>
                <td>${sub.fileName}</td>
                <td>${sub.time}</td>
                <td>
                    <button class="btn-delete" onclick="removeEntry(${index})">
                        Delete
                    </button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    window.removeEntry = (index) => {
        let data = JSON.parse(localStorage.getItem('eduSyncSubmissions')) || [];
        data.splice(index, 1);
        localStorage.setItem('eduSyncSubmissions', JSON.stringify(data));
        loadSubmissions();
    };

    loadSubmissions();
});