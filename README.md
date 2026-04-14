## AI Backend Setup

1. Masuk ke folder `ai-backend`
2. Buat file `.env` dan isi dengan variabel berikut:

```env
OPENROUTER_API_KEY=isi_dengan_api_key_dari_openrouter.ai
BASE_URL=https://openrouter.ai/api/v1/chat/completions
```

3. Install requirements:

```bash
pip install -r requirements.txt
```

4. Jalankan program:

```bash
python run.py
```

5. Akses dokumentasi API di:

```
http://localhost:8000/docs
```



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
