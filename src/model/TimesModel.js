import mongoose from "mongoose";

const timesSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    jogadores: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "jogadores"
    }]
}, { versionKey: false });

const times = mongoose.model("times", timesSchema);

export default times;