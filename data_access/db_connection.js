const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.config.DB_HOST,
    port: 3036,
    user: process.config.DB_USER,
    password: process.config.DB_PASS,
    database: process.config.DB_DATABASE,
});

module.exports = connection;
