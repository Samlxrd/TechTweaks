const pool = require("./db_connection");

async function getServicos() {
    let connection;
    try {
        connection = await pool.getConnection();
        const sql = 'SELECT * FROM tbl_servicos';
        const [rows, fields] = await connection.query(sql);

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
        console.log("ID: " + servicoId);
        connection = await pool.getConnection();
        const sql = 'SELECT * FROM tbl_servicos WHERE id_servico = ?';


        const [rows, fields] = await connection.execute(sql, [servicoId]);
        console.log(rows);
        return rows.length > 0 ? rows[0] : null; // Devuelve el primer servicio encontrado o null si no hay resultados
    } catch (err) {
        console.error('Erro ao executar consulta', err);
        throw err; // Propaga el error para manejarlo en otro lugar si es necesario
    } finally {
        if (connection) connection.release();
    }
}



module.exports = { getServicos, getServicoById };