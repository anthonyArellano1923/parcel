let $app=document.getElementById("app"),API="[GET] https://api.escuelajs.co/api/v1/products?offset=0&limit=20",main=async()=>{let e=await fetch("[GET] https://api.escuelajs.co/api/v1/products?offset=0&limit=20"),t=await e.json(),a=t?.map(e=>`
        <article class="Card">
        <img src="${e.images[0]}">
        <h2>
            ${e.title}<small> Precio ${e.price} </small>
        </h2>
    </article> 
        `).join(""),i=document.getElementById("Main");i.classList.add("Item"),i.innerHTML=a,$app.appendChild("newElement")};
//# sourceMappingURL=parcel.4e23f84d.js.map
