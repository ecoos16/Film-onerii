"use client";

import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import Link from "next/link";
//arrow function,Context API
export default function FilmCard({ film }) {
    const { addToFavorites, removeFromFavorite, isFavorite } = useFavorites();

    const toggleFavorite = () => {
        if (isFavorite(film.id)) {
            removeFromFavorite(film.id);
        } else {
            addToFavorites(film);
        }
    };
    //conditional rendering ,routing
    return (
        <div className="border p-4 rounded shadow-md w-60 text-center">
            <Link href={`/film/${film.id}`}>
                <h2 className="text-lg font-bold mb-2">{film.title}</h2>
                <img src={film.poster} alt={film.title} className="mb-2 w-full h-80 object-cover" />
            </Link>
            {film.imdb && (
                <p className="text-sm text-gray-400 mb-1">
                    IMDB: <span className="font-semibold">{film.imdb}</span>
                </p>
            )}
            {film.tür && (
                <p className="text-sm text-gray-400 mb-1"> Tür: <span className="font-semibold ">{film.tür}</span></p>
            )}
            <button
                onClick={toggleFavorite}
                className="bg-gray-900 text-white px-4 py-2 rounded mt-2 hover:bg-gray-700"
            >
                {isFavorite(film.id) ? "Favorilerden Çıkar" : "Favorilere Ekle"}
            </button>
        </div>
    );
}
