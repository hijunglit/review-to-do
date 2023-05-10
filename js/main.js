

/* add grocery */
const form = document.querySelector("#form");
const groceryList = document.querySelector(".list");
let items;

// event listener
form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();
    const input = form.querySelector("input#add");
    const date = new Date();
    let itemId = date.getTime();
    const itemObj = {id:`${itemId}`, item:`${input.value}`}
    items.push(itemObj);
    localStorage.setItem("items", JSON.stringify(items));
    displayItems();
    input.value = '';
}

function displayItems() {
    const input = form.querySelector("input#add");
    const savedItems = JSON.parse(localStorage.getItem("items"));
    groceryList.innerText = "";
    if(!savedItems) {
        items = [];
    } else {
        for(let i = 0; i<savedItems.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = `<span>${savedItems[i].item}</span><span class="delete">❌</span>`;
            li.id = savedItems[i].id;
            groceryList.append(li);
        }
        // Remove grocery
        let deleteBtn = groceryList.querySelectorAll("li span.delete");
        deleteBtn.forEach((item) => {
            item.addEventListener("click", function() {
                item.parentNode.remove();
                const targetItem = items.find((element) => element.id == item.parentNode.id);
                const targetIndex = items.indexOf(targetItem);
                items.splice(targetIndex, 1);
                localStorage.setItem("items", JSON.stringify(items));
            });
        });
        items = savedItems;
    }

    /*********** When you use forEach function instead of for statement **************/
    // savedItems.forEach((item, index) => {
    //     let li = document.createElement("li");
    //     li.innerText = item.item;
    //     groceryList.append(li);
    // });
}

displayItems();