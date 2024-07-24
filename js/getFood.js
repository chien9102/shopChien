getAll(urlFood, displayFood);
function displayFood(data){
    const foodBox = document.querySelector(".right-foods")
    data.forEach(element=>{
        const item = document.createElement("div");
        item.classList.add("col");
        item.innerHTML =`
      
                        <div class="card">
                            <div class="food-header">
                                <h6>${element.id}</h6>
                                <p>${element.name}</p>
                                <i class="fa-solid fa-pen-to-square"></i>
                            </div>
                            <div class="card-img">
                            <img src="${element.img}" class="card-img-top" alt="...">
                            </div>
                            <div class="card-bodyfood">
                                <p style="color: pink;">${element.price}</p>
                                <div class="card-bodyfood1">
                                    <i class="fa-solid fa-minus"></i>
                                    <p>0</p>
                                    <i class="fa-solid fa-plus"></i>                                
                                </div>
                            </div>
                        </div>`;
                        foodBox.appendChild(item);
    })
}