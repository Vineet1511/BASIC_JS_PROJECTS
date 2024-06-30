let itemsContainer = document.querySelector(".items-container");


let bagItems = JSON.parse(localStorage.getItem("cartProducts")) || [];
displayItems(items);

let cartAdd = [];

function displayItems(items){
    
    document.querySelector(".items-container").innerHTML = "";

    items.forEach((item)=>{
        let div = document.createElement("div")
        div.setAttribute("class", "item-container")

        let image = document.createElement("img");
        image.setAttribute("src", item.image);

    
        let div1 = document.createElement("div");
        div1.setAttribute("class", "prod-rating");
        div1.innerText = `${item.rating.stars} ⭐ | ${item.rating.count}`
    

        let div2 = document.createElement("div");
        div2.setAttribute("class", "prod-name");
        div2.innerText = item.company;

        let div3 = document.createElement("div");
        div3.setAttribute("class", "prod-description");
        div3.innerText = item.item_name;


        let div4 = document.createElement("div");
        div4.setAttribute("class", "prod-pricing");

        let span1 = document.createElement("span");
        span1.setAttribute("class", "current-price");
        span1.innerText = `Rs. ${item.current_price}`;

        let span2 = document.createElement("span");
        span2.setAttribute("class", "original-price");
        span2.innerText = `Rs. ${item.original_price}`;

        let span3 = document.createElement("span");
        span3.setAttribute("class", "discount");
        span3.innerText = `(${item.discount_percentage}% OFF)`;

        div4.append(span1, span2,span3);

        let btnBag = document.createElement("button");
        btnBag.innerText = "Add to Bag";
        btnBag.setAttribute("class", "btn-bag");
        btnBag.addEventListener("click", ()=>{
            cartAdd.push(item);
            localStorage.setItem("cartProducts", JSON.stringify(cartAdd));
        });

        div.append(image, div1, div2, div3, div4, btnBag);
        document.querySelector(".items-container").append(div);

    });

}

