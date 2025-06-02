// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://mongo:27017/testdb')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error(err));

app.get('/', (req, res) => {
  res.send('Hello from Docker Container!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
