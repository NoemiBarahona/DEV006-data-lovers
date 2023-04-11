// import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log(data.books[0]);

// Funcionalidad para el boton de inicio
document.getElementById("botonInicioHP").addEventListener('click', function () { //aqui se llama el id del boton 
  window.scrollTo({ // atributo de mover por la pagina
    top: 0, //aqui se le indica que tiene que moverse verticalmete hasta el punto 0/inicio
    behavior: "smooth"//forma en que se mueve, en este caso es lento tambien esta instantaneo "instant"
  });
});
// Funcionalidad para el boton de libros
document.getElementById("botonInicioLibros").addEventListener('click', function () { //aqui se llama el id del boton 
  window.scrollTo({ // atributo de mover por la pagina
    top: document.getElementById("libros").offsetTop, //aqui se le indica que tiene que moverse verticalmete hasta el id-div tambien puede ser query.selector
    behavior: "smooth" //forma en que se mueve, en este caso es lento tambien esta instantaneo "instant"
  });
});
// Funcionalidad para el boton de casas
document.getElementById("botonInicioCasas").addEventListener('click', function () { //aqui se llama el id del boton 
  window.scrollTo({ // atributo de mover por la pagina
    top: document.getElementById("PORDEFINIR").offsetTop, //aqui se le indica que tiene que moverse verticalmete hasta el id-div tambien puede ser query.selector
    behavior: "smooth" //forma en que se mueve, en este caso es lento tambien esta instantaneo "instant"
  });
});

// Funcionalidad para el boton de personajes
document.getElementById("botonInicioPersonajes").addEventListener('click', function () {//aqui se llama el id del boton 
  window.scrollTo({// atributo de mover por la pagina
    top: document.getElementById("PORDEFINIR").offsetTop, //aqui se le indica que tiene que moverse verticalmete hasta el id-div tambien puede ser query.selector
    behavior: "smooth" //forma en que se mueve, en este caso es lento tambien esta instantaneo "instant"
  });
});
// Funcionalidad para el boton de hechizos
document.getElementById("botonInicioHechizos").addEventListener('click', function () {//aqui se llama el id del boton 
  window.scrollTo({// atributo de mover por la pagina
    top: document.getElementById("PORDEFINIR").offsetTop,
    behavior: "smooth"
  });
});
// Funcionalidad para el boton de pociones
document.getElementById("botonInicioPociones").addEventListener('click', function () {//aqui se llama el id del boton 
  window.scrollTo({// atributo de mover por la pagina
    top: document.getElementById("PORDEFINIR").offsetTop, //aqui se le indica que tiene que moverse verticalmete hasta el id-div tambien puede ser query.selector
    behavior: "smooth" //forma en que se mueve, en este caso es lento tambien esta instantaneo "instant"
  });
});

const infoLibros = document.getElementById("libros");
infoLibros.addEventListener('click', function(event){
  if(event.target.classList.contains("LibroPortada")){
    const valor = event.target.getAttribute('value');
    const id = event.target.id;
    let titulo = data.books[valor].title;
    infoLibros.innerText = titulo;
    console.log("Valor: ", valor);
    console.log("ID: ", id);
  }
  
}
);
// primerLibroTooltip.addEventListener('click', function () {
//   const A = document.getElementById('primerLibroTooltip');
//   let i = primerLibroTooltip.getAttribute('value')
//   console.log(parseInt(i))
//   let titulo = data.books[parseInt(i)].title;
//   // Ejemplo de cómo mostrar los datos en el tooltip
//   primerLibroTooltip.innerText = titulo;
// });
// primerLibroTooltip.addEventListener('click', function() {
//   const tooltipData = data.books[0].releaseDay; // Ejemplo de cómo mostrar los datos en el tooltip
//   primerLibroTooltip.innerText = tooltipData;