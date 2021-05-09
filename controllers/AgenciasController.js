const Sequelize = require('sequelize')
const database = require('../models')
const Op = Sequelize.Op

class AgenciasController{
    static async buscaAgencias(req, res){
        try{
            const todasAgencias = database.findAll()
            return res.status(200).json(todasAgencias)
        }catch(erro){
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async buscaAgenciasID(req, res){
        const { id } = req.params
        try{
            const agenciaRetorno = database.findOne({
                where: { id:Number(id)

                }
            })
            return res.status(200).json(agenciaRetorno)
        }catch(erro){
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async inserirAgencia(req, res) {
        try {
            const novaAgencia = await database.create(req.body)
            return res.status(200).json(novaAgencia)
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async deletaAgencia(req, res) {
        try {
            const agenciaAlvo = await database.findByPk(req.params.id)
            if (agenciaAlvo) {
                await agenciaAlvo.destroy()
                return res.status(204).json(agenciaAlvo)
            } else {
                return res.status(400).json({
                    mensagem: "Agência não encontrado"
                })
            }
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async atualizaAgencia(req, res) {
        try {
            const agenciaAlvo = await database.findByPk(req.params.id)
            if (agenciaAlvo) {
                await agenciaAlvo.update(req.body)
                return res.status(204).json(agenciaAlvo)
            } else {
                return res.status(400).json({
                    mensagem: "Agência não encontrado"
                })
            }
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async buscarPorNumero(req, res) {
        let nome = '%'+req.query.nome
        try {
            const agencias = await database.findAll({
                where:{
                    nome: {
                        [Op.like]: nome
                    }
                }
            })
            return res.status(200).json(agencias)
        }catch(erro){
            return res.status(400).json({
                error: erro.message
            })
        }
    }
}
module.exports = AgenciasController;