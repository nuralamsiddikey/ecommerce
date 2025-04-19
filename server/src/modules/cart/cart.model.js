import database from '../../db/dbConnect.js';
import {
  CustomerUser,
  Product,
} from '../../models/index.js';
const { sequelize, DataTypes } = database;

export const Cart = sequelize.define(
  'cart',
  {
    cart_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: CustomerUser,
        key: 'customer_id',
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: 'product_id',
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
  },
  {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

CustomerUser.hasMany(Cart, {
  foreignKey: 'customer_id',
  as: 'carts',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Cart.belongsTo(CustomerUser, {
  foreignKey: 'customer_id',
  as: 'customer',
});

Product.hasMany(Cart, {
  foreignKey: 'product_id',
  as: 'carts',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Cart.belongsTo(Product, {
  foreignKey: 'product_id',
  as: 'product',
});
