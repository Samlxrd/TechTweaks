const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'techtweaks',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection()
  .then(connection => {
    connection.release();
  })
  .catch(err => {
    console.error('Erro ao conectar se conectar com o banco de dados: ', err);
  });

module.exports = pool ;
