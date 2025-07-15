let $app=document.getElementById("app"),API="[GET] https://api.escuelajs.co/api/v1/products?offset=0&limit=20",main=async()=>{let e=await fetch("[GET] https://api.escuelajs.co/api/v1/products?offset=0&limit=20"),a=await e.json(),t=a?.map(e=>`
        <article class="Card">
        <img src="${e.images[0]}">
        <h2>
            ${e.title}<small> Precio ${e.price} </small>
        </h2>
    </article> 
        `).join(""),i=document.getElementById("Main");i.classList.add("Item"),i.innerHTML=t,$app.appendChild("newElement")};main();
//# sourceMappingURL=parcel.8b235cd1.js.map
