
const nameOfUser = document.getElementById("user");

nameOfUser.textContent = sessionStorage.getItem("key")

let productList = [];
let itemsToBuy = [];
productList.push(new Product("Bord", 300, 1))
productList.push(new Product("Häst", 19999, 2));
productList.push(new Product("Hund", 1497, 3));
productList.push(new Product("Hus", 2490000, 4));
productList.push(new Product("Bil", 19999, 5));


const korg = document.getElementById("korg");

const buyTableButton = document.getElementById("buyTableButton");
const buyChairButton = document.getElementById("buyChairButton");
const buyLampButton = document.getElementById("buyLampButton");
const buyDeskButton = document.getElementById("buyDeskButton");
const buyWardrobeButton = document.getElementById("buyWardrobeButton");

buyTableButton.addEventListener("click", function(event) {
    itemsToBuy.push(new Product("Bord", 300, 1));
    refreshItemList();
});
buyChairButton.addEventListener("click", function(event) {
    itemsToBuy.push(new Product("Häst", 19999, 2));
    refreshItemList();
});
buyLampButton.addEventListener("click", function(event) {
    itemsToBuy.push(new Product("Hund", 1497, 3));
    refreshItemList();
});
buyDeskButton.addEventListener("click", function(event) {
    itemsToBuy.push(new Product("Hus", 2490000, 4));
    refreshItemList();
});
buyWardrobeButton.addEventListener("click", function(event) {
    itemsToBuy.push(new Product("Bil", 19999, 5));
    refreshItemList();
});

function refreshItemList() {
    korg.innerHTML = "";

    itemsToBuy.forEach(function(product, index) {
        const productDiv = document.createElement("div");

        const productInfo = document.createElement("p");
        productInfo.textContent = product.name;
        productDiv.appendChild(productInfo);

        
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("removeButton");
      
        removeButton.setAttribute("data-index", index);
        productDiv.appendChild(removeButton);

        
        korg.appendChild(productDiv);
    });
}

korg.addEventListener("click", function(event) {
    
    if (event.target.classList.contains("removeButton")) {
        const indexToRemove = parseInt(event.target.getAttribute("data-index"));
        itemsToBuy.splice(indexToRemove, 1);
        refreshItemList();
    }
});