console.log("productlist.js is connected"); //test at js er connected
const klikKategori = new URLSearchParams(window.location.search).get("category");
console.log(klikKategori); //test at jeg får fat i den kategori jeg klikker på

const container = document.querySelector(".productlist");
const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${klikKategori}`; 
document.querySelector("h1").textContent=klikKategori; 

function getData() { 
  fetch(endpoint).then(res=>res.json()).then(showData)}

 
  function showData (json){
  let markup=""; 
    json.forEach (product=> {
     console.log(product);
     markup +=  
` 
     <div class="card">
     
        <div class="soldout-overlay"${product.soldout ? 'soldout' : ''}>
         <a href="product.html?id=${product.id}">   <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Free Items" class="card-image"></a> 
          <p class="p"><strong>${product.productdisplayname} </strong></p>
        <p class="p2">Øreringe - Pilgrim</p>
        <p class="p">Prev. DKK 600</p>
        <p class="p">${product.price},- ${Math.round(product.price - (product.price*product.discount) /100) }</p> 
        ${product.discount ?`<p class="procent">${product.discount}% Off</p>`:""}
            ${product.soldout ? `<p class="soldout">SOLD OUT</p>` : ""}
        <a href="product.html" class="p">Se Mere</a></div>
    </div>`
 
        // `<div class="card">  
    
       // <a href="product.html"> <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Accessories" class="card-image"></a> 
       // <p class="p"><strong>${product.productdisplayname}</strong></p>
       //<p class="p2">Øreringe - ZARA</p>
       //<p class="p">${product.price}</p>
       // <a href="product.html" class="p">Se Mere</a> 
   // </div>``
    
  });  
  container.innerHTML=markup; 
}
  getData(); 

// filterfunktionalitet (kan du f.eks. sætte på knapper)
// vælg alle knapper og sæt en click eventListener på hver
document.querySelectorAll("button").forEach(knap => knap.addEventListener("click", filter));

let allData; // erklær en variabel til alle produkter

function getData() {
  fetch(endpoint)
    .then((response) => response.json())
    .then(data => {
      allData = data; // gem alle produkter
      showData(allData); // vis alle produkter
    });
}

function filter(e) {
  const valgt = e.target.textContent;
  if (valgt == "All") {
    showData(allData); // vis alle produkter
  } else {
    const udsnit = allData.filter(element => element.gender == valgt); // filtrer produkter
    showData(udsnit); // vis filtrerede produkter
  }
}