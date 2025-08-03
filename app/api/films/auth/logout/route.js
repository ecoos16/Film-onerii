import { NextResponse } from "next/server";

export async function POST() {
    const response = NextResponse.redirect(new URL("/", process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"));
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
