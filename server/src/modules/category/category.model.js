import database from '../../db/dbConnect.js';
const { sequelize, DataTypes } = database;


export const Category = sequelize.define(
  'category',
  {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    category_name: {
      type: DataTypes.STRING(70),
      allowNull: false,
    },
    category_slug: {
      type: DataTypes.STRING(70),
      defaultValue: '',
    },
    category_details: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    category_photo: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);
