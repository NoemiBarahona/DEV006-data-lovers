// import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
// import data from './data/rickandmorty/rickandmorty.js';
// console.log(data.books[0]);

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

const infoLibros = document.getElementById("libros"); // Constante que llama al id de libro deol HTML
const infoDataLibro = document.createElement("p"); // Crear una costante que crea un parrafo para la data libro
infoDataLibro.classList.add("info-libro"); // Para darle el estilo al parrafo que se esta creando para mostar la data detras de la imagen
infoLibros.addEventListener('mouseover', function (event) { // Evento para que cuando el mouse pase por la imagen muestre la data
  if (event.target.classList.contains("libroPortada")) { //Es para que todos los libros que tienen la class libroPortada tengan el event de arriba
    const valor = event.target.getAttribute('value'); // Costante para obtener el atributo de value de los libros
    const id = event.target.id; // Constante llamada ID para que llame al id de la imagen seleccionada
    const titulo = data.books[valor].title; // Contante titulo que llama el value de la data de libro 
    const fechaLanzamiento = data.books[valor].releaseDay; // Contante fechaLanzamiento que llama el value de la data de libro 
    const libro = document.getElementById(id); // Constante libro que llama a la contante id creada en 3 linea arriba
    infoDataLibro.innerText = titulo + " " + fechaLanzamiento; // Info data libro que muestre el titulo más la fecha en la pag
    libro.appendChild(infoDataLibro); //  Donde esta ubicado el libro se agrege la info de data libro
  }
});
infoLibros.addEventListener('mouseout', function (event) { //Evento que al quitar el mouse de la imagen desapasca el texto mostrando solo la imagen
  if (event.target.classList.contains("libroPortada")) { // Evento muestra el contenido de libro portada
    const id = event.target.id; // LLama el ID de libro
    const libro = document.getElementById(id); // LLama el ID de libro
    libro.removeChild(infoDataLibro); // Que se remueva el parrafo creado 
  }
});
