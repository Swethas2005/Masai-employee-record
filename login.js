document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.username === username && user.password === password) {
        if (user.role === "HR") {
            window.location.href = "index.html";
        } else {
            alert("Welcome, " + username + ". You are logged in.");
            window.location.href = "index.html";
        }
    } else {
        alert("Invalid username or password");
    }
});
