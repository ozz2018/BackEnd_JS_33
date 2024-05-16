const fs = require('node:fs');

try {
  fs.mkdirSync('createFolder');
  console.log('Directorio creado exitosamente');
} catch (err) {
  if (err.code === 'EEXIST') {
    console.error('El directorio ya existe');
  } else {
    console.error(err);
  }
}