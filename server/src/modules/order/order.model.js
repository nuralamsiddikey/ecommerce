import database from '../../db/dbConnect.js';
import { CustomerUser, Product } from '../../models/index.js';
const { sequelize, DataTypes } = database;

export const Order = sequelize.define(
  'order',
  {
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    },
    order_no: {
      type: DataTypes.STRING(70),
      allowNull: false,
    },
    order_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },

    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address_line: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    division: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    police_station: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM('processing', 'completed', 'cancelled'),
      defaultValue: 'processing',
    },
  },
  {
    indexes: [
      {
        name: 'uniq_indx_order_no',
        unique: true,
        fields: ['order_no'],
      },
    ],
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

CustomerUser.hasMany(Order, {
  foreignKey: 'customer_id',
  as: 'orders',
});

Order.belongsTo(CustomerUser, {
  foreignKey: 'customer_id',
  as: 'customers',
});
