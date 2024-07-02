const pool = require("./db_connection");

async function getServicos() {
    let connection;
    try {
        connection = await pool.getConnection();
        const sql = 'SELECT * FROM tbl_servicos';
        const [rows, fields] = await connection.query(sql);
        console.log(rows);
        return rows;
    } catch (err) {
        console.error('Erro ao executar consulta', err);
    } finally {
        if (connection) connection.release();
    }
}

async function getServicoById(servicoId) {
    let connection;
    try {
        connection = await pool.getConnection();
        const sql = 'SELECT * FROM tbl_servicos WHERE id_servico = ?';
        const [rows, fields] = await connection.query(sql, [servicoId]);
        return rows;
    } catch (err) {
        console.error('Erro ao executar consulta', err);
    } finally {
        if (connection) connection.release();
    }
}

    

module.exports = { getServicos, getServicoById };