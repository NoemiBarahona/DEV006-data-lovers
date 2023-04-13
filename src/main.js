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

const infoDataLibro = document.createElement("p");// Crear una costante que crea un parrafo para la data libro
infoDataLibro.classList.add("info-libro");// Para darle una clase de estilo llamada info-libroal parrafo que se esta creando para mostar la data detras de la imagen

document.querySelectorAll(".libroPortada").forEach(function(libro) { //para seleccionar todos los elementos en el documento con la clase "libroPortada" y agregarles dos event listeners.
  libro.addEventListener('mouseover', function () { //Event listener se dispara cuando el cursor se coloca sobre la imagen del libro y el segundo cuando se mueve el cursor fuera de la imagen.
    const valor = libro.getAttribute('value'); // Constante para obtener el atributo de value de los libros
    const titulo = data.books[valor].title;// Constante titulo que llama el value de la data de libro 
    const fechaLanzamiento = data.books[valor].releaseDay;// Constante fechaLanzamiento que llama el value de la data de libro 
    const autor = data.books[valor].author; // Constante autor que llama el value de la data de libro 
    const descripcion = data.books[valor].description;// Constante descripction que llama el value de la data de libro 

    infoDataLibro.innerText = "Libro: " + titulo + "\n" + "Día de lanzamiento: " + fechaLanzamiento + "\n" + "Autor: " + autor + "\n" + "Descripción: " + descripcion;// Info data libro que muestre el titulo más la fecha en la pag
    libro.appendChild(infoDataLibro);// Donde esta ubicado el libro se agrege la info de data libro
  });

  libro.addEventListener('mouseleave', function () { // Esto muestra la información del libro debajo de su imagen.
    libro.removeChild(infoDataLibro); //para quitar el párrafo que muestra la información del libro de debajo de la imagen.
  });
});