getAll(urlFood, displayFood);
let foods; // toàn cục 
function displayFood(data) {
    foods = data;
    const foodBox = document.querySelector(".right-foods")
    data.forEach(element => {
        const item = document.createElement("div");
        item.classList.add("col");
        item.innerHTML = `
                        <div class="card p-2">
                            <div class="food-header">
                                <h6>${element.id}</h6>
                                <p>${element.name}</p>
                                 <div class="icon-action">
                                 <i onclick="deleteFood(${element.id}, '${element.img}')" class="fa-solid fa-trash-can me-2 text-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i>
                                  <i onclick="editFood(${element.id})" data-bs-toggle="modal" data-bs-target="#addfood" class="fa-solid fa-pen-to-square text-info"></i>
                                 </div>               
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

function addFood(id) {
    const selectTable = document.getElementById("select-table");
    selectTable.value = id;
    box[1].style.display = "none";
    box[2].style.display = "block";
    leftbody[1].style.color = "white";
    leftbody[2].style.color = "red";
}

const fileInput = document.getElementById("file-product");
const imgContainer = document.getElementById("img-product");

fileInput.addEventListener("change", function (e) {

    const file = e.target.files[0];
    if (file) {
        // đọc file 
        const reader = new FileReader();

        reader.onload = function (event) {
            // đường link tạm thời
            imgContainer.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});


document.getElementById("add-chien").addEventListener("submit", async (e) => {
    e.preventDefault();
    if(!e.target.checkValidity()) {
        console.log("Loi validation");
        return;
    }
    const namefood = document.getElementById("namefood").value;
    const newcost = parseInt(document.getElementById("costfood").value);
    const idFood = document.getElementById("idfood").value;
    var imgPath = await uploadImage("file-product");

    if (idFood) {
        var newFood = {
            name: namefood,
            price: newcost,
            img: imgPath
        }
        edit(urlFood, idFood, newFood);
    } else {
        const listId = foods.map(element => parseInt(element.id));
        var id = Math.max(...listId) + 1;
        var newFood = {
            id: JSON.stringify(id),
            name: namefood,
            price: newcost,
            img: imgPath
        }

        add(urlFood, newFood);
    }

})


function editFood(id) {
    const food = foods.find(element => element.id == id);
    console.log(foods);
    const a = document.getElementById("img-product");
    a.src = food.img;
    const b = document.getElementById("namefood");
    b.value = food.name;
    const c = document.getElementById("costfood");
    c.value = food.price;
    const d = document.getElementById("exampleModalLabel");
    const e = document.getElementById("addFood2");
    const idFood = document.getElementById("idfood");
    idFood.value = id;
    d.innerText = "EDIT FOOD";
    e.innerText = "UPDATE";
}

function resetForm() {
    const a = document.getElementById("img-product");
    a.src = "../img/logo.png";
    const b = document.getElementById("namefood");
    b.value = "";
    const c = document.getElementById("costfood");
    c.value = "";
    const d = document.getElementById("exampleModalLabel");
    d.innerText = "ADD NEW FOOD";
    const e = document.getElementById("addFood2");
    e.innerText = "ADD";
    const id = document.getElementById("idfood");
    id.value = "";
}

var idDelete ;
function deleteFood(id,img){
    idDelete = id ;
    const anh = document.getElementById("anh");
    anh.src = img;
}

document.getElementById("deleted").addEventListener("click",()=>{
    console.log("dfgfdg")
    deleted(urlFood,idDelete)
})