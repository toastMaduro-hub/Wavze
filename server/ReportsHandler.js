const express = require('express');
const router = express.Router();
const db = require('./models/reportModel');

// const { Pool, Client } = require('pg')
// const client = new Pool()

const ReportControllers = {};

ReportControllers.getAllReports = () => {};

router.get('/', (req, res) => {
  db.query('SELECT * FROM reports;').then((data) => {
    console.log(data.rows[0]);
    res.status(200).send(data.rows);
  });
});

module.exports = router;
