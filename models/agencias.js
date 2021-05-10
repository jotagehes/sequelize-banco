'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agencias extends Model {
    
    static associate(models) {       
      Agencias.belongsToMany(models.Clientes,{
        through: "contas"
      })    
    }
  };
  Agencias.init({
    numero: DataTypes.INTEGER,
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Agencias',
  });
  return Agencias;
};