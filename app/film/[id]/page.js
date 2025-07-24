import films from "@/app/data/films";
import FilmDetail from "./FilmDetail";

export default function FilmDetailPage({ params }) {
    const { id } = params;
    const film = films.find(f => f.id === Number(id));

    if (!film) return <p>Film bulunamadı!</p>;

    return <FilmDetail film={film} />;
}
