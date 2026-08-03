import mongoose from "mongoose";

const horariosSchema = new Schema( {
    id: {type: Schema.Types.ObjectId},
    local: {type: String, required: true},
    horas: {type: String, required: true}
});

const horarios = mongoose.model('horarios', horariosSchema);

export default horarios;