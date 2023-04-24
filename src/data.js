export function filterCharacterName(characters, nombreAfiltrar) {
  const resultadoFiltro = [];
  characters.forEach(personaje => {
    if (personaje.name.includes(nombreAfiltrar)) {
      resultadoFiltro.push(personaje)
    }
  });
  return resultadoFiltro;
}
export function filterCharacterGender(characters, genero) {
  const resultadoFiltroGender = [];
  characters.forEach(element => {
    if (element.gender === genero) {
      resultadoFiltroGender.push(element)
    }
  });
  return resultadoFiltroGender;
}

export function filterCharacterSpecies(characters, tipoEspecie) { // En  el dom hay qu escribir Human(ALGO)
  const filterCharacterSpecies = [];
  characters.forEach(especie => {
    if (especie.species === tipoEspecie) {
      filterCharacterSpecies.push(especie)
    }
  });
  return filterCharacterSpecies;
}

export function filterspellType(spells, tipoHechizo) {
  const filterspellType = [];
  spells.forEach(hechizo => {
    if (hechizo.spell_type === tipoHechizo) {
      filterspellType.push(hechizo)
    }
  });
  return filterspellType;
}

export function filterCharacterHouse(characters, casa) {
  const resultadoCasas = [];
  characters.forEach(element => {
    if (element.house === casa) {
      resultadoCasas.push(element)
    }
  });
  return resultadoCasas;
}

export function sortData(data, sortBy, sortOrder = 'asc') {
  const resultadoSort1 = [];
  const resultadoFinal = [];
  data.forEach((element) => {
    resultadoSort1.push(element[sortBy]);
  });

  if (sortOrder === 'desc') {
    resultadoSort1.sort().reverse().forEach((nombre) => {
      data.forEach((element) => {
        if (element[sortBy] === nombre) {
          resultadoFinal.push(element);
        }
      });
    });
  } else {
    resultadoSort1.sort().forEach((nombre) => {
      data.forEach((element) => {
        if (element[sortBy] === nombre) {
          resultadoFinal.push(element);
        }
      });
    });
  }
  
  return resultadoFinal;
}

// export function filterpotionsName(letter, nombreAfiltrar) {
//   const resultadoFiltroNombrePotions = [];
//   potions.forEach(potions => {
//     if (potions.name.includes(nombreAfiltrar)) {
//       resultadoFiltroNombrePotions.push(potions)
//     }
//   });
//   return JSON.stringify(resultadoFiltroNombrePotions);
// }