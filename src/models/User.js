import { DataTypes } from "sequelize";
import { sequelize } from "../config";
import Employee from "./Employee";
import Customer from "./Customer"

const User = sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password_hash'
    },
    token: {
      type: DataTypes.STRING,
      allowNull: true
    },
    role: {
      type: DataTypes.STRING, // admin ou customer
      allowNull: false,
      defaultValue: 'customer'
    }
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);
User.belongsTo(Employee, {
  as: 'employee',
  foreignKey: {
    name: 'idEmployee',
    field: 'id_employee'
  }
});
User.belongsTo(Customer, {
  as: 'customer',
  foreignKey: {
    name: 'idCustomer',
    field: 'id_customer'
  }
});

export default User;
