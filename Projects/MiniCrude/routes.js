// Iniciando Route do Express
const express = require('express');

const route = express.Router();
// Importando os Controllers

const home = require('./src/controllers/home');
// Iniciando as rotas

route.get('/Index', home.pagInicialGet);
route.get('/', home.pagInicialGet);
module.exports = route;

const cadastro = require('./src/controllers/cadastro');
route.get('/RegisterClass',cadastro.sala);
route.get('/RegisterStudent',cadastro.aluno);
route.post('/RegisterClass',cadastro.salaInsert);
route.post('/RegisterStudent',cadastro.alunoInsert);
route.post('/Index',home.pagInicialPost);
route.post('/',home.pagInicialPost);