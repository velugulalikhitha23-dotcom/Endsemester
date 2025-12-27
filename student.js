document.getElementById('submissionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const project = document.getElementById('projectSelect').value;
    const group = document.getElementById('groupName').value;
    const fileInput = document.getElementById('fileInput');

    if (fileInput.files.length === 0) {
        alert("Please upload a file!");
        return;
    }

    const fileName = fileInput.files[0].name;

    const newSubmission = {
        project,
        group,
        fileName,
        time: new Date().toLocaleDateString() 
    };

    let data = JSON.parse(localStorage.getItem('eduSyncSubmissions')) || [];
    data.push(newSubmission);
    localStorage.setItem('eduSyncSubmissions', JSON.stringify(data));

    window.location.href = "submissions.html";
});