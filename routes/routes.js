const { Router } = require('express')
const routes = Router()
const AgenciasController = require ('../controllers/AgenciasController')
const BancosController = require('../controllers/BancosController')
const ClientesController = require('../controllers/ClientesController')

routes
    .get('/',(req,res)=>{
        console.log('Hello Mundo!')
        res.send('Vamos revolucionar o sistema bancário!')       
    })
    .get('/agencias', AgenciasController.buscaTodasAgencias)
    .get('agencias/:id', AgenciasController.buscaAgenciaPorID)
    .get('agencias', AgenciasController.buscaAgenciaPorNumero)
    .post('/agencias', AgenciasController.inserirAgencia)
    .put('/agencias', AgenciasController.atualizaAgencia)
    .delete('/agencias', AgenciasController.deletaAgencia)

    .get('/bancos', BancosController.buscaTodosBancos)
    .get('bancos/:id', BancosController.buscaBancoPorID)
    .get('bancos', BancosController.buscaBancoPorNumero)
    .post('/bancos', BancosController.inserirBanco)
    .put('/bancos', BancosController.atualizaBanco)
    .delete('/bancos', BancosController.deletaBanco)

    .get('/clientes', ClientesController.buscaTodosClientes)
    .get('clientes/:id', ClientesController.buscaClientePorID)
    .get('clientes', ClientesController.buscaClientePorNome)
    .post('/clientes', ClientesController.inserirCliente)
    .put('/clientes', ClientesController.atualizaCliente)
    .delete('/clientes', ClientesController.deletaCliente)


module.exports = routes
