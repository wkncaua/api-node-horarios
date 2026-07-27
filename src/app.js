import express from "express";

const app = express();
app.use(express.json());

const horarios = [];

app.get("/horarios", (req, res) => {
    res.status(200).json(horarios);
});

function buscaHorarios (id) {
    return findIndex(horarios => {
        horarios.id === Number(id)})
}

app.get("/horaris/id", (req, res) => {
    const index = buscaHorarios(req.params.id);
    res.status(200).send(index);
})

app.post("/horarios", (req, res) => {
    horarios.push(req.body);
    res.status(201).send("Horário adicionado!");
})

export default app;