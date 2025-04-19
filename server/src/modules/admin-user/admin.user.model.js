import db from '../../db/dbConnect.js';
const { sequelize, DataTypes } = db;

export const AdminUser = sequelize.define(
  'admin_user',
  {
    admin_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    full_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },

    phone: {
      type: DataTypes.CHAR(11),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    is_block: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    photo: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
  },
  {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
      {
        unique: true,
        name: 'uniq_indx_email',
        fields: ['email'],
      },
      {
        unique: true,
        name: 'uniq_indx_phone',
        fields: ['phone'],
      },
    ],
  }
);
