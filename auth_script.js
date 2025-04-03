document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const showRegister = document.getElementById("showRegister");
    const showLogin = document.getElementById("showLogin");

    // Switch between login and register forms
    showRegister.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");
    });

    showLogin.addEventListener("click", (e) => {
        e.preventDefault();
        registerForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });

    // Handle registration
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
        const userType = document.getElementById("userType").value;
        
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ email, password, userType });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registration successful! Please log in.");
        window.location.href = "auth.html";
    });

    // Handle login
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
        
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            alert("Login successful! Redirecting to events page.");
            window.location.href = "events.html";
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});
