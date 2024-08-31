getAll(urlOrder, getAllOrder);
let orders; // biến toàn cục
function getAllOrder(data) {
    orders = data;
}

document.getElementById("orderByTable").addEventListener("click", () => {
    const idTable = document.getElementById("select-table").value;//lấy giá trị cảu bàn ra 
    if (!idTable) {
        alert("vui lòng chọn bàn");
        return;
    }
    let filterOrder = orders.find(orders => orders.id == idTable); // vòng lặp ; orders => orders.id == idTable: hàm call back ; orders.id == idTable là đk kiểm tra nếu đúng hàm find sẽ trả về phần tử order
    let bills = filterOrder ? [...filterOrder.items] : []; //... lấy về tất cả món ăn trong json
    console.log (bills)
    const allFood = document.querySelectorAll(".right-foods .col");
console.log(allFood)
    allFood.forEach(food => { //duyệt tùng phần tử mảng allFood
        const quantity = parseInt(food.querySelector(".quantity").value);
        if (quantity > 0) {
            const idFood = food.querySelector("h6").innerText; // gắn giá trị h6 cho idFood
            const index = bills.findIndex(element => element.idFood == idFood);
            console.log(index)
            if (index !== -1) {
                bills[index].quantity += quantity;
            } else {
                bills.push({ idFood, quantity });
            }
        }
    });
    const order = {
        id: idTable,
        items: bills
    }
    if (filterOrder) {
        edit(urlOrder, idTable, order)
    } else {
        add(urlOrder, order)
    }
})

