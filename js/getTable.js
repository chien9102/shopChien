getAll(urlTable, displayTables);
function displayTables(data) {
    const tablesBox = document.querySelector(".right-main")
    data.forEach(element => {
        var img = element.status ? `../img/dining-room.png` : `../img/meeting.png`;
        var book = !element.status ? `
         <button type="button" class="btn btn-success">
                                    <i class=" fa-solid fa-plus"></i> ADD</button>
                                <button type="button" class="btn btn-danger">
                                    <i class="fa-solid fa-cart-shopping"></i> CART</button>  
        ` : ` <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#booking">
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
// back-end  du lieu  goi data  json 
// npx json-server db.json => duong dan url => 
