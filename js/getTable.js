getAll(urlTable, displayTables);

function displayTables(data) {

    const tablesBox = document.querySelector(".right-main");
    const selectTable = document.getElementById("select-table");
    const selectBill = document.getElementById("select-bill");
    var sum = 0;
    data.forEach(element => {
        if(!element.status) {
            sum++;
        }
    });
    const sinh = document.getElementById("sinh");
    sinh.innerText = sum;

    data.forEach(element => {

        if (!element.status) {
            var option = document.createElement("option");
            option.value = element.id;
            option.innerText = `Table ${element.id}`;
            selectTable.appendChild(option);
        }
        if (!element.status) {
            var option = document.createElement("option");
            option.value = element.id;
            option.innerText = `Table ${element.id}`;
            selectBill.appendChild(option);
        }

        var img = element.status ? `../img/dining-room.png` : `../img/meeting.png`;
        var book = !element.status ? `
         <button onclick="addFood(${element.id})" type="button" class="btn btn-success">
                                    <i class=" fa-solid fa-plus"></i> ADD</button>
                                <button onclick="showCart(${element.id})"  type="button" class="btn btn-danger"  data-bs-toggle="modal" data-bs-target="#cart">
                                    <i class="fa-solid fa-cart-shopping" ></i> CART</button>

        ` : ` <button onclick="getById(${element.id})"  type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#booking">
                                    <i class="fa-regular fa-calendar"></i>BOOKING</button>`;
        tablesBox.innerHTML += `   <div class="col ">
                        <div class="card">
                            <h6>${element.id}</h6>
                            <div class="card-img">
                                <img src="${img}" class="card-img-top" alt="...">
                            </div>
                            <div class=" card-body">
                            ${book}
                            </div>
                        </div>
                    </div>`
    })

}
var idEdit;// biến toàn cục
function getById(id) {
    idEdit = id;
    console.log(idEdit);
}
// cập nhật id mới
document.getElementById("editTable").addEventListener("submit", (e) => {
    e.preventDefault();

    if(!e.target.checkValidity()) {
        console.log("Loi validation");
        return;
    }

    var newCustomer = document.getElementById("nameCustomer").value;
    var newQuantity = document.getElementById("quantity").value;
    var tableNew = {
        id: idEdit,
        nameCustomer: newCustomer,
        quantity: newQuantity,
        status: false
    }
    edit(urlTable, idEdit, tableNew);
})

// back-end  du lieu  goi data  json
// npx json-server db.json => duong dan url => 
var idPay; // toàn cục
function showCart(id) {
    idPay = id ;
    const order = orders.find(element => element.id == id);
    console.log(order);
    var idFood = document.getElementById("cart-food");
    idFood.innerHTML = "";
    order.items.forEach((a,index) => {
        const food = foods.find(element => a.idFood == element.id); //  id của json 
        idFood.innerHTML += `
         <tr>
                                    <th scope="row">${index + 1 }</th>
                                    <td><img src="${food.img}" style="width: 50px;height:50px" alt=""></td>
                                    <td>${food.name}</td>
                                    <td>${a.quantity}</td>
                                    <td>${food.price*a.quantity}</td>
                                </tr>
        `
    })
}






 