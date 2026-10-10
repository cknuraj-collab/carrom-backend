const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// সরাসরি অন্য লিংক থেকে APK ডাউনলোড করার ব্যবস্থা
app.get('/download/CarromAutoplay.apk', (req, res) => {
  res.redirect('এখানে আপনার APK ফাইলের গুগল ড্রাইভ বা সরাসরি ডাউনলোড লিংক দিন');
});

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.get('/', (req, res) => {
  res.send('Carrom Autoplay API is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
