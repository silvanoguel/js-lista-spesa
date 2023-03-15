// Stampare la lista della spesa e stampare nel dom con il ciclo FOR

// const shoppingList = ["latte", "pane", "mozarella", "pollo", "frutta"];
// const listElem = document.querySelector("ul");

// let listItems = "";
// for (let i = 0; i < shoppingList.length; i++) {
//     console.log(shoppingList[i]);
//     listItems += `<li>${shoppingList[i]}</li>`;
// }
  
// console.log(listItems);

// listElem.innerHTML = listItems;



const shoppingList = ["latte", "pane", "mozzarella", "pollo", "frutta"];

let listItem = "";
let i = 0;
while (i < shoppingList.length) {
    listItem += `<li>${shoppingList[i]}</li>`;
    i++;
}

document.getElementById("listaspesa").innerHTML = listItem;

