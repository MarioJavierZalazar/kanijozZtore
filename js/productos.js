const test = document.querySelector("#listaDeProductos2");
let products = [];

class Product {
    constructor(id, name, price, text, picture) {
        this.id = id,
            this.name = name,
            this.price = price;
        this.text = text;
        this.picture = picture;
    }
};


const grillaDePorductosUI = (lista) => {
    for (const product of lista) {
        const card = document.createElement("div");
        const cardImg = document.createElement("div");
        card.className = "col-12 col-md-3 mb-5 rounded";
        cardImg.className = "cardImg";
        card.innerHTML = `
                 <div class="cardImg">
                     <img src=${product.picture} class="card-img-top img-fluid" alt=${product.name} data-bs-toggle="modal" data-bs-target="#modal${product.id}">
                 </div>
                 <div class="cardText p-3 bg-dark textoPrimario rounded-bottom">
                     <h5 class="text-center fw-bold">${product.name}</h5>
                     <p class="card-text">${product.text}</p>
                     <div class="d-flex justify-content-around align-items-baseline">
                         <a target="_blank" href="https://api.whatsapp.com/send?phone=541173692881&text=Hola%20me%20interesa%20este%20producto%20${product.name}"
                        class="btn">Contactar</a>
                        <div>
                            <p>$${product.price}</p>
                        </div>
                    </div>
                    
                 </div>
                 <!-- Modal -->
                 <div class="modal fade" id="modal${product.id}" tabindex="-1" aria-hidden="true">
                     <div class="modal-dialog modal-dialog-centered modal-lg">
                         <div class="modal-content">
                             <div>
                                 <img src=${product.picture} class="card-img-top img-fluid" alt=${product.name}>
                                 <button type="button" class="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="modal" aria-label="Close"></button>
                             </div>
                         </div>
                     </div>
                 </div>
         `
         test.appendChild(card);;
    }
}
