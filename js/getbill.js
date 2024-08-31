document.getElementById("pay-bill").addEventListener("click", () => {
    var x = document.getElementById("select-bill").value;
     var table = {
        id: x,
        nameCustomer: null,
        quantity: null,
        status: true
      }
      edit(urlTable,x,table);
      deleted(urlOrder,x); 
})

function onChangBill() {
    var x = document.getElementById("select-bill").value;
    var order =  orders.find(element => element.id == x) ;
    var idFood = document.getElementById("bill-food");
    console.log(idFood);
    idFood.innerHTML ="";
    var sum = 0 ;
    order.items.forEach((a,index) => {
        const food = foods.find(element => a.idFood == element.id); //  id của json 
        sum += food.price*a.quantity ;
        idFood.innerHTML += `
        <tr>
         <th scope="row">${index + 1 }</th>
                        <td><img src="${food.img}" style="width: 50px;height:50px" alt=""></td>
                        <td>${food.name}</td>
                        <td>${a.quantity}</td>
                        <td>${food.price*a.quantity}</td>
                      </tr>
        `;
    });  
    idFood.innerHTML += ` <tfoot>
                        <td colspan="4">Total</td>
                        <td>${sum}</td>
                      </tfoot>`
}

document.getElementById("paybill").addEventListener("click",()=>{
    leftbody[1].style.color = "white";
    box[1].style.display = "none" ;
    leftbody[3].style.color = "red";
    box[3].style.display = "block" ;
    var x = document.getElementById("select-bill");
    x.value = idPay;
    onChangBill();
})