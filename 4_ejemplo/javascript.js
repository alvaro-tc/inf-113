function validarPassword(){
    let password = document.getElementById("password").value
    let email = document.getElementById("exampleInputEmail1").value
    let validar=/^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9].{2,5})(?!.*\s).{8,15}$/;
    let validar_Email= /[^@]+\@+\w+\.+com/;
    let alerta = document.getElementById("alert-primary")

    if(validar.test(password)){
        alerta.classList.remove("d-none");
    }
    else{
        alerta.classList.add("d-none");
    }

    return null
} 