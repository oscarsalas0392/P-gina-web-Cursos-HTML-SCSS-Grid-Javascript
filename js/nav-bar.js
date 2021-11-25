

document.addEventListener("DOMContentLoaded",()=>
{

    let boton= document.getElementById("botonM")
    boton.addEventListener("click",()=>
    {

        let menu_Content= document.getElementById("content-menu")
        menu_Content.classList.toggle("invisible")

        let menu= document.getElementById("menu")
        menu.classList.toggle("invisible")  
    })
    
    
    let links = document.querySelectorAll('.item-link-submenu')
    let arrayLinks = Array.from(links)
    
    arrayLinks.forEach(x=>{
    
        x.addEventListener('click',()=>
        {
           let submenu=x.nextElementSibling
           submenu.classList.toggle('invisible')
        })

    })

})

