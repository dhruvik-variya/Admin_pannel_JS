import { Navbar } from "../Component/navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let data = JSON.parse(localStorage.getItem("signupdata")) || [];

const handledata = (e) => {
  e.preventDefault(); 

  const user = {
    name: document.getElementById("name").value.trim(),
    imageUrl: document.getElementById("image-url").value,
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value.trim(),
  };

  if(user.name.length === 0){
    alert("Please enter your name");
      return
   }
   if(user.email.length === 0){
    alert("Please enter your email");
      return
   }
   if(user.password.length < 5){
    alert("Password must be at least 5 characters long");
      return
   }

  data.push(user);
  localStorage.setItem("signupdata", JSON.stringify(data));

  alert("Signup successful");
  window.location.href = "./login.html";



};

document.getElementById("signup-form").addEventListener("submit", handledata);
