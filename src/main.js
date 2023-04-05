import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
// import data from './data/rickandmorty/rickandmorty.js';
console.log(example, data);

document.getElementById("botonInicioHP").addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
    //"instant"
  });
});  

