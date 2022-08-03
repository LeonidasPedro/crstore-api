import { DataTypes } from "sequelize";
import { sequelize } from "../config";

const User = sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false
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
// User.belongsTo(Employee, {
//   as: 'employee',
//   onDelete: 'NO ACTION', onUpdate: 'NO ACTION', foreignKey: {
//     name: 'idEmployee',
//     field: 'id_employee'
//   }
// });
// User.belongsTo(Customer, {
//   as: 'customer',
//   onDelete: 'NO ACTION', onUpdate: 'NO ACTION', foreignKey: {
//     name: 'idCustomer',
//     field: 'id_customer'
//   }
// });

export default User;
