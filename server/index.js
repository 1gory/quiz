const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  const filePath = path.resolve(__dirname, '..', 'public', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.log(err);
      return res.status(404).end();
    }

    return res.send(htmlData);
  });
});

app.get('*', (req, res) => {
  console.log(`App listening on port ${req} ${req}!`);
  return res.send('');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

app.on('error', (error) => {
  throw error;
});