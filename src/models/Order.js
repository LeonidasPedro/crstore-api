import { DataTypes } from "sequelize";
import { sequelize } from "../config";
import Customer from "./Customer";
import DiscountCoupon from "./DiscountCoupon";
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
    },
    status:{
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: "created"
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
  
);
Order.belongsTo(Employee, {
  as: 'employee',
  onDelete: 'NO ACTION', onUpdate: 'NO ACTION', foreignKey: {
    name: 'idEmployee',
    field: 'id_employee'
  }
});
Order.belongsTo(Customer, {
  as: 'customer',
  onDelete: 'NO ACTION', 
  onUpdate: 'NO ACTION', 
  foreignKey: {
    name: 'idCustomer',
    field: 'id_customer'
  }
});
Order.belongsTo(DiscountCoupon, {
  as: 'discountCoupon',
  onDelete: 'NO ACTION', 
  onUpdate: 'NO ACTION', 
  foreignKey: {
    name: 'idDiscountCoupon',
    field: 'id_discount_coupon'
  }
});
export default Order;
