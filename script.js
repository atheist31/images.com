let url = "https://fakestoreapi.com/products";
let res = fetch(url);
res
  .then((product) => {
    return product.json();
  })
  .then((product) => {
    // console.log(product)
    ihtml = "";
    for (item in product) {
      console.log(product[item]);
      ihtml += `
        <div class="card" style="width:42rem  border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease-in-out; " >
        <img src="${product[item].image}" class="card-img-top" alt="..." style="width:22rem"/>
        <div class="card-body">
          <h5 class="card-title" style=" font-size: 18px;font-weight: bold;">${product[item].title}</h5>
          <p class="card-text" style="font-size: 14px;color: #666;">Description : ${product[item].description}</p>
          <h5 class="card-text">Price : ${product[item].price}</h5>
          <p href="#" class="btn btn-primary">Rating : ${product[item].rating.rate}</p>
        </div>
        </div>`;
    }
    cardContainer.innerHTML = ihtml;
  });
