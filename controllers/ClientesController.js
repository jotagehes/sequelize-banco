const {
    Clientes, Sequelize 
} = require('../models/')
const Op = Sequelize.Op
    

class ClientesController{
    static async buscaTodosClientes(req, res){
        try{
            const todasClientes = await Clientes.findAll()
            return res.status(200).json(todasClientes)
        }catch(erro){
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async buscaClientePorID(req, res){
        const { id } = req.params
        try{
            const clienteRetorno = Clientes.findOne({
                where: { id:Number(id)

                }
            })
            return res.status(200).json(clienteRetorno)
        }catch(erro){
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async inserirCliente(req, res) {
        try {
            const novoCliente = await Clientes.create(req.body)
            return res.status(200).json(novoCliente)
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async deletaCliente(req, res) {
        try {
            const clienteAlvo = await Clientes.findByPk(req.params.id)
            if (clienteAlvo) {
                await clienteAlvo.destroy()
                return res.status(204).json(clienteAlvo)
            } else {
                return res.status(400).json({
                    mensagem: "Cliente não encontrado"
                })
            }
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async atualizaCliente(req, res) {
        try {
            const clienteAlvo = await Clientes.findByPk(req.params.id)
            if (clienteAlvo) {
                await clienteAlvo.update(req.body)
                return res.status(204).json(clienteAlvo)
            } else {
                return res.status(400).json({
                    mensagem: "Cliente não encontrado"
                })
            }
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async buscaClientePorNome(req, res) {
        let nome = '%'+req.query.nome
        try {
            const clientes = await Clientes.findAll({
                where:{
                    nome: {
                        [Op.like]: nome
                    }
                }
            })
            return res.status(200).json(clientes)
        }catch(erro){
            return res.status(400).json({
                error: erro.message
            })
        }
    }

}
module.exports = ClientesController;