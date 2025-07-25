"use client";

import React, { createContext, useState, useContext } from "react";

// Context ,global state
const FavoritesContext = createContext();

// Provider 
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

    // favoride mi?
    const isFavorite = (id) => {
        return favorites.some((m) => m.id === id);
    };


    return (
        <FavoritesContext.Provider
            value={{ favorites, addToFavorites, removeFromFavorite, isFavorite }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

// Custom Hook
export function useFavorites() {
    return useContext(FavoritesContext);
}
