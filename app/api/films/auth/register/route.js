import connectToDB from "@/lib/mongodb";
import User from '@/models/User'
import bcrypt from 'bcryptjs'

export async function POST(req) {
    try {
        await connectToDB();

        const { email, password, role } = await req.json();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return new Response(JSON.stringify({ error: "Email zaten kayıtlı" }), { status: 400 });
        }

        // Şifre hashle
        const hashedPassword = await bcrypt.hash(password, 10);

        // Yeni kullanıcı oluştur
        const newUser = new User({
            email,                 // buradaki 'emmail' yazım hatası düzeltildi
            password: hashedPassword,
            role: role || 'user'
        });

        // Kullanıcıyı db'ye kaydet
        await newUser.save();

        // Başarılı response dön
        return new Response(JSON.stringify({ success: true, message: "Kullanıcı kaydedildi" }), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
