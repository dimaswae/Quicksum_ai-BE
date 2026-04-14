# Quicksum AI - Node Backend

## Setup

1. Masuk ke folder `node-backend`
2. Buat file `.env` dan isi dengan variabel berikut:
```
PORT=3000
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=3306
JWT_SECRET=
```

3. Jalankan Docker:
4. 
## API Endpoints

| Method | Endpoint | Keterangan |
|--------|----------|------------|
| POST | /api/auth/register | Registrasi user |
| POST | /api/auth/login | Login user |
| GET | /api/models | List model AI |
| POST | /api/summarize | Buat ringkasan |
| GET | /api/history | Riwayat ringkasan |
