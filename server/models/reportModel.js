const PG_URI =
  'postgres://ybbkdjmw:ON2FOLZG95WVWM_l-_SpgTV8CcBbDgsU@heffalump.db.elephantsql.com/ybbkdjmw';

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
