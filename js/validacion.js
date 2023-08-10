function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function comprobarPwd () {
    const password1 = document.getElementById("password1").value
    const confirmPassword = document.getElementById("confirmPassword").value
    
    if ( password1 !== confirmPassword || password1.length < 6 ) {               
        return showAlertError()
    }
    else {        
        return showAlertSuccess()
    }   

}


const registerbtn = document.getElementById("regBtn")
registerbtn.addEventListener("click", comprobarPwd)
