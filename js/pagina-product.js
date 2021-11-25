

document.addEventListener('DOMContentLoaded',()=>
{

    let valor = window.location.search;
    valor=valor.replace('?','')
 
    const curso1 = new Curso(1,'HTML Desde Cero',
    './images/Curso1.png','HTML es el lenguaje sobre el que está construida toda la web y su estándar HTML5 la revolucionó por completo haciendo del navegador el programa más usado en el mundo.',
    '15000','180 minutos','básico','./curso.html?1');   

    const curso2 = new Curso(2,'CSS3 Desde Cero',
    './images/Curso2.png','CSS es un lenguaje creado para diseñar la web, cuando ves una web hermosa, con animaciones y efectos, estos se crearon con CSS. Este curso te enseñará desde cero a escribir código CSS con buenas prácticas e iniciar tu carrera como diseñador web.',
    '25000','300 minutos','básico','./curso.html?2');

    const curso3 = new Curso(3,'JavaScript Desde Cero',
    './images/Curso3.jpg','JavaScript es el único lenguaje que te ofrece utilizar tus conocimientos tanto en el frontend como en el backend. Aprende las bases de este lenguaje y así estarás encaminado a poder decidir el camino que más te guste o tomar ambos y convertirte en un Desarrollador FullStack.',
    '30000','400 minutos','básico','./curso.html?3');

    let arrayCursos =[curso1,curso2,curso3]
    let curso = arrayCursos.find( x=>x.codigo==valor)

    const title_curse = document.getElementById('title-curse')
    const dsc_curse = document.getElementById('dsc-curse')
    const image_curse = document.getElementById('image-curse')
    const time_curse = document.getElementById('time-curse')
    const nivel_curse = document.getElementById('nivel-curse')
    const cost_curse = document.getElementById('cost-curse')
    const content_links = document.getElementById('content-links')

    title_curse.textContent=curso.getNombre()
    dsc_curse.textContent=curso.getDescripcion()
    image_curse.src=curso.getImagen()
    nivel_curse.textContent +=  `${nivel_curse.dataset.text}  ${curso.getNivel()}`
    time_curse.textContent += `${time_curse.dataset.text} ${curso.getDuracion()}`
    cost_curse.textContent += `${cost_curse.dataset.text}${cost_curse.dataset.moneda} ${curso.getCosto()}`

    const elemento = document.createDocumentFragment()

    arrayCursos.forEach(curso => {
         
          if(curso.codigo != valor)
          {
              
            let elementA= document.createElement('a')
            elementA.href=curso.getRuta()
            elementA.classList.add('link-course')            
            elementA.innerHTML=`<img class="image-course" src='${curso.getImagen()}' alt='${curso.getNombre()}'>`
            elemento.appendChild(elementA)

          }

          content_links.appendChild(elemento)

     });


    





})


class Curso 
{
    constructor(codigo,nombre,imagen,descripcion,costo,duracion,nivel,ruta) {
        this.codigo=codigo;
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.costo = costo;
        this.duracion = duracion;
        this.nivel=nivel;
        this.ruta=ruta;
      }


      getNombre()
      {
          return this.nombre;
      }

      getImagen()
      {
          return this.imagen;
      }

      getDescripcion()
      {
          return this.descripcion;
      }

      getCosto()
      {
          return this.costo;
      }

      getDuracion()
      {
          return this.duracion;
      }

      getNivel()
      {
          return this.nivel;
      }

      getRuta()
      {
          return this.ruta;
      }
          
            
}