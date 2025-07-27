//token kontrolü ,kullanıcıya admin erişimi 

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/User";
import connectDB from "@/lib/mongodb";

const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(request) {
  await connectDB();

  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Giriş yapılmamış" }, { status: 401 });
  }
  //jwt doğrulama
  //tokendaki id ile MongoDB de kullanıcı arar
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return NextResponse.json({ error: "Kullanıcı bulunamadı" }, { status: 404 });
    }

    if (user.role !== "admin") {
      return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 403 });
    }

    return NextResponse.json({ message: "Admin erişim onaylandı" });
  } catch (error) {
    return NextResponse.json({ error: "Geçersiz token" }, { status: 401 });
  }
}
