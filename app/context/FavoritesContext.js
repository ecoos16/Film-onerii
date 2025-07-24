"use client";

import React, { createContext, useState, useContext } from "react";

// 1. Context oluşturuluyor
const FavoritesContext = createContext();

// 2. Provider bileşeni
export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    // Favoriye ekleme
    const addToFavorites = (movie) => {
        if (!favorites.some((m) => m.id === movie.id)) {
            setFavorites((prev) => [...prev, movie]);
        }
    };

    // Favoriden çıkarma
    const removeFromFavorite = (id) => {
        setFavorites((prev) => prev.filter((m) => m.id !== id));
    };

    // Bir film favorilerde mi?
    const isFavorite = (id) => {
        return favorites.some((m) => m.id === id);
    };

    // Provider döndürülüyor (DİKKAT! return artık fonksiyonun içinde!)
    return (
        <FavoritesContext.Provider
            value={{ favorites, addToFavorites, removeFromFavorite, isFavorite }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

// 3. Custom Hook
export function useFavorites() {
    return useContext(FavoritesContext);
}
