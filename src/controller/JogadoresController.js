import jogadores from '../model/jogadoresModel.js'

class JogadoresController {

    static async cadastrar (req,res) {
        const novoJogador = await jogadores.create(req.body);
        res.status(201).json({ message : "Jogador criado com sucesso", jogadores : novoJogador});
    }

    static async listarTodos (req,res) {
        const listaJogadores = await jogadores.find({});
        res.status(200).send(listaJogadores);
    }

    static async buscarPorId (req,res) {
        const id = req.params.id;
        const jogadorEncontrado = await jogador.findById(id);
        res.status(200).send(jogadorEncontrado);
    }

    static async atualizar (req,res) {
        const id = req.params.id;
        const jogadorAtualizado = await jogador.findByIdAndUpdate(id);
        res.status(200).json(message : "Jogador atualizado com sucesso!", jogador : jogadorAtualizado);
    }

    static async excluir (req,res) {
        const id = req.params.id;
        await jogador.findByIdAndDelete(id);
    }
}

export default JogadoresController;