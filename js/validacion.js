function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function comprobarPwd () {
    const password1 = document.getElementById("password1").value
    const confirmPassword = document.getElementById("confirmPassword").value
    
    console.log(password1, confirmPassword)
    if ( password1 !== confirmPassword ) {
        console.log("entre al if")        
        return showAlertError()
    }
    else {
        console.log(showAlertSuccess())
        return showAlertSuccess()

    }   

}

const registerbtn = document.getElementById("regBtn")
registerbtn.addEventListener("click", () => comprobarPwd())
