document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const role = document.getElementById("role").value;
    const password = document.getElementById("password").value;
    const user = { username, role, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful! Please login to continue.");
    window.location.href = "login.html";
});
