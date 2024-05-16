const prompt = require('prompt-sync')();
let answer = 1;
let names = [];
let longestName = "";
let shortestName = "";

while (answer === 1) {
  const name = prompt('Ingresa un nombre: ');
  names.push(name);

  if (!longestName || name.length > longestName.length) {
    longestName = name;
  }
  if (!shortestName || name.length < shortestName.length) {
    shortestName = name;
  }

  answer = parseInt(prompt('¿Quieres ingresar otro nombre? SI = 1 NO = 0: '));
  if (![0, 1].includes(answer)) {
    console.error('Invalid. Porfavor ingrese 1 = "Sí" o 0 ="No".');
    answer = 1;
  }
}

const repeatedNames = names.reduce((acc, name, i, arr) => {
  if (arr.indexOf(name, i + 1) !== -1) {
    console.log(arr.indexOf(name, i + 1), name)
    acc.push(name);
  }
  return acc;
}, []);
console.log('Lista de nombres: ', names);
console.log('Ingresaste un total de', names.length, 'nombres.');
console.log('El nombre más largo es:', longestName);
console.log('El nombre más corto es:', shortestName);
console.log('Nombres repetidos:', [...repeatedNames]); 