const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Text = sequelize.define('Text', {
  id_text: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false, // Tidak boleh kosong, setiap teks harus ada pemiliknya
    references: {
      model: 'users', // Merujuk pada nama tabel di database (biasanya jamak)
      key: 'id_user'  // Sesuaikan dengan Primary Key di model User kamu
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE' // Jika user dihapus, teks miliknya ikut terhapus
  },
  text_origin: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'texts',
  timestamps: true,
  createdAt: 'create_at',
  updatedAt: false
});

module.exports = Text;