console.log("Hello World");
const container = document.querySelector(".galleri");
const endpoint = `https://kea-alt-del.dk/t7/api/categories`;

function getData() {
    fetch(endpoint) 
    .then((response) => response.json())
    .then(showData);
}
function showData(data) {
    let markup="";
    data.forEach((element)=> markup+= `

    <div class="container">
        
        <a href="productlist.html?category=${element.category}"> <img src="images/accesories.webp" alt="Accessories" class="category-image"></a> 
        <h2>${element.category}</h2>
    </div>  `
);
    container.innerHTML=markup; 
}

getData();

  