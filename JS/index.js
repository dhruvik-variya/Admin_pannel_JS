import { ApiMethods } from "../Component/helper.js";
import { Navbar } from "../Component/navbar.js";
 
document.getElementById("navbar").innerHTML = Navbar();
 
let data = JSON.parse(localStorage.getItem("signupdata")) || [];

// Sidebar
const Sidebar = () => {
  data.map((user) => {
    document.getElementById("profile-image").src = user.imageUrl;
    document.getElementById("profile-name").innerHTML = `Name: ${user.name}`;
  });
};
Sidebar();

// Main content  
let Allproduct = [];

const mainContent = (products) => {

  document.getElementById("main-content").innerHTML = "";

  products.map((item) => {

    let div = document.createElement("div");
    div.className = "main-product";

    div.innerHTML = `
      <img src="${item.image}" alt="img">
      <h3>${item.name}</h3>
      <p>$${item.price}</p>
      <p>${item.category}</p>
    `;

    document.getElementById("main-content").append(div);
  });
};

// Fetch products for functionality

const fetchProducts = async () => {
  Allproduct = await ApiMethods.get();  
  mainContent(Allproduct);  
};

fetchProducts();

// Search  
const handleSearch = (e) => {

  e.preventDefault();

  let searchInput = document.getElementById("search-input").value.toLowerCase();

  let filteredData = Allproduct.filter((item) =>
    item.name.toLowerCase().includes(searchInput)
  );

  mainContent(filteredData);  
};

document.getElementById("searchBtn").addEventListener("click", handleSearch);



// Filter

const handleFilter = (category) => {

  let filteredData = Allproduct.filter((item) =>
    item.category.toLowerCase() === category.toLowerCase() 
  );

  mainContent(filteredData);  
};

document.getElementById("filter").addEventListener("change", (event) => {
  handleFilter(event.target.value.trim());  
});


// Sorting functionality
const handleSort = (sortType) => {

  let sortedData = [...Allproduct]; 

  if (sortType === "lth") {

    sortedData.sort((a, b) => a.price - b.price); 
  } 
  else if (sortType === "htl") {
    sortedData.sort((a, b) => b.price - a.price);  
  }
  mainContent(sortedData);  
};

document.getElementById("sort").addEventListener("change", (event) => {
  handleSort(event.target.value);
});
