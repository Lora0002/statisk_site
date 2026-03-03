const id=new URLSearchParams(window.location.search).get("id");

const endpoint = `https://kea-alt-del.dk/t7/api/products/${id}`;
const productContainer = document.querySelector(".product-container")
function getData() {
    fetch(endpoint) .then(res=> res.json()).then(showData);
}
function showData(json){
    console.log(json);
    productContainer.innerHTML= `
       
        <a href="productlist.html?category=${json.category}" class="close-button">×</a>
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${json.id}.webp" alt="produktbillede" class="product">
        <div class="product-info">
        <h1>Product Information ${json.productdisplayname}</h1>
        <p><strong>Model name</strong></p>
        <p>${json.category}</p>
        <p><strong>Color</strong></p>
        <p>${json.color}</p>
        <p><strong>Price</strong></p>
        <p>DKK ${json.price}</p>
        <button class="add-to-cart">Add to Cart</button></div>`;}
getData();