const product1 = document.getElementById("anhbody");
const tep = document.getElementById("file1");
console.log(product1)
console.log(tep)
tep.addEventListener("change", function (e) {

    const file = e.target.files[0];
    if (file) {
        // đọc file 
        const reader = new FileReader();

        reader.onload = function (event) {
            // đường link tạm thời
            product1.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});


document.getElementById("info").addEventListener('submit', async (e)=>{
    e.preventDefault();
    const acconut = JSON.parse(localStorage.getItem("account"));
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const eadd = document.getElementById("inputEmail4").value;
    const add = document.getElementById("inputAddress2").value;
    const phone = document.getElementById("Phone").value;
    const date = document.getElementById("datef").value;

    var imgPath = await uploadImage("file1");

    const account = {
        email: eadd,
        pass : acconut.pass,
        fullName : fname + " " + lname,
        img : imgPath,
        address: add,
        phone: phone,
        date: date
    }
    localStorage.setItem("account",JSON.stringify(account));
    getAvatar ();
})

function getBill() {
 

}
