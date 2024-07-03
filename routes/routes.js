const { Router } = require('express');
const { inserirCliente, login } = require('../data_access/cliente');
const { getServicos, getServicoById } = require('../data_access/servicos');
const router = Router();
require('dotenv').config();

router.get('/', (req, res) => {
    res.render('index')
});

router.get('/servicos', async (req, res) => {
    try {
        const servicos = await getServicos();
        res.render('servicos', { title: 'Serviços', servicos })
    } catch (error) {
        console.error('Erro ao buscar serviços', error);
        res.status(500).send({ message: 'Erro ao buscar serviços' });
    }
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
            res.status(401).send({ message: 'Email ou senha inválidos' });
            return;
        }

        res.send({ message: 'Logado com sucesso!', status: 200 });
    } catch (error) {
        console.error('Erro ao cadastrar cliente', error);
        res.status(401).send({ message: 'Email ou senha inválidos' });
    }
});

router.get('/contato', (req, res) => {
    res.render('contato')
});

router.get('/compra/:servicoId', async (req, res) => {
    const servicoId = req.params.servicoId;
    const servico = await getServicoById(servicoId);
    if (servico) {
        res.render('compra', { servico });
    } else {
        res.status(404).send({ message: 'Serviço não encontrado' });
    }
});

router.get('/carrinho', async (req, res) => {
    res.render('carrinho');
});
router.get('/carrinho/:servicoId', async (req, res) => {
    const id = req.params.servicoId;
    console.log(id);
    await getServicoById(id).then((service) => {

        if (service) {
            res.json({ success: true, service: service });
        } else {
            res.json({ success: false, message: 'Serviço não encontrado' });
        }
    });

});
router.get('/cadastro', (req, res) => {
    res.render('cadastro')
});

router.post('/cadastro', async (req, res) => {
    const dados = req.body;
    try {
        await inserirCliente(dados);
        res.status(201).send({ message: 'Cliente cadastrado com sucesso!' });
    } catch (error) {
        console.error('Erro ao cadastrar cliente', error);
        res.status(500).send({ message: 'Erro ao cadastrar cliente' });
    }
});




module.exports = router;
