import mongoose from "mongoose";

const filmSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    poster: String,
    imdb: String,
    tür: String,
    oyuncular: String,
    yönetmen: String,
    Konu: String,
    süre: Number,
    createdAt: { type: Date, default: Date.now },
});

//film modelini oluşturuyor
const Film = mongoose.models.Film || mongoose.model("Film", filmSchema);

export default Film;
