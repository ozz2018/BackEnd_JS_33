const express = require('express');
const fs = require('node:fs/promises');

const dataFileKo = 'kodersList.json';
const port = 8080;

const app = express();

app.use(express.json()); 

async function init() {
  try {
    const exists = await fs.access(dataFileKo, fs.constants.F_OK);
    if (!exists) {
      await fs.writeFile(dataFileKo, JSON.stringify({
        koders: [{
          "name": "TimTom",
          "generation": 3,
          "gender": "H",
          "age": 27,
          "isActive": true
        }]
      }, null, 2));
      console.log('Se Creo una Nueva Lista de Koders');
    }
  } catch (error) {
    console.error('Error initializing data file:', error);
  }
}

app.get('/koders', async (req, res) => {
  try {
    const data = await fs.readFile(dataFileKo, 'utf-8');
    const koders = JSON.parse(data);
    res.json(koders);
  } catch (error) {
    console.error('Error reading koder data:', error);
    res.status(500).send('Error retrieving koder data');
  }
});

app.post('/koders', async (req, res) => {
  try {
    const newKoder = req.body;

    const data = await fs.readFile(dataFileKo, 'utf-8');
    let koders;
    try {
      koders = JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        koders = [];
      } else {
        throw error;
      }
    }

    koders.push(newKoder);

    try {
      await fs.writeFile(dataFileKo, JSON.stringify(koders, null, 2));
    } catch (error) {
      console.error('Error writing koder data to file:', error);
      let errorMessage = 'Error creating koder';
      if (error.code === 'ENOENT') {
        errorMessage = 'Failed to write koder data. File not found.';
      } else if (error.code === 'EACCES') {
        errorMessage = 'Failed to write koder data. Permission denied.';
      }
      return res.status(500).send(errorMessage);
    }

    res.status(201).send('Koder created successfully');
  } catch (error) {
    console.error('Error creating koder:', error);
    res.status(500).send('Error creating koder');
  }
});

app.delete('/koders/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const data = await fs.readFile(dataFileKo, 'utf-8');
    const koders = JSON.parse(data);

    const index = koders.findIndex(koder => koder.id === id);
    if (index === -1) {
      return res.status(404).send('Koder not found');
    }

    koders.splice(index, 1);

    await fs.writeFile(dataFileKo, JSON.stringify(koders, null, 2));

    res.status(200).send('Koder deleted successfully');
  } catch (error) {
    console.error('Error deleting koder:', error);
    res.status(500).send('Error deleting koder');
  }
});

app.listen(port, async () => {
  try {
    await init();
    console.log(`Server listening on port ${port}`);
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
});
