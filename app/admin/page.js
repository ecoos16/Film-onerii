"use client";

import React, { useState, useEffect } from "react";

// Admin Paneli
export default function AdminPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState("");
    const [films, setFilms] = useState([]); // API'den film verileri
    const [newFilm, setNewFilm] = useState({
        title: "",
        süre: 0,
        tür: "",
        yönetmen: "",
        imdb: "",
        oyuncular: "",
        Konu: "",
        poster: "",
    });

    // sayfa açıldığında API'den filmleri çekmek için useEffect
    useEffect(() => {
        const fetchFilms = async () => {
            const res = await fetch("/api/films");
            if (res.ok) {
                const data = await res.json();
                setFilms(data);
            }
        };
        fetchFilms();
    }, []);

    // admin giriş kontrolü
    const handleLogin = () => {
        if (password === "123456") {
            setIsLoggedIn(true);
        } else {
            alert("Yanlış parola");
        }
    };

    // film silme - id'yi query parametre olarak gönderiyoruz
    const handleDelete = async (id) => {
        const res = await fetch(`/api/films?id=${id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            const updated = await fetch("/api/films");
            if (updated.ok) {
                const data = await updated.json();
                setFilms(data);
            }
        }
    };

    // form alanlarını güncelleme
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewFilm({ ...newFilm, [name]: value });
    };

    // yeni film ekleme
    const handleAddFilm = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/films", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newFilm),
        });

        if (res.ok) {
            setNewFilm({
                title: "",
                süre: 0,
                tür: "",
                yönetmen: "",
                imdb: "",
                oyuncular: "",
                Konu: "",
                poster: "",
            });

            const updated = await fetch("/api/films");
            if (updated.ok) {
                const data = await updated.json();
                setFilms(data);
            }
        }
    };

    // giriş yapılmadıysa parola ekranı
    if (!isLoggedIn) {
        return (
            <div style={{ maxWidth: 400, margin: "2rem auto", textAlign: "center" }}>
                <h2>Admin Girişi</h2>
                <input
                    type="password"
                    placeholder="Parola"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2 w-full mb-2"
                />
                <button
                    onClick={handleLogin}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Giriş Yap
                </button>
            </div>
        );
    }

    // admin paneli (film listeleme + film ekleme)
    return (
        <div style={{ maxWidth: 800, margin: "2rem auto" }}>
            <h1 className="text-3xl mb-4">Film Yönetimi</h1>

            {/* Yeni Film Ekleme Formu */}
            <form onSubmit={handleAddFilm} className="mb-8 border p-4 rounded shadow">
                <h2 className="text-xl mb-2">Yeni Film Ekle</h2>
                <input
                    name="title"
                    placeholder="Başlık"
                    value={newFilm.title}
                    onChange={handleInputChange}
                    className="border p-2 w-full mb-2"
                    required
                />
                <input
                    name="süre"
                    type="number"
                    placeholder="Süre (dakika)"
                    value={newFilm.süre}
                    onChange={handleInputChange}
                    className="border p-2 w-full mb-2"
                    required
                />
                <input
                    name="tür"
                    placeholder="Tür"
                    value={newFilm.tür}
                    onChange={handleInputChange}
                    className="border p-2 w-full mb-2"
                    required
                />
                <input
                    name="yönetmen"
                    placeholder="Yönetmen"
                    value={newFilm.yönetmen}
                    onChange={handleInputChange}
                    className="border p-2 w-full mb-2"
                    required
                />
                <input
                    name="imdb"
                    placeholder="IMDb"
                    value={newFilm.imdb}
                    onChange={handleInputChange}
                    className="border p-2 w-full mb-2"
                />
                <input
                    name="oyuncular"
                    placeholder="Başrol Oyuncuları"
                    value={newFilm.oyuncular}
                    onChange={handleInputChange}
                    className="border p-2 w-full mb-2"
                />
                <textarea
                    name="Konu"
                    placeholder="Konu"
                    value={newFilm.Konu}
                    onChange={handleInputChange}
                    className="border p-2 w-full mb-2"
                />
                <input
                    name="poster"
                    placeholder="Poster URL"
                    value={newFilm.poster}
                    onChange={handleInputChange}
                    className="border p-2 w-full mb-2"
                />
                <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded"
                >
                    Film Ekle
                </button>
            </form>

            {/* Film Listeleme ve Silme */}
            <h2 className="text-2xl mb-4">Mevcut Filmler</h2>
            <ul>
                {films.map((film) => (
                    <li
                        key={film._id} // MongoDB'den gelen ID
                        className="border p-2 mb-2 rounded flex justify-between items-center"
                    >
                        <div>
                            <strong>{film.title}</strong> - {film.tür} - {film.süre} dk
                        </div>
                        <button
                            onClick={() => handleDelete(film._id)}
                            className="bg-red-600 text-white px-3 py-1 rounded"
                        >
                            Sil
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
