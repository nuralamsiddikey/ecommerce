import database from '../../db/dbConnect.js';
const { sequelize, DataTypes } = database;

export const Blog = sequelize.define(
  'Blog',
  {
    blog_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
    image:{
      type: DataTypes.STRING,
      defaultValue: '',
    },
    user_id: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);
