const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.status(200).send([
    { name: 'Jhon Doe', age: 24 },
    { name: 'Pedro Cha', age: 35 },
    { name: 'You ju', age: 44 }
  ]);
});

app.listen(3000);

module.exports.app = app;