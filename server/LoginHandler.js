const express = require('express');
const router = express.Router();
const db = require('./models/reportModel');



router.post('/', (req, res, next) => {
// autherize here, then redirect to feed but for now just redirect to /reports
res.redirect(301, '/reports');
});

module.exports = router;