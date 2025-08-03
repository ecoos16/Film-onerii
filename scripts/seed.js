// scripts/seed.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
dotenv.config(); // .env.local dosyasını okuyacak

import films from '../app/data/films.js';
import Film from '../models/Film.js';
import User from '../models/User.js';
import users from '../app/data/users.js';

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
        await User.deleteMany({});
        console.log('🗑️ Eski veriler silindi.');

        // Yeni verileri ekle
        await Film.insertMany(films);

        const hashedUsers = await Promise.all(
            users.map(async (user) => ({
                ...user,
                password: await bcrypt.hash(user.password, 10),
            }))
        );

        await User.insertMany(hashedUsers);

        console.log('🎉 Yeni filmler başarıyla eklendi.');

        process.exit();
    } catch (err) {
        console.error('❌ Seed sırasında hata:', err);
        process.exit(1);
    }
}

seedDatabase();