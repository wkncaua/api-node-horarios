import mongoose from "mongoose";

const horariosSchema = new mongoose.Schema( {
    id: {type: mongoose.Schema.Types.ObjectId},
    local: {type: String, required: true},
    horas: {type: String, required: true}
}, { versionKey: false });

const horarios = mongoose.model('horarios', horariosSchema);

export default horarios;