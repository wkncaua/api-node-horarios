import mongoose from "mongoose";

function conectaNaBase() {
    mongoose.connect("mongodb+srv://warkencaua04_db_user:6Rj29IuHu0lbRJpr@cluster0.x0qcni5.mongodb.net/horarios");
}

export default conectaNaBase;