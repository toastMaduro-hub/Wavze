const PG_URI = 'postgres://ybbkdjmw:ON2FOLZG95WVWM_l-_SpgTV8CcBbDgsU@heffalump.db.elephantsql.com/ybbkdjmw';

const express = require('express')
const router = express.Router()

const { Pool, Client } = require('pg')
const client = new Pool()



module.exports = reportModel;