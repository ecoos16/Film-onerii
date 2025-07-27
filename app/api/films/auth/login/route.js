import dbConnect from '@/lib/mongodb'
import User from '@/models/User'
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"
import { cookies } from 'next/headers'

export async function POST(req) {
    try {
        await dbConnect();
        const { email, password } = await req.json();

        //Kullanıcı bul
        const user = await User.findOne({ email });
        if (!user) {
            return new Response(JSON.stringify({ error: "Kullanıcı bulunamadı" }), { status: 401 })
        }
        //Şifre kontrol
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return new Response(JSON.stringify({ error: "Şifre yanlış" }), { status: 400 })
        }
        //Şifre doğruysa JWT token oluşur 1 saat geçerli
        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )
        //Cookie olarak set et 
        const cookieStore = cookies();
        cookieStore.set({
            name: "token",
            value: token,
            httpOnly: true,
            path: "/",
            maxAge: 3600,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",

        });
        return new Response(JSON.stringify({ success: true, message: "Giriş başarılı" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });

    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

}
