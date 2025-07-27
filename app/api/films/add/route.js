// film ekleme kısmının backend kısmı 
import dbConnect from '@/lib/mongodb';
import Film from '@/models/Film';

export async function POST(req) {
    try {
        await dbConnect();
        //frontendden gelen fil verisi alınır
        const data = await req.json();
        //yeni film oluşturulur db eklenir
        const newFilm = new Film(data);
        await newFilm.save();

        return new Response(JSON.stringify({ success: true, message: 'Film eklendi.' }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
