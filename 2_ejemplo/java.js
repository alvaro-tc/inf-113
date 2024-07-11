    

function validarPassword(){
    let alerta = document.getElementById("alert-primary");
    alerta.classList.remove('d-none');
    let password = document.getElementById("password").value
    let email = document.getElementById("exampleInputEmail1").value
    let validar=/^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    let validar_Email= /[^@]+\@+\w+\.+com/;
    alert(validar_Email.test(email))

}