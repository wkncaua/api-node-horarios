import mongoose from 'mongoose';

const timesSchema = new mongoose.Schema ({
    id: {type:mongoose.Schema.Types.ObjectId},
    nome: {type: String},
    
})
