'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class photo extends Model {
    static associate(models) {}
  };
  photo.init({
    idx: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    filename : {
      type:DataTypes.STRING
    },
    ori_filename : {
      type:DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'photo',
    timestamps:true
  });
  return photo;
};