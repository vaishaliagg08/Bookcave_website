function validateForm() {
    let x = document.getElementById("firstname").value;
    let y = document.getElementById("lastname").value;
    let z = document.getElementById("email").value;
    let a = document.getElementById("newpass").value;
    let b = document.getElementById("password").value;
    if (x == "" || y == "" || z == "" || a == "" || b == "") {
        alert("Fill in the necessary details before submitting, stupid");
        return false;
    }
    if (a.length<8){
        alert("Password must contain more than 8 characters")
    }
}
function opensignup() {
    document.getElementById("mysignup").style.height = "90%";
}
function closesignup() {
    document.getElementById("mysignup").style.height = "0%";
}
