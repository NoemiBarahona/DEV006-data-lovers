import { filterCharacterGender,filterCharacterName, filterCharacterHouse, sortData, filterCharacterSpecies, filterspellType, extractApellidos, extractSpecies } from './data.js';// import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';

// console.log(filterCharacterName(data.characters,'Black'))
// console.log(filterCharacterGender(data.characters,'Female'))
// console.log(filterCharacterGender(data.characters,'Male'))
// const dataOrdenada = sortData(data.characters, "name")
// console.log(filterCharacterGender(dataOrdenada,'Female'))
// console.log(filterCharacterHouse(data.characters, 'Slytherin'))
// const dataOrdenadaAZ = sortData(data.characters, 'name', 'desc')
// console.log(filterCharacterGender (dataOrdenadaAZ, 'Female'))
// console.log(filterCharacterSpecies(data.characters, 'Human (Seer)'))
// console.log(filterspellType(data.spells, 'Charm'))

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
    }
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

// Obtener referencia al select de la familia
const selectFamilia = document.getElementById('selectFamilia');
// Obtener apellidos de la data
const apellidos = extractApellidos(data.characters);
// Agregar opciones al select con los apellidos
for (let i = 0; i < apellidos.length; i++) {
  const opcion = document.createElement('option');
  opcion.value = apellidos[i]; // Modificado para asignar el valor como el apellido
  opcion.innerText = apellidos[i];
  selectFamilia.insertBefore(opcion, selectFamilia.lastChild);
}

// Agregar evento de cambio al select
selectFamilia.addEventListener('change', function(e) {
  const valorSeleccionado = e.target.value; // Obtener el contenido del value
  // Utilizar el valor seleccionado en tu aplicación
  // Puedes realizar acciones con la variable "valorSeleccionado" aquí
  console.log(filterCharacterName(data.characters, valorSeleccionado))
});

const selectGender = document.getElementById('selectGender');
// Agregar evento de cambio al select
selectGender.addEventListener('change', function(e) {
  const valorSeleccionado = e.target.value; // Obtener el contenido del value
  // Utilizar el valor seleccionado en tu aplicación
  // Puedes realizar acciones con la variable "valorSeleccionado" aquí
  console.log(filterCharacterGender(data.characters, valorSeleccionado))
});

const selectSpecies = document.getElementById('selectSpecies');

const especie = extractSpecies(data.characters);

console.log(especie)
for (let i = 0; i < especie.length; i++) {
  const opcion = document.createElement('option');
  opcion.value = especie[i]; // Modificado para asignar el valor como el apellido
  opcion.innerText = especie[i];
  selectSpecies.insertBefore(opcion, selectSpecies.lastChild);
}
// Agregar evento de cambio al select
selectSpecies.addEventListener('change', function(e) {
  const valorSeleccionado = e.target.value; // Obtener el contenido del value
  // Utilizar el valor seleccionado en tu aplicación
  // Puedes realizar acciones con la variable "valorSeleccionado" aquí
  console.log(filterCharacterSpecies(data.characters, valorSeleccionado))
});


