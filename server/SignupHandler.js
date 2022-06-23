const express = require('express');
const router = express.Router();
const db = require('./models/reportModel');

const { v4: uuidv4 } = require('uuid');


router.post('/', (req, res, next) => {
  db.query(
    `INSERT INTO public.users 
  VALUES (3, 'Jesse', 'jessie', 'postressinfosho', 'jesse@gmail.com') RETURNING *`
  ).then((data) => {
    res.status(200).send(data)
  }).catch((err) => {
    next({message: err})
  });
});

module.exports = router;