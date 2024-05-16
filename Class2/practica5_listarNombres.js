//Pide al user lista de nombres indeterminado, cuando termina entregara cuantos, si existen repetidos, mas largo y mas corto
const prompt = require('prompt-sync')(); 
let answer = 1;
let names = [];
let longestName = "";
let shortestName = "";
let uniqueNames = new Set(); 

const findrepeatedIndex=(names) => {
  const repeatedIndex = {};
  for (let i = 0; i < names.length; i++) {
    const currentName = names[i].toLowerCase(); 
    if (repeatedIndex[currentName]) {
        repeatedIndex[currentName].push(i);
    } else {
        repeatedIndex[currentName] = [i];
    }
  }

  const repeatedNamesInfo = [];
  for (const name in repeatedIndex) {
    if (repeatedIndex[name].length > 1) { 
      repeatedNamesInfo.push({
        name: name,
        indices: repeatedIndex[name]
      });
    }
  }
  return repeatedNamesInfo;
}

while (answer === 1) {
  const name = prompt('Ingresa un nombre: ');
  names.push(name);

  // Update longest/shortest names
  if (!longestName || name.length > longestName.length) {
    longestName = name;
  }
  if (!shortestName || name.length < shortestName.length) {
    shortestName = name;
  }

  // Check for duplicates using Set
  const lowercaseName = name.toLowerCase(); // Convert to lowercase
  if (!uniqueNames.add(lowercaseName)) {
    repeatedNames.push(name); // Use original name for repeatedNames (optional)
  }

  answer = parseInt(prompt('¿Quieres ingresar otro nombre? SI = 1 NO = 0: '));
  if (isNaN(answer) || ![0, 1].includes(answer)) {
    console.error('Invalid. Porfavor ingrese 1 = "Sí" o 0 ="No".');
    answer = 1;
  }
}

// Display results
console.log('Lista de nombres: ', names);
console.log('Ingresaste un total de', names.length, 'nombres.');
console.log('El nombre más largo es:', longestName);
console.log('El nombre más corto es:', shortestName);

// Check for duplicates and display information at the end
const repeatedNamesData = findrepeatedIndex(names);
if (repeatedNamesData.length > 0) {
  console.warn('¡Se encontraron nombres repetidos!');

  for (const repeatedName of repeatedNamesData) {
    console.log(`  - El nombre "${repeatedName.name}" se repite en los índices:`, repeatedName.indices.join(', '));
  }
} else {
  console.log('No se encontraron nombres repetidos.');
}