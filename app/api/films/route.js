//Film listeleme film ekleme

import connectToDB from "@/lib/mongodb.js";
import Film from "@/models/Film";

export async function GET() {
    try {
        await connectToDB();
        const films = await Film.find({});
        return new Response(JSON.stringify(films), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

export async function POST(req) {
    try {
        await connectToDB();
        const data = await req.json();
        const newFilm = new Film(data);
        await newFilm.save();

        return new Response(JSON.stringify({ success: true, film: newFilm }), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
export async function DELETE(req) {
    try {
        await connectToDB();

        const url = new URL(req.url);
        const id = url.searchParams.get("id");

        if (!id) {
            return new Response(JSON.stringify({ error: "ID parametresi gerekli" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        await Film.findByIdAndDelete(id);

        return new Response(JSON.stringify({ success: true }), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

