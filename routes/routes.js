const { Router } = require('express');
const { inserirCliente, login } = require('../data_access/cliente');
const { status } = require('express/lib/response');
const router = Router();
require('dotenv').config();

router.get('/', (req, res) => {
    res.render('index')
});

router.get('/servicos', (req, res) => {
    res.render('servicos')
});

router.get('/perfil', (req, res) => {
    res.render('perfil')
});

router.get('/sobre', (req, res) => {
    res.render('sobre')
});

router.get('/login', (req, res) => {
    res.render('login')
});

router.post('/login', async (req, res) => {
    const dados = req.body;
    try {
        const response = await login(dados);
        if (!response) {
            res.status(401).send({message: 'Email ou senha inválidos'});
            return;
        }
        
        res.send({message: 'Logado com sucesso!', status: 200});
    } catch (error) {
        console.error('Erro ao cadastrar cliente', error);
        res.status(401).send({message: 'Email ou senha inválidos'});
    }
});

router.get('/contato', (req, res) => {
    res.render('contato')
});

router.get('/compra', (req, res) => {
    res.render('compra')
});

router.get('/carrinho', (req, res) => {
    res.render('carrinho')
});

router.get('/cadastro', (req, res) => {
    res.render('cadastro')
});

router.post('/cadastro', async (req, res) => {
    const dados = req.body;
    try {
        await inserirCliente(dados);
        res.status(201).send({message: 'Cliente cadastrado com sucesso!'});
    } catch (error) {
        console.error('Erro ao cadastrar cliente', error);
        res.status(500).send({ message: 'Erro ao cadastrar cliente'});
    }
});




module.exports = router;
