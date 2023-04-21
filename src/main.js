// import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
// import data from './data/rickandmorty/rickandmorty.js';
// console.log(data.books[0]);
// Funcionalidad para el boton de inicio
document.getElementById("botonInicioHP").addEventListener('click', function () { //aqui se llama el id del boton
  window.scrollTo({ // atributo de mover por la pagina
    top: document.getElementById("botonInicioHP").offsetTop, //aqui se le indica que tiene que moverse verticalmete hasta el punto 0/inicio
    behavior: "smooth"//forma en que se mueve, en este caso es lento tambien esta instantaneo "instant"
  });
});
// Funcionalidad para el boton de libros
document.getElementById("botonInicioLibros").addEventListener('click', function () { //aqui se llama el id del boton
  window.scrollTo({ // atributo de mover por la pagina
    top: document.getElementById("tituloBooks").offsetTop, //aqui se le indica que tiene que moverse verticalmete hasta el id-div tambien puede ser query.selector
    behavior: "smooth" //forma en que se mueve, en este caso es lento tambien esta instantaneo "instant"
  });
});
// Funcionalidad para el boton de personajes
document.getElementById("botonInicioPersonajes").addEventListener('click', function () {//aqui se llama el id del boton
  window.scrollTo({// atributo de mover por la pagina
    top: document.getElementById("tituloCharacters").offsetTop, //aqui se le indica que tiene que moverse verticalmete hasta el id-div tambien puede ser query.selector
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
const botonHamburguesa = document.getElementById("botonHamburguesa");
const contenedorBoton = document.getElementById("navbar");
// const flexbox = document.querySelector(".flexbox");
botonHamburguesa.addEventListener("click", () => {
  // flexbox.classList.toggle("oculto");
  if (contenedorBoton.classList.contains("navbar-open")) {
    contenedorBoton.removeAttribute('class', "navbar-open")
    contenedorBoton.classList.toggle("navbar-close");
  } else {
    contenedorBoton.classList.toggle("navbar-open");
  }
});
const infoDataLibro = document.createElement("p");
infoDataLibro.classList.add("info-libro");
document.querySelectorAll(".libroPortada").forEach(function (libro) {
  libro.addEventListener('mouseover', function () {
    const valor = libro.getAttribute('value');
    const titulo = data.books[valor].title;
    const fechaLanzamiento = data.books[valor].releaseDay;
    const autor = data.books[valor].author;
    const descripcion = data.books[valor].description;
    infoDataLibro.innerText = "Book: " + titulo + "\n" + "Release Day: " + fechaLanzamiento + "\n" + "Author: " + autor + "\n" + "Description: " + descripcion;
    libro.appendChild(infoDataLibro);
    // Agregar la clase 'girar' a la imagen
    libro.querySelector('img').classList.add('rotar');
  });
  libro.addEventListener('mouseleave', function () {
    // Eliminar el párrafo de información del libro
    libro.removeChild(infoDataLibro);
    // Esperar a que se complete la transición y luego agregar la clase 'mostrar-info'
    libro.querySelector('img').addEventListener('transitionend', function () {
      libro.querySelector('img').classList.remove('rotar');
      libro.classList.remove('mostrar-info');
    }, { once: true });
    // Agregar la clase 'mostrar-info' a la capa contenedora del libro
    libro.classList.add('mostrar-info');
  });
});
const infoDataPersonaje = document.createElement("p");
infoDataPersonaje.classList.add("info-personaje");
document.querySelectorAll(".personaje").forEach(function (personaje) {
  personaje.addEventListener('mouseover', function () {
    const nombreId = personaje.getAttribute('id')
    const personajeData = data.characters.find(personaje => personaje.name === nombreId);
    let nombre;
    let fechaNacimiento;
    let muerte;
    let genero;
    let patronusPersonaje;
    let casa;
    let ancestros;
    if (personajeData) {
      nombre = personajeData.name;
      fechaNacimiento = personajeData.birth;
      if (fechaNacimiento === null) {
        fechaNacimiento = "Desconocida";
      }
      muerte = personajeData.death;
      if (muerte === null) {
        muerte = "Alive";
      }
      else {
        muerte = "Died on " + personajeData.death;
      }
      genero = personajeData.gender;
      if (genero === null) {
        genero = "Desconocido";
      }
      patronusPersonaje = personajeData.patronus;
      if (patronusPersonaje === null) {
        patronusPersonaje = "Desconocido";
      }
      casa = personajeData.house;
      if (casa === null) {
        casa = "Desconocida";
      }
      ancestros = personajeData.ancestry;
      if (ancestros === null) {
        ancestros = "Desconocida";
      }
      infoDataPersonaje.innerText = "Name: " + nombre + "\n" + "Birth: " + fechaNacimiento + "\n" + "Status: " + muerte + "\n" + "Gender: " + genero + "\n" + "Patronus: " + patronusPersonaje + "\n" + "House: " + casa + "\n" + "Ancestry: " + ancestros;
      personaje.appendChild(infoDataPersonaje);
    };
    // Agregar la clase 'girar' a la imagen
    //personaje.querySelector('img').classList.add('rotar');
  });
  personaje.addEventListener('mouseleave', function () {
    // Eliminar el párrafo de información del libro
    personaje.removeChild(infoDataPersonaje);
    // Esperar a que se complete la transición y luego agregar la clase 'mostrar-info'
    personaje.querySelector('img').addEventListener('transitionend', function () {
      personaje.querySelector('img').classList.remove('rotar');
      personaje.classList.remove('mostrar-info');
    }, { once: true });
    // Agregar la clase 'mostrar-info' a la capa contenedora del libro
    personaje.classList.add('mostrar-info');
  });
});
const flechas = document.querySelectorAll('.flecha');
flechas.forEach(flecha => {
  flecha.addEventListener('click', () => {
    // Obtener el contenedor de filtros dentro de la sección
    const seccion = flecha.parentNode;
    const filtros = seccion.querySelector('.filtro');
    // Alternar la clase 'desplegado' para mostrar/ocultar los filtros
    filtros.classList.toggle('desplegado');
    // Cambiar el texto de la flecha para indicar el estado de la sección (desplegada o no)
    flecha.textContent = filtros.classList.contains('desplegado') ? '▼' : ':flecha_hacia_delante:';
  });
});
// const inputBusqueda = document.getElementById('input-busqueda');
// const btnBusqueda = document.getElementById('btn-busqueda');

// btnBusqueda.addEventListener('click', function() {
//   const valorBusqueda = inputBusqueda.value;
//   // Aquí puedes hacer algo con el valor de búsqueda, como enviarlo a una API o filtrar resultados en una lista
// });

// En este ejemplo, usamos flexbox para alinear la barra de búsqueda y usamos un input de tipo text para que
// el usuario pueda escribir su consulta de búsqueda. Luego, creamos un botón con el ícono de búsqueda usando
//  la biblioteca de iconos Font Awesome. Al hacer clic en el botón, capturamos el valor de búsqueda del input
//  usando JavaScript y podemos hacer algo con él, como enviarlo a una API o filtrar resultados en una lista.



// Obtenemos el elemento HTML que contiene el abecedario
// const abecedario = document.querySelector('.abecedario');

// // Recorremos el abecedario letra por letra
// for (let letter = 'A'; letter <= 'Z'; letter = String.fromCharCode(letter.charCodeAt(0) + 1)) {
//   // Creamos el botón de la letra correspondiente
//   const botonletter = document.createElement('button');
//   botonletter.classList.add('letra');
//   botonletter.innerText = letter;
  
//   // Creamos el contenedor de las pociones correspondientes
//   const contenedorPotions = document.createElement('div');
//   contenedorPotions.classList.add('potions');
  
//   // Filtramos las pociones que empiezan con la letra correspondiente
//   const potionsletter = potions.filter(p => p.name.charAt(0) === letter);
  
//   // Creamos un elemento HTML para cada poción y lo añadimos al contenedor correspondiente
//   potionsletter.forEach( potions => {
//     const elementoPotions = document.createElement('div');
//     elementoPotions.classList.add(' potions');
//     elementoPotions.innerText =  potions.name;
//     contenedorPotions.appendChild(elementoPotions);
//   });
  
//   // Añadimos el botón y el contenedor al abecedario
//   abecedario.appendChild(botonletter);
//   abecedario.appendChild(contenedorPotions);
  
//   // Añadimos el evento click al botón para mostrar u ocultar las pociones correspondientes
//   botonletter.addEventListener('click', () => {
//     contenedorPotions.classList.toggle('visible');
//   });
// }