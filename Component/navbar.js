export const Navbar =()=>{
  let username = localStorage.getItem("username");
  let Login = localStorage.getItem("Login");
    return `
    <header class="header">
        <ul class="nav">
          <li class="navigation-link">
            <a aria-current="page" href="/index.html">Home</a>
          </li>
          <li class="navigation-link">
            <a href="/PAGES/add.html">Add Product</a>
          </li>
          <li class="navigation-link">
            <a href="/PAGES/signup.html"> ${Login ? username : 'Signup'}</a>
          </li>
          <li class="navigation-link">
            <a href="/PAGES/login.html" id="logout">${Login ? 'Logout' : 'Login'}</a>
          </li>
        </ul>
      </header>
    
    `
}
export const Logout = () => {
  const logout = document.getElementById("logout");

  if (logout && localStorage.getItem("Login")) {
    logout.addEventListener("click", (e) => {
      e.preventDefault();
      if (confirm("Are you sure you want to logout?")) {
        localStorage.removeItem("username");
        localStorage.removeItem("Login");
        window.location.href = "/PAGES/login.html";
      }
    });
  }
};

 