import express from "express";
import conectaNaBase from "./config/dbConnect.js";

const conexao = await conectaNaBase();

conexao.on("error", (erro)  => {
    console.log("Erro de conexão!", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
})

const app = express(); 
app.use(express.json());

const horarios = [];

app.get("/horarios", (req, res) => {
    res.status(200).json(horarios);
});

function buscaHorarios (id) {
    return horarios.findIndex(horario => {
        return horario.id === Number(id)
    })
}

app.get("/horarios/:id", (req, res) => {
    const index = buscaHorarios(req.params.id);
    res.status(200).json(horarios[index]);
})

app.post("/horarios", (req, res) => {
    horarios.push(req.body);
    res.status(201).send("Horário adicionado!");
})

app.put("/horarios/:id", (req, res) => {
    const index = buscaHorarios(req.params.id);
    horarios[index] = req.body;
    res.status(200).send("Horário atualizado!");
})

app.delete("/horarios/:id", (req, res) => {
    const index = buscaHorarios(req.params.id);
    horarios.splice(index, 1);
    res.status(200).send("Horário deletado!");
})

export default app;