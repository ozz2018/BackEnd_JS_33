const fs = require('fs');
const dataFileKo = 'kodersList.json';

function init() {
  const existFile = fs.existsSync(dataFileKo);
  if (!existFile) {
    fs.writeFileSync(dataFileKo, JSON.stringify({ koders: [] }));
    console.log('Se Creo una Nueva Lista de Koders');
  }
}

function listKoders() {
  const kodersArray = getKoders();
  if (!kodersArray.length) {
    console.log('No hay koders en lista');
    process.exit(0);
  }
  kodersArray.forEach((koder, idx) => {
    console.log(idx, '=>', koder);
  });
}

function getKoders() {
  const content = fs.readFileSync(dataFileKo, 'utf8');
  return JSON.parse(content);
}

function updateKoders(kodersArray) {
  const newKodersList = { koders: kodersArray };
  const newKoderString = JSON.stringify(newKodersList);
  fs.writeFileSync(dataFileKo, newKoderString);
}

function addKoders(koder) {
  // You might want to handle different scenarios for argument here (e.g., creating a koder object)
  const kodersArray = getKoders();
  kodersArray.push(koder);
  updateKoders(kodersArray);
}

function removeKoders(koderIdx) {
  const kodersArray = getKoders();
  if (koderIdx < 0 || koderIdx >= kodersArray.length) {
    console.error("Esto no es una posición valida ");
    process.exit(1);
  }
  kodersArray.splice(koderIdx, 1);
  updateKoders(kodersArray);
  console.log(`Koder: ${koderIdx} fue eliminado `);
}

function resetKoders() {
  updateKoders([]);
  console.log("La lista fue Eliminada");
}

function main() {
  const command = process.argv[2];
  const argument = process.argv[3];
  init();
  if (!command) {
    console.log('Opciones para manejar el programa CRUD: [ls: para ver la lista, rm: para eliminar un koder, add: para añadir un koder y reset: reinicia la lista]"');
    process.exit(0);
  } else if (command.toLowerCase() === 'ls') {
    listKoders();
  } else if (command.toLowerCase() === 'add') {
    if (!argument) {
      console.log('No hay información por agregar new Kod3r');
      process.exit(1);
    }
    addKoders(argument);
    listKoders();
    console.warn('Koder Agregado con Éxito');
  } else if (command.toLowerCase() === "rm") {
    if (!argument) {
      console.error("No seleccionaste a quien eliminar");
      process.exit(1);
    }
    const koderIdx = parseInt(argument);

    if (isNaN(koderIdx)) {
      console.error("Esto no es una posición valida ");
      process.exit(1);
    }

    removeKoders(koderIdx);
    listKoders();
  } else if (command.toLowerCase() === "reset") {
    reset();
    console.log("La lista fue Eliminada");
} else {
    console.error("Comando invalido", command)
}
}
main()