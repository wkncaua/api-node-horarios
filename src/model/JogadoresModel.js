import mongoose from "mongoose";

const jogadoresSchema = new mongoose.Schema( {
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String},
    goleiro: {type: Boolean},
}, { versionKey: false});

const jogardores = mongoose.model('jogadores', jogadoresSchema);

export default jogadores;