const { Router } = require('express')
const routes = Router()
const AgenciasController = require ('../controllers/AgenciasController')

routes
    .get('/',(req,res)=>{
        console.log('Hello Mundo!')
        res.send('Vamos revolucionar o sistema bancário!')       
    })
    .get('/agencias', AgenciasController.buscaAgencias)
module.exports = routes
