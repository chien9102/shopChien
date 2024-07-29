getAll(urlTable, displayTables);
function displayTables(data) {
    const tablesBox = document.querySelector(".right-main");
    const selectTable = document.getElementById("select-table");
    const selectBill = document.getElementById("select-bill");
    data.forEach(element => {

        if(!element.status) {
            var option = document.createElement("option");
            option.value = element.id ;
            option.innerText = `Table ${element.id}`;
            selectTable.appendChild(option);
        }
        if(!element.status) {
            var option = document.createElement("option");
            option.value = element.id ;
            option.innerText = `Table ${element.id}`;           
            selectBill.appendChild(option);
        }
        
        var img = element.status ? `../img/dining-room.png` : `../img/meeting.png`;
        var book = !element.status ? `
         <button onclick="addFood(${element.id})" type="button" class="btn btn-success">
                                    <i class=" fa-solid fa-plus"></i> ADD</button>
                                <button type="button" class="btn btn-danger"  data-bs-toggle="modal" data-bs-target="#cart">
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
document.getElementById("editTable").addEventListener("click", () => {
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
