import films from "@/app/data/films";

//API Route fonk.
export async function GET() {
    return new Response(JSON.stringify(films), {
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function POST(req) {
    const newFilm = await req.json();
    newFilm.id = Date.now();
    films.push(newFilm);
    return new Response(JSON.stringify({ success: true, film: newFilm }), {
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function DELETE(req) {
    const { id } = await req.json();
    films = films.filter((film) => film.id !== id);
    return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' },
    });
}