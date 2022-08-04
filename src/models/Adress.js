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
    number: {
      type: DataTypes.INTEGER,
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
  as: 'user',
  onDelete: 'NO ACTION', 
  onUpdate: 'NO ACTION', 
  foreignKey: {
    name: 'userId',
    allowNull: false,
    field: 'id_user'
  }
});

export default Adress;
