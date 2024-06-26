const { Router } = require('express');
const router = Router();
require('dotenv').config();

router.get('/', (req, res) => res.render('index'));
router.get('/servicos', (req, res) => res.render('servicos'));
router.get('/perfil', (req, res) => res.render('perfil'));
router.get('/sobre', (req, res) => res.render('sobre'));
router.get('/login', (req, res) => res.render('login'));
router.get('/contato', (req, res) => res.render('contato'));
router.get('/compra', (req, res) => res.render('compra'));
router.get('/carrinho', (req, res) => res.render('carrinho'));
router.get('/cadastro', (req, res) => res.render('cadastro'));



module.exports = router;
