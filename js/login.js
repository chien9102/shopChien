document.getElementById("login").addEventListener("submit",(e)=>{
    e.preventDefault();
   
    const email = document.getElementById("emaildn").value;
    const pass = document.getElementById("passdn").value;
    console.log(email,pass);
    const acconut = JSON.parse(localStorage.getItem("account"));
      console.log(acconut);
    if (acconut && acconut.email == email && acconut.pass == pass){
        alert("Đăng nhập thành công");

        window.location.href = "Home-Admin.html";
    }else{
        alert("Tài khoản hoặc mật khẩu không đúng ");
    }
})

