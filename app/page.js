"use client"
import Image from "next/image";
import FilmCard from './components/FilmCard'
import films from "./data/films";


export default function Home() {
  return (
    <div style={{ marginLeft: "80px", display: 'flex', gap: '1rem', flexWrap: "wrap" }}>
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}
