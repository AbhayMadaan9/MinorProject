const mysql = require('mysql');
require('dotenv').config()

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password: process.env.DATABASE_PASS,
    database:"minor_project"
})


module.exports = db
 