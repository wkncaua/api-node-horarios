import mongoose from "mongoose";

const sorteiosSchema = new mongoose.Schema({
    data: {
        type: Date,
        default: Date.now
    },

    timeA: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "times",
        required: true
    },

    timeB: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "times",
        required: true
    }

}, { versionKey: false });

const sorteios = mongoose.model("sorteios", sorteiosSchema);

export default sorteios;