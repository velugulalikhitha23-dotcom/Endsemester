document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); 

  var username = document.getElementById("username").value.trim();
  var password = document.getElementById("password").value.trim();
  var roles = document.getElementsByName("role");
  var selectedRole = "";

  for (var i = 0; i < roles.length; i++) {
    if (roles[i].checked) {
      selectedRole = roles[i].value;
    }
  }

   if (username === "" || password === "") {
    alert("Please fill out username and password!");
    return;
  }

 if (username !== password) {
    alert("Username and Password must be the same!");
    return;
  }

 if (selectedRole === "") {
    alert("Please select a role!");
    return;
  }

  if (selectedRole === "admin") {
    alert("Login successful as Admin!");
    window.location.href = "admin.html";
  } else {
    alert("Login successful as Student!");
    window.location.href = "student.html";
  }
});