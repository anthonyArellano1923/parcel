let $app=document.getElementById("app"),API="https://api.escuelajs.co/api/v1/products?offset=5&limit=20",main=async()=>{let a=await fetch("https://api.escuelajs.co/api/v1/products?offset=5&limit=20"),e=await a.json(),t=e?.map(a=>`
        <article class="Card">
        <img src="${a.images[0]}">
        <h2>
            ${a.title}<small> Precio $${a.price} </small>
        </h2>
    </article> 
        `).join(""),i=document.createElement("section");i.classList.add("Items"),i.innerHTML=t,$app.appendChild(i)};main();
//# sourceMappingURL=parcel.dea64849.js.map
