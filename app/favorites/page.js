"use client"

import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import FilmCard from "../components/FilmCard";

export default function FavoritesPage() {
    const { favorites } = useFavorites();

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Favori Filmlerim</h1>
            {favorites.length === 0 ? (
                <p className="text-gray-600">Henüz favori film eklemediniz.</p>
            ) : (
                <div className="flex flex-wrap gap-4">
                    {/* Array maple listele */}
                    {favorites.map((film) => (
                        <FilmCard key={film._id.toString()} film={film} />
                    ))}
                </div>
            )}
        </div>
    )
}
