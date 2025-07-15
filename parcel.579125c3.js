const $app = document.getElementById("app");
const API = 'https://api.escuelajs.co/api/v1/products?offset=5&limit=20';
const main = async ()=>{
    const response = await fetch(API);
    const products = await response.json();
    const output = products?.map((product)=>{
        return `
        <article class="Card">
        <img src="${product.images[0]}">
        <h2>
            ${product.title}<small> Precio $${product.price} </small>
        </h2>
    </article> 
        `;
    }).join('');
    const newElement = document.createElement("section");
    newElement.classList.add("Items");
    newElement.innerHTML = output;
    $app.appendChild(newElement);
};
main();

//# sourceMappingURL=parcel.579125c3.js.map
