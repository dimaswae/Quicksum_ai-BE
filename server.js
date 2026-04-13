// server.js
require('dotenv').config(); 

const express = require('express');
const cors = require('cors');

const db = require('./models/Index'); 

const app = express();


// 2. MIDDLEWARE 
app.use(cors());
app.use(express.json()); // Berfungsi menerjemahkan request body berformat JSON
app.use(express.urlencoded({ extended: true }));

// 3. ROUTES
const routes = require('./routes'); 
app.use('/api', routes);

// Route dasar untuk testing apakah server hidup
app.get('/', (req, res) => {
  res.json({ message: "Welcome to AI Summary Backend API!" });
});

// 4. GLOBAL ERROR HANDLER
// Menangkap semua error agar server tidak crash
const errorMiddleware = require('./middlewares/errorMiddleware');
app.use(errorMiddleware);

// 5. DATABASE SYNC & START SERVER
db.sequelize.authenticate()
  .then(() => {
    console.log('✅ Koneksi ke database MySQL berhasil!');
    // Sinkronisasi model ke database
    return db.sequelize.sync({ alter: true }); 
  })
  .then(async () => {
    console.log('✅ Semua tabel berhasil disinkronisasi!');
    
// --- TAMBAHAN BARU: OTOMATIS MENGISI DATA MODEL AI ---
    const modelCount = await db.AI_Model.count();
    if (modelCount === 0) {
      await db.AI_Model.bulkCreate([
        { model_name: 'GPT-3.5 Turbo', version: '1.0', description: 'Model standar yang cepat dan efisien.' },
        { model_name: 'Gemini Pro', version: '1.5', description: 'Model buatan Google dengan pemahaman konteks tinggi.' },
        { model_name: 'HuggingFace Bart', version: 'large', description: 'Model open-source khusus untuk summarization.' }
      ]);
      console.log('✅ Data Default Model AI berhasil ditambahkan!');
    }


    // Jalankan server HANYA setelah database siap
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server berjalan di port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Gagal terhubung atau sinkronisasi database:', err);
  });