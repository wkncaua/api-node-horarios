import times from "../model/TimesModel.js";

class TimesController {

    static async listarTodos(req, res) {
        try {
            const colecaoTimes = await times.find({}).populate("jogadores");

            res.status(200).json(colecaoTimes);

        } catch (error) {
            res.status(500).json({
                message: "Falha ao listar times",
                error: error.message
            });
        }
    }

    static async cadastrar(req, res) {
        try {
            const novoTime = await times.create(req.body);

            res.status(201).json({
                message: "Time criado com sucesso",
                time: novoTime
            });

        } catch (error) {
            res.status(500).json({
                message: "Falha ao cadastrar time",
                error: error.message
            });
        }
    }

    static async buscarPorId(req, res) {
        try {
            const id = req.params.id;

            const timeEncontrado = await times
                .findById(id)
                .populate("jogadores");

            if (!timeEncontrado) {
                return res.status(404).json({
                    message: "Time não encontrado"
                });
            }

            res.status(200).json(timeEncontrado);

        } catch (error) {
            res.status(500).json({
                message: "Falha ao buscar time",
                error: error.message
            });
        }
    }

    static async excluir(req, res) {
        try {
            const id = req.params.id;

            const timeExcluido = await times.findByIdAndDelete(id);

            if (!timeExcluido) {
                return res.status(404).json({
                    message: "Time não encontrado"
                });
            }

            res.status(200).json({
                message: "Time excluído com sucesso"
            });

        } catch (error) {
            res.status(500).json({
                message: "Falha ao excluir time",
                error: error.message
            });
        }
    }
}

export default TimesController;