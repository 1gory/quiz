import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
  const filePath = path.resolve(__dirname, '..', 'public', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.log(err);
      return res.status(404).end();
    }

    res.send(htmlData);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

app.on('error', (error) => {
  throw error;
});