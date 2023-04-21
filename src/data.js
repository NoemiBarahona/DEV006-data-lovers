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

export function filterCharacterHouse(characters, casa) {
  const resultadoCasas = [];
  characters.forEach(element => {
    if (element.house === casa) {
      resultadoCasas.push(element)
    }
  });
  return resultadoCasas;
}

export function sortData(data, sortBy) {
  const resultadoSort1 = []
  const resultadoFinal = []
  data.forEach(element => {
    resultadoSort1.push(element[sortBy])
  });
  resultadoSort1.sort().forEach(nombre => {
    data.forEach(element => {
      if (element[sortBy] === nombre) {
        resultadoFinal.push(element);
      }
    });
  });
  // console.log(resultadoSort1.sort())
  return resultadoFinal.reverse();
}