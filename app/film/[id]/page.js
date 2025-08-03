// routing, props, MongoDB'den gerçek filmi çekme
import connectToDB from "@/lib/mongodb";
import Film from "@/models/Film";
import FilmDetail from "./FilmDetail";

function serializeFilm(filmDoc) {
    if (!filmDoc) return null;
    return {
        ...filmDoc,
        _id: filmDoc._id.toString(),
        id: filmDoc._id.toString(), // favoriler vs uyum için
        createdAt: filmDoc.createdAt ? filmDoc.createdAt.toISOString() : null,
    };
}

export default async function FilmDetailPage({ params }) {
    const { id } = params;

    try {
        await connectToDB();
        const filmDoc = await Film.findById(id).lean();
        if (!filmDoc) {
            return <p>Film bulunamadı!</p>;
        }

        const film = serializeFilm(filmDoc);
        return <FilmDetail film={film} />;
    } catch (err) {
        console.error("Film detay hatası:", err);
        return <p>Bir şeyler ters gitti.</p>;
    }
}
