import { filterCharacterGender, filterCharacterName, filterCharacterHouse, sortData, filterCharacterSpecies, filterspellType, extractApellidos, extractSpecies } from './data.js';// import { example } from './data.js';
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

//funcionalidad boton hamburguesa
const botonHamburguesa = document.getElementById("botonHamburguesa"); // Obtiene el elemento del DOM con el ID "botonHamburguesa" y lo guarda en la variable 'botonHamburguesa'
const contenedorBoton = document.getElementById("navbar"); // Obtiene el elemento del DOM con el ID "navbar" y lo guarda en la variable 'contenedorBoton'
botonHamburguesa.addEventListener("click", () => { // Agrega un evento 'click' al elemento del botón de hamburguesa que se dispara cuando se hace clic en él, y define una función de flecha (arrow function) como su manejador de evento
  if (contenedorBoton.classList.contains("navbar-open")) {  // Comprueba si el elemento del contenedor del botón de hamburguesa tiene la clase CSS "navbar-open" mediante el método 'classList.contains()'
    contenedorBoton.removeAttribute('class', "navbar-open") // Elimina el atributo 'class' con el valor "navbar-open" del elemento del contenedor del botón de hamburguesa mediante el método 'removeAttribute()'
    contenedorBoton.classList.toggle("navbar-close");  // Alterna la presencia de la clase CSS "navbar-close" en el elemento del contenedor del botón de hamburguesa mediante el método 'classList.toggle()'
  } else {
    contenedorBoton.classList.toggle("navbar-open"); // Si el contenedor del botón de hamburguesa no tiene la clase "navbar-open", entonces la agrega mediante el método 'classList.toggle()'
  }
});

//funcionalidad fotos giratorias libros
const infoDataLibro = document.createElement("p");// Crear un elemento de párrafo para mostrar información de libros
infoDataLibro.classList.add("info-libro");// Agregar la clase "info-libro" al elemento de párrafo
document.querySelectorAll(".libroPortada").forEach(function (libro) { // Iterar a través de todos los elementos con la clase "libroPortada" y agregar un evento de mouseover a cada uno
  libro.addEventListener('mouseover', function () {
    const valor = libro.getAttribute('value'); // Obtener el valor del atributo 'value' del elemento
    const titulo = data.books[valor].title;// Obtener el título del libro a partir del valor obtenido
    const fechaLanzamiento = data.books[valor].releaseDay; // Obtener la fecha de lanzamiento del libro a partir del valor obtenido
    const autor = data.books[valor].author; // Obtener el autor del libro a partir del valor obtenido
    const descripcion = data.books[valor].description; // Obtener la descripción del libro a partir del valor obtenido
    infoDataLibro.innerText = "Book: " + titulo + "\n" + "Release Day: " + fechaLanzamiento + "\n" + "Author: " + autor + "\n" + "Description: " + descripcion; // Establecer el texto del párrafo con la información del libro
    libro.appendChild(infoDataLibro);// Agregar el párrafo de información del libro como hijo del elemento "libro"
    libro.querySelector('img').classList.add('rotar');// Agregar la clase 'rotar' a la imagen del libro
  });

  libro.addEventListener('mouseleave', function () {
    // Eliminar el párrafo de información del libro
    libro.removeChild(infoDataLibro);
    // Esperar a que se complete la transición y luego agregar la clase 'mostrar-info'
    libro.querySelector('img').addEventListener('transitionend', function () {
      libro.querySelector('img').classList.remove('rotar');  // Eliminar la clase 'rotar' de la imagen del libro
      libro.classList.remove('mostrar-info');// Eliminar la clase 'mostrar-info' del elemento "libro"
    }, { once: true });  // El evento 'transitionend' se ejecutará solo una vez
    libro.classList.add('mostrar-info');// Agregar la clase 'mostrar-info' a la capa contenedora del libro
  });
});

//funcionalidad fotos giratorias personajes
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
        genero = "Unknown";
      }
      patronusPersonaje = personajeData.patronus;
      if (patronusPersonaje === null) {
        patronusPersonaje = "Unknown";
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

//SELECCION DE APELLIDOS PARA VISUALIZAR DESPLEGABLE
const selectFamilia = document.getElementById('selectFamilia');// Obtener referencia al select de la familia
const apellidos = extractApellidos(data.characters);// Obtener apellidos de la data
for (let i = 0; i < apellidos.length; i++) {
  const opcion = document.createElement('option');
  opcion.value = apellidos[i]; //para asignar el valor como el apellido
  opcion.innerText = apellidos[i];
  selectFamilia.insertBefore(opcion, selectFamilia.lastChild);
}
//FILTRO POR APELLIDO LINKEADO CON SELECCION APELLIDOS
selectFamilia.addEventListener('change', function (e) { // Agrega un evento 'change' al elemento select con el ID 'selectFamilia' que se dispara cuando se cambia su valor
  const valorSeleccionado = e.target.value;  // Obtén el valor seleccionado del elemento select que disparó el evento y guárdalo en la variable 'valorSeleccionado'
  const resultado = filterCharacterName(data.characters, valorSeleccionado);  // Llama a la función 'filterCharacterName' pasándole como argumentos el arreglo de personajes 'data.characters' y el valor seleccionado del elemento select, y guarda el resultado filtrado en la variable 'resultado'
  console.log(resultado); // Mostrar el resultado en la consola

  let textoResultado = ""; // Inicializa una cadena de texto vacía en la variable 'textoResultado' para construir la representación personalizada del objeto
  for (let i = 0; i < resultado.length; i++) {// Itera a través del arreglo 'resultado' que contiene los personajes filtrados y guarda cada personaje en la variable 'personaje' en cada iteración del bucle
    const personaje = resultado[i];
    textoResultado += `Name: ${personaje.name ?? 'Unknown'}, Birth: ${personaje.birth ?? 'Unknown'}, Status: ${personaje.death ? 'Died on ' + personaje.death : 'Alive'}, Gender: ${personaje.gender ?? 'Unknown'}<br>`; // Utilizar operador ?? para mostrar 'Unknown' en lugar de null
    // Construye la representación personalizada del objeto 'personaje' utilizando plantillas de cadena de texto (template literals) con interpolación de variables, y agrega cada propiedad del personaje (name, birth, death y gender) junto con su valor correspondiente. Utiliza el operador de fusión nula (??) para mostrar 'Unknown' en lugar de null en las propiedades que no tienen valor. También utiliza un operador ternario para mostrar 'Died on [fecha]' si la propiedad 'death' tiene un valor, o 'Alive' si no lo tiene. Al final, agrega una etiqueta <br> para hacer un salto de línea en el resultado.
  }
  document.getElementById('resultado').innerHTML = textoResultado;// Actualiza el contenido del elemento con el ID 'resultado' en el HTML con la representación personalizada del objeto construida en la variable 'textoResultado', mostrándola como HTML en el elemento <p> del HTML.
});

//SELECCION DE ESPECIES PARA VISUALIZAR DESPLEGABLE
const selectSpecies = document.getElementById('selectSpecies');
const especie = extractSpecies(data.characters);
for (let i = 0; i < especie.length; i++) {
  const opcion = document.createElement('option');
  opcion.value = especie[i]; // Modificado para asignar el valor como el especie
  opcion.innerText = especie[i];
  selectSpecies.insertBefore(opcion, selectSpecies.lastChild);
}
//FILTRO POR ESPECIE LINKEADO CON SELECCION DE ESPECIES
selectSpecies.addEventListener('change', function (e) {
  const valorSeleccionado = e.target.value; // Obtener el contenido del value
  const resultado = filterCharacterSpecies(data.characters, valorSeleccionado)
  console.log(resultado)

  let textoResultadoEspecies = "";
  for (let i = 0; i < resultado.length; i++) {
    const personajeEspecie = resultado[i];
    textoResultadoEspecies += `Name: ${personajeEspecie.name ?? 'Unknown'}, Specie: ${personajeEspecie.species ?? 'Unknown'}, Birth: ${personajeEspecie.birth ?? 'Unknown'}, Status: ${personajeEspecie.death ? 'Died on ' + personajeEspecie.death : 'Alive'}, Gender: ${personajeEspecie.gender ?? 'Unknown'}<br>`;
  }
  document.getElementById('resultado').innerHTML = textoResultadoEspecies;
});

//FILTRO POR GENERO
const selectGender = document.getElementById('selectGender');
// Agregar evento de cambio al select
selectGender.addEventListener('change', function (e) {
  const valorSeleccionado = e.target.value; // Obtener el contenido del value
  const resultado = filterCharacterGender(data.characters, valorSeleccionado)
  console.log(resultado)

  let textoResultadoGenero = "";
  for (let i = 0; i < resultado.length; i++) {
    const personajeGenero = resultado[i];
    textoResultadoGenero += `Name: ${personajeGenero.name ?? 'Unknown'}, Specie: ${personajeGenero.species ?? 'Unknown'}, Birth: ${personajeGenero.birth ?? 'Unknown'}, Status: ${personajeGenero.death ? 'Died on ' + personajeGenero.death : 'Alive'}, Gender: ${personajeGenero.gender ?? 'Unknown'}<br>`;
  }
  document.getElementById('resultado').innerHTML = textoResultadoGenero;
});

//FILTRO POR CASA
const selectHouses = document.getElementById('selectHouses');
// Agregar evento de cambio al select
selectHouses.addEventListener('change', function (e) {
  const valorSeleccionado = e.target.value; // Obtener el contenido del value
  const resultado = filterCharacterHouse(data.characters, (valorSeleccionado))
  console.log(resultado)

  let textoResultadoCasas = "";
  for (let i = 0; i < resultado.length; i++) {
    const personajeCasa = resultado[i];
    textoResultadoCasas += `Name: ${personajeCasa.name ?? 'Unknown'}, Specie: ${personajeCasa.species ?? 'Unknown'}, Birth: ${personajeCasa.birth ?? 'Unknown'}, Status: ${personajeCasa.death ? 'Died on ' + personajeCasa.death : 'Alive'}, Gender: ${personajeCasa.gender ?? 'Unknown'}<br>`;
  }
  document.getElementById('resultado').innerHTML = textoResultadoCasas;
});