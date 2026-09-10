import jogadores from "../model/JogadoresModel.js";
import times from "../model/TimesModel.js";
import sorteios from "../model/SorteiosModel.js";

class SorteioController {

    static async listarTodos(req, res) {
    try {

        const listaSorteios = await sorteios
            .find({})
            .populate("timeA")
            .populate("timeB");

        res.status(200).json(listaSorteios);

    } catch (error) {

        res.status(500).json({
            message: "Falha ao listar sorteios",
            error: error.message
        });

    }
}

static async excluir(req, res) {

    try {

        const id = req.params.id;

        const sorteioExcluido = await sorteios.findByIdAndDelete(id);

        if (!sorteioExcluido) {
            return res.status(404).json({
                message: "Sorteio não encontrado"
            });
        }

        res.status(200).json({
            message: "Sorteio excluído com sucesso"
        });

    } catch (error) {

        res.status(500).json({
            message: "Falha ao excluir sorteio",
            error: error.message
        });

    }
}

    static async sortear(req, res) {

        try {

            // Busca todos os jogadores
            const listaJogadores = await jogadores.find({});

            // Verifica quantidade mínima de jogadores
            if (listaJogadores.length < 10) {
                return res.status(400).json({
                    message: "É necessário ter pelo menos 10 jogadores cadastrados."
                });
            }

            // Busca todos os times
            const listaTimes = await times.find({});

            // Precisamos de exatamente 2 times
            if (listaTimes.length < 2) {
                return res.status(400).json({
                    message: "É necessário ter pelo menos 2 times criados."
                });
            }

            // Pegamos apenas os dois primeiros times
            const timeA = listaTimes[0];
            const timeB = listaTimes[1];

            // Separamos os goleiros
            const goleiros = listaJogadores.filter(
                jogador => jogador.goleiro === true
            );

            // Jogadores que não são goleiros
            const jogadoresLinha = listaJogadores.filter(
                jogador => jogador.goleiro !== true
            );

            // Embaralha uma lista
            const embaralhar = (lista) => {
                return lista.sort(() => Math.random() - 0.5);
            };

            embaralhar(goleiros);
            embaralhar(jogadoresLinha);

            // Arrays que irão receber os jogadores
            const jogadoresTimeA = [];
            const jogadoresTimeB = [];

            /*
             * Se houver pelo menos 2 goleiros,
             * colocamos um em cada time.
             */
            if (goleiros.length >= 2) {

                jogadoresTimeA.push(goleiros[0]);
                jogadoresTimeB.push(goleiros[1]);

            } else if (goleiros.length === 1) {

                /*
                 * Caso exista apenas um goleiro,
                 * ele vai para um dos times.
                 */
                jogadoresTimeA.push(goleiros[0]);
            }

            // Distribui os jogadores de linha
            jogadoresLinha.forEach((jogador, index) => {

                if (jogadoresTimeA.length <= jogadoresTimeB.length) {
                    jogadoresTimeA.push(jogador);
                } else {
                    jogadoresTimeB.push(jogador);
                }

            });

            // Atualiza os jogadores dos dois times
            timeA.jogadores = jogadoresTimeA.map(
                jogador => jogador._id
            );

            timeB.jogadores = jogadoresTimeB.map(
                jogador => jogador._id
            );

            await timeA.save();
            await timeB.save();

            const novoSorteio = await sorteios.create({
                timeA: timeA._id,
                timeB: timeB._id
            });

            // Busca novamente com os dados dos jogadores
            const resultadoTimeA = await times
                .findById(timeA._id)
                .populate("jogadores");

            const resultadoTimeB = await times
                .findById(timeB._id)
                .populate("jogadores");

            res.status(200).json({
                message: "Sorteio realizado com sucesso!",
                times: {
                    timeA: resultadoTimeA,
                    timeB: resultadoTimeB
                }
            });

        } catch (error) {

            res.status(500).json({
                message: "Falha ao realizar sorteio",
                error: error.message
            });

        }
    }
}

export default SorteioController;