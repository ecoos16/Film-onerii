// scripts/seed.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); // .env.local dosyasını okuyacak

import films from '../app/data/films.js';
import Film from '../models/Film.js';

const MONGODB_URI = process.env.MONGODB_URI;

async function seedDatabase() {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ MongoDB bağlantısı başarılı.');

        // Var olan tüm verileri sil (isteğe bağlı)
        await Film.deleteMany({});
        console.log('🗑️ Eski veriler silindi.');

        // Yeni verileri ekle
        await Film.insertMany(films);
        console.log('🎉 Yeni filmler başarıyla eklendi.');

        process.exit();
    } catch (err) {
        console.error('❌ Seed sırasında hata:', err);
        process.exit(1);
    }
}

seedDatabase();
