const {
    Bancos, Sequelize 
} = require('../models/')
const Op = Sequelize.Op


class BancosController{
    static async buscaTodosBancos(req, res){
        try{
            const todosBancos = await Bancos.findAll()
            return res.status(200).json(todosBancos)
        }catch(erro){
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async buscaBancoPorID(req, res){
        const { id } = req.params
        try{
            const bancoRetorno = await Bancos.findOne({
                where: { id:Number(id)

                }
            })
            return res.status(200).json(bancoRetorno)
        }catch(erro){
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async inserirBanco(req, res) {
        try {
            const novoBanco = await Bancos.create(req.body)
            return res.status(200).json(novoBanco)
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async deletaBanco(req, res) {
        try {
            const bancoAlvo = await Bancos.findByPk(req.params.id)
            if (bancoAlvo) {
                await bancoAlvo.destroy()
                return res.status(204).json(bancoAlvo)
            } else {
                return res.status(400).json({
                    mensagem: "Banco não encontrado"
                })
            }
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async atualizaBanco(req, res) {
        try {
            const bancoAlvo = await Bancos.findByPk(req.params.id)
            if (bancoAlvo) {
                await bancoAlvo.update(req.body)
                return res.status(204).json(bancoAlvo)
            } else {
                return res.status(400).json({
                    mensagem: "Banco não encontrado"
                })
            }
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async buscaBancoPorNumero(req, res) {
        let cnpj = '%'+req.query.cnpj
        try {
            const bancos = await Bancos.findAll({
                where:{
                    cnpj: {
                        [Op.like]: cnpj
                    }
                }
            })
            return res.status(200).json(bancos)
        }catch(erro){
            return res.status(400).json({
                error: erro.message
            })
        }
    }

}
module.exports = BancosController;