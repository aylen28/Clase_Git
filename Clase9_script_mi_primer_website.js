function alertaJava(){
    alert("hola esta es una alerta desde js!");
}

document.querySelector("button.button-menu-toggle")
    .addEventListener("click",function(){
        document.querySelector(".nav-links").classList.toggle("nav-links-responsive")
    })

const form = document.getElementsById("botonAceptar");
 form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
      });
    

function validateEmail(email){
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

function validateForm(){
    const emailInput = document.getElementById("email");
    const email = emailInput.value;

if(!validateEmail(email)){
    alert ("por favor ingrese un correo electrónico valido");
} else {
    alert("correo electrónico enviado correctamente");
}
}












