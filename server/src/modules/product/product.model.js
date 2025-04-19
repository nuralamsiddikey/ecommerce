import database from '../../db/dbConnect.js';
import {
  
  Category,
 
} from '../../models/index.js';
const { sequelize, DataTypes } = database;

export const Product = sequelize.define(
  'product',
  {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    stock_qty: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },  
    is_published: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: 'category_id',
      },
    },
  },
  {
    indexes: [
      {
        name: 'indx_category_id',
        fields: ['category_id'],
      },
      {
        name: 'indx_title',
        fields: ['title'],
      },
    ],
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

Category.hasMany(Product, {
  foreignKey: 'category_id',
  as: 'products',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  as: 'category',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
