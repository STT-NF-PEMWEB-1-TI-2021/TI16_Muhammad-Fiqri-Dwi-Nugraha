function otentikasi(){
    let login = document.getElementById("login");
    let username = login.username.value;
    let password = login.password.value;

    if(username == "fiqri20" && password == "fiqri20"){
        location.href = "loginsukses.html";
        alert("Login Sukses");
        return false;
    }else{
        alert("Login Gagal")
    }
}