const connect = require("./db_connection");

async function inserirCliente(dados) {
    const conn = await connect.getConnection();
    const sql = 'INSERT INTO tbl_cliente(nome, cpf, data_nascimento, email, senha, telefone) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [dados.nome, dados.cpf, dados.data_nascimento, dados.email, dados.senha, dados.telefone];
    try {
        conn.query(sql, values);
    } catch (error) {
        throw error;
    } finally {
        conn.commit();
        conn.end();
    }
}

async function login(dados) {
    const conn = await connect.getConnection()
    const sql = 'SELECT * FROM tbl_cliente WHERE email = ? AND senha = ?';
    const values = [dados.email, dados.senha];
    try {
        const results = await conn.query(sql, values)

        if (results.length > 0) {
            const { senha, ...userWithoutPassword } = results[0];
            return userWithoutPassword;
        } else {
            return null;
        }
    } catch (error) {
        throw error;
    } finally {
        conn.end();
    }
}

module.exports = { inserirCliente, login };