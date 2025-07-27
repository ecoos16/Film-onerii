//seçili filmin detaylı özelliklerini gösterir
"use client"
import React, { useState, useEffect } from "react";
import { useFavorites } from "@/app/context/FavoritesContext";

export default function FilmDetail({ film }) {
    const { addToFavorites, removeFromFavorite, isFavorite } = useFavorites();
    const [bitişZamani, setBitişZamani] = useState("");

    useEffect(() => {
        const saat = new Date();
        const bitiş = new Date(saat.getTime() + film.süre * 60000);
        setBitişZamani(bitiş.toLocaleTimeString());
    }, [film.süre]);

    const toggleFavorite = () => {
        if (isFavorite(film._id.toString())) {
            removeFromFavorite(film._id.toString());
        } else {
            addToFavorites(film);
        }
    };

    return (
        <div style={{ maxWidth: "auto", marginLeft: "2rem", marginTop: "1rem", padding: "1rem" }}>
            <h1 className="text-3xl font-bold mb-4 text-left">{film.title}</h1>
            <img
                src={film.poster}
                alt={film.title}
                style={{ width: 150, borderRadius: 6, marginBottom: 20 }}
            />
            <div className="text-left space-y-2">
                <p>
                    <strong>Filmin Konusu: </strong>{film.Konu}
                </p>
                <p>
                    <strong>Başrol Oyuncuları: </strong>{film.oyuncular}
                </p>
                <p>
                    <strong>Yönetmen:</strong> {film.yönetmen}
                </p>
                <p>
                    <strong>IMDb:</strong> {film.imdb}
                </p>
                <p>
                    <strong>Tür:</strong> {film.tür}
                </p>
                <p>Filmin süresi: {film.süre} dakika</p>
                {bitişZamani && (
                    <p>Şu an başlarsanız, film {bitişZamani} 'de biter.</p>
                )}
            </div>

            {/* Butonu ortalamak için burayı sarmaladım */}
            <div className="flex justify-center mt-4">
                <button
                    onClick={toggleFavorite}
                    className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                    {isFavorite(film._id.toString()) ? "Favorilerden Çıkar" : "Favorilere Ekle"}
                </button>
            </div>
        </div>
    )
}
