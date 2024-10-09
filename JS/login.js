import { Navbar,Logout } from "../Component/navbar.js";

document.getElementById("navbar").innerHTML = Navbar();
Logout();

let data = JSON.parse(localStorage.getItem("signupdata")) || [];

const userdata = (e) => {
    e.preventDefault();
    let user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };

    let check = data.filter(
        (ele) => ele.email === user.email && ele.password === user.password
    );

    if (check.length > 0) {
        alert("Login successful");
        localStorage.setItem("username", check[0].name); 
        localStorage.setItem("Login", true); 
        window.location.href = "/index.html";
    } else {
        alert("Invalid email or password");
    }
};

document.getElementById("login").addEventListener("submit", userdata);
