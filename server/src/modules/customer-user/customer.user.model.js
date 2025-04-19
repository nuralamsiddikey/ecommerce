import database from '../../db/dbConnect.js';
const { sequelize, DataTypes } = database;


export const CustomerUser = sequelize.define(
  'customer_user',
  {
    customer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    
    full_name: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    phone: {
      type: DataTypes.CHAR(11),
      allowNull: true,
      defaultValue: null,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    photo: {
      type: DataTypes.STRING(),
      defaultValue: '',
    },
    address_line: {
      type: DataTypes.STRING,
      defaultValue: '', 
    },
    status: {
      type: DataTypes.ENUM,
      values: ['active', 'block'],
      defaultValue: 'active',
    },
  },
  {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    indexes: [
      {
        fields: ['phone'],
        name: 'uniq_indx_phone',
        unique: true,
      },
      
    ],
  }
);
