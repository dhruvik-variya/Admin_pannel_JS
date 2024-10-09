import { ApiMethods } from "../Component/helper.js";
import { Navbar } from "../Component/navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

const handleProducts=(e)=>{
e.preventDefault();

let product={
    name:document.getElementById("ProductName").value,
    price:document.getElementById("price").value,
    category:document.getElementById("category").value,
    image:document.getElementById("image").value,
}
console.log(product);

PostProducts(product);
alert("Product Added!");

}

document.getElementById("product-form").addEventListener("submit",handleProducts);

const PostProducts = async (product) => {
    await ApiMethods.post(product)
}