"use client"
import { useEffect, useState } from 'react'
import FilmCard from './components/FilmCard'
export default function Home() {
  const [films, setFilms] = useState([])

  //API'den Veri Çekme (fetch)
  useEffect(() => {
    const fetchFilms = async () => {
      const res = await fetch('/api/films')
      const data = await res.json()
      setFilms(data)
    }

    fetchFilms()
  }, [])

  return (
    <div style={{ marginLeft: "80px", display: 'flex', gap: '1rem', flexWrap: "wrap" }}>
      {/* listeleme */}
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  )
}
