import { DataTypes } from "sequelize";
import { sequelize } from "../config";
import Customer from "./Customer";
import Employee from "./Employee";


const Order = sequelize.define(
  'orders',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    total_price: {
      type: DataTypes.NUMERIC(15,2),
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);
Order.belongsTo(Employee, {
  as: 'employee',
  foreignKey: {
    name: 'idEmployee',
    field: 'id_employee'
  }
});
Order.belongsTo(Customer, {
  as: 'customer',
  foreignKey: {
    name: 'idCustomer',
    field: 'id_customer'
  }
});
export default Order;
