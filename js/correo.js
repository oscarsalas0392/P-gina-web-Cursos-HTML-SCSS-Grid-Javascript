

let btn = document.getElementById("enviar")

btn.addEventListener("click",()=>{

    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let age = document.getElementById("age")
    let sex = document.getElementById("sex")

    let mensaje = `Soy ${name.value},  me gustaría ponerme en contacto con ustedes para solitar información,
    por favor enviarla al siguiente correo ${email.value}`

    let tema = "Solicitar información de curso"

    window.open(`mailto:oscar.salas03@gmail.com?subject=${tema}&body=${mensaje}`);
})