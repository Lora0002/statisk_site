const category = new URLSearchParams(window.location.search).get("category"); //find category i url'en
const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${category}`; //sæt category på endpoint
document.querySelector("h2").textContent = category; //skriv category i sidens overskrift

const listContainer = document.querySelector("#productListContainer"); //valg html-container til listen

function getData() {
  fetch(endpoint)
    .then((response) => response.json())
    .then(showProducts);
}

function showProducts(products) {
  let markup = ""
  products.forEach(
    (product) => markup += `<article class="smallProduct ${product.soldout && "soldOut"} ${product.discount && "onSale"}">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="product image" />
            <h3>${product.productdisplayname}</h3>
            <p class="subtle">Tshirts | Nike</p>
            <p class="price">DKK <span>${product.price}</span>,--</p>
            <div class="discounted">
              <p>Now DKK <span>${Math.round(product.price - (product.price * product.discount) / 100)}</span>,--</p>
              <p><span>${product.discount}</span>%</p>
            </div>
            <a href="product.html?id=${product.id}">Read More</a>
          </article>`,
  );
  listContainer.innerHTML = markup;
}

getData();
