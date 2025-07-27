import { NextResponse } from "next/server";

export async function POST() {
    const response = NextResponse.json({ message: "Çıkış başarılı" });

    //post isteği gönderilince token cookiesi silinir,kullanıcı oturumdan çıkar
    response.cookies.set({
        name: "token",
        value: "",
        httpOnly: true,
        path: "/",
        maxAge: 0
    });

    return response;
}
