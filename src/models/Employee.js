import { DataTypes } from "sequelize";
import { sequelize } from "../config";
import User from "./User";



const Employee = sequelize.define(
  'employees',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);
Employee.belongsTo(User, {
  as: 'user',
  onDelete: 'NO ACTION', onUpdate: 'NO ACTION', foreignKey: {
    name: 'idUser',
    field: 'id_user'
  }
});

export default Employee;
