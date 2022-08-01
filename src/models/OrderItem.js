import { DataTypes } from "sequelize";
import { sequelize } from "../config";
import Item from "./Item";
import Order from "./Order";


const OrderItem = sequelize.define(
  'order_items',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    price: {
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
OrderItem.belongsTo(Order, {
  as: 'order',
  foreignKey: {
    name: 'idOrder',
    allowNull: false,
    field: 'id_order'
  }
});
OrderItem.belongsTo(Item, {
  as: 'item',
  foreignKey: {
    name: 'idItem',
    allowNull: false,
    field: 'id_item'
  }
});

export default Item;
