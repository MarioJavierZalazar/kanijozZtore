const requestURL = '../data/products.json';
const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
    const data = request.response;
    for (const product of data){
        products.push(new Product(product.id,product.name,product.price,product.text,product.picture))
    }
    grillaDePorductosUI(products.reverse());
  };