// kullanıcının tarayıcısındaki tokenı alarak kimlik doğrulaması ve kullanıcı bilgileri döndürme
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"; // kütüphane
import User from "@/models/User";
import connectDB from "@/lib/mongodb";

const JWT_SECRET = process.env.JWT_SECRET; // .env içinde tanımlı

export async function GET(request) {
  await connectDB();

  // tarayıcıdan gelen isteklerdeki token cookieden alır
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Token bulunamadı" }, { status: 401 });
  }

  // token çözümlemek için verify fonksiyonu kullanılır
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // login sırasında token içinde userId olarak koyduğumuz için burada decoded.userId olarak alıyoruz
    const user = await User.findById(decoded.userId).select("-password"); // şifre hariç tüm bilgiler

    if (!user) {
      return NextResponse.json({ error: "Kullanıcı bulunamadı" }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ error: "Geçersiz token" }, { status: 401 });
  }
}
