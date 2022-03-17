const Pool = require('pg').Pool

const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'my_todos_db',
    password: 'root',
    port: '5432'
})

module.exports = db