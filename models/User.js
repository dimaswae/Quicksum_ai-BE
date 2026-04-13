const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id_user: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Mencegah email yang sama didaftarkan 2x
    validate: {
      isEmail: true // Validasi otomatis agar formatnya benar-benar email
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'users',
  timestamps: true, // Mengaktifkan fitur waktu otomatis
  createdAt: 'create_at', // Menyesuaikan nama kolom dengan ERD kamu
  updatedAt: false 
});

module.exports = User;