const express = require('express');
const router = express.Router();
const db = require('./models/reportModel');

const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
  db.query('SELECT * FROM users;').then((data) => {
    res.status(200).send(data.rows);
  });
});


module.exports = router;
