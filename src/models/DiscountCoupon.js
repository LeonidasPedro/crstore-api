import { DataTypes } from "sequelize";
import { sequelize } from "../config";


const DiscountCoupon = sequelize.define(
  'discount_coupons',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    value: {
      type: DataTypes.NUMERIC(15,2),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(20),
      allowNull:false
    },
    type: {
      type: DataTypes.STRING,
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

export default DiscountCoupon;
