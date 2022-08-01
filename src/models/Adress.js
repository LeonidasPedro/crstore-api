import { DataTypes } from "sequelize";
import { sequelize } from "../config";
import User from "./User";

const Adress = sequelize.define(
  'addresses',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false
      
    },
    cep: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
      
    },
    district: {
      type:DataTypes.STRING,
      
    }
  },


  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);
Adress.belongsTo(User, {
  as: 'adresses',
  foreignKey: {
    name: 'idAdress',
    allowNull: false,
    field: 'id_adress'
  }
});

export default Adress;
