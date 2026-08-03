import mongoose, {mongo} from "mongoose";

function conectaNaBase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
}

export default conectaNaBase;