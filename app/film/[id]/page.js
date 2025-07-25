import FilmDetail from "./FilmDetail";
import films from "@/app/data/films";
//routing,props
export default function FilmDetailPage({ params }) {
    const { id } = params;
    const film = films.find(f => f.id === Number(id));

    if (!film) return <p>Film bulunamadı!</p>;

    return <FilmDetail film={film} />;
}
