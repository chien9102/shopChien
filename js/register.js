document.getElementById("register").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const repass = document.getElementById("re-pass").value;
    console.log(pass ,repass);
    if (pass != repass) {
        alert("Mật khẩu không trùng khớp")
        return;
    }
    const account = {
        email,
        pass ,
        img : "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg"
    }
    localStorage.setItem("account",JSON.stringify(account));
    alert("Đăng ký thành công");
    window.location.href ="Login.html";
})
