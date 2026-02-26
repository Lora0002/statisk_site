function showData(data) { 
    let markup =""; 
    data.forEach ((element)=>markup+= `<a href="productlist.html?category=${element.category}">${element.category} </a>`);
    container.innerHTML=markup;}