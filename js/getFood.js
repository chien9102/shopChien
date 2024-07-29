getAll(urlFood, displayFood);
function displayFood(data) {
    const foodBox = document.querySelector(".right-foods")
    data.forEach(element => {
        const item = document.createElement("div");
        item.classList.add("col");
        item.innerHTML = `
                        <div class="card p-2">
                            <div class="food-header">
                                <h6>${element.id}</h6>
                                <p>${element.name}</p>
                                <i class="fa-solid fa-pen-to-square"></i>
                            </div>
                            <div class="card-img">
                            <img src="${element.img}" class="card-img-top" alt="...">
                            </div>
                            <div class="card-bodyfood">
                                <p style="color: pink;">${element.price}$</p>
                                <div class="card-bodyfood1">
                                    <button class="fa-solid fa-minus"></button>
                                    <input readonly value="0" class="quantity"></input>
                                    <button class="fa-solid fa-plus"></button>                                
                                </div>
                            </div>
                        </div>`;
        foodBox.appendChild(item);

        var plus = item.querySelector(".fa-plus");
        var quantity = item.querySelector(".quantity");
        var minus = item.querySelector(".fa-minus");

        plus.addEventListener("click", () => {
            quantity.value = parseInt(quantity.value) + 1;//parseInt chuyển thành chữ  // value chuyển thành số

        });
        minus.addEventListener("click", () => {
            if (parseInt(quantity.value) > 0) {
                quantity.value = parseInt(quantity.value) - 1;
            }

        });

    })
}

var qw = item.querySelector(".paybill")
qw.addEventListener("click", () => {
    var option = document.createElement("option");
    option.value = element.id;
    option.innerText = `Table ${element.id}`;
    selectTable.appendChild(option);
})


function addFood(id) {
    const selectTable = document.getElementById("select-table");
    selectTable.value = id;
    box[1].style.display = "none";
    box[2].style.display = "block";
    leftbody[1].style.color = "white";
    leftbody[2].style.color = "red";
}