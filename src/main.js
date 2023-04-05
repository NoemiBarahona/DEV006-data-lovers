import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log(example, data);

// Funcionalidad para el boton de inicio
document.getElementById("botonInicioHP").addEventListener('click', function() { //aqui se llama el id del boton 
  window.scrollTo({ // atributo de mover por la pagina
    top: 0, //aqui se le indica que tiene que moverse verticalmete hasta el punto 0/inicio
    behavior: "smooth"//forma en que se mueve, en este caso es lento tambien esta instantaneo "instant"
  });
});  
// Funcionalidad para el boton de libros
document.getElementById("botonInicioLibros").addEventListener('click', function() { //aqui se llama el id del boton 
  window.scrollTo({ // atributo de mover por la pagina
    top: document.getElementById("PORDEFINIR").offsetTop, //aqui se le indica que tiene que moverse verticalmete hasta el id-div tambien puede ser query.selector
    behavior: "smooth" //forma en que se mueve, en este caso es lento tambien esta instantaneo "instant"
  });
});  
// Funcionalidad para el boton de casas
document.getElementById("botonInicioCasas").addEventListener('click', function() { //aqui se llama el id del boton 
  window.scrollTo({ // atributo de mover por la pagina
    top: document.getElementById("PORDEFINIR").offsetTop, //aqui se le indica que tiene que moverse verticalmete hasta el id-div tambien puede ser query.selector
    behavior: "smooth" //forma en que se mueve, en este caso es lento tambien esta instantaneo "instant"
  });
});

// Funcionalidad para el boton de personajes
document.getElementById("botonInicioPersonajes").addEventListener('click', function() {//aqui se llama el id del boton 
  window.scrollTo({// atributo de mover por la pagina
    top: document.getElementById("PORDEFINIR").offsetTop, //aqui se le indica que tiene que moverse verticalmete hasta el id-div tambien puede ser query.selector
    behavior: "smooth" //forma en que se mueve, en este caso es lento tambien esta instantaneo "instant"
  });
});  
// Funcionalidad para el boton de hechizos
document.getElementById("botonInicioHecizos").addEventListener('click', function() {//aqui se llama el id del boton 
  window.scrollTo({// atributo de mover por la pagina
    top: document.getElementById("PORDEFINIR").offsetTop,
    behavior: "smooth"
  });
});  
// Funcionalidad para el boton de pociones
document.getElementById("botonInicioPociones").addEventListener('click', function() {//aqui se llama el id del boton 
  window.scrollTo({// atributo de mover por la pagina
    top: document.getElementById("PORDEFINIR").offsetTop, //aqui se le indica que tiene que moverse verticalmete hasta el id-div tambien puede ser query.selector
    behavior: "smooth" //forma en que se mueve, en este caso es lento tambien esta instantaneo "instant"
  });
});  