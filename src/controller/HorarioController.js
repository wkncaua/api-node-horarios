import horarios from '../model/HorariosModel.js';
import HorarioModel from '../model/HorariosModel.js';

class HorarioController {
    
    static async listarTodos(req, res) {
        const colecaoHorarios = await horarios.find({});
        res.status(200).json(colecaoHorarios);
    }

    static async cadastrar(req, res) {
        try {
            const novoHorario = await horarios.create(req.body);
            res.status(201).json({ message : "Horário criado com sucesso", horarios : novoHorario});
        } catch (error) {
            res.status(500).json({message : "Falha ao cadastrar horário", });
        }
        res.status(201).json(novoHorario);
    }

    static async buscarPorId(req,res) {
        const id = req.params.id;
        const horarioEncontrado = await horarios.findById(id);
        res.status(200).json(horarioEncontrado);
    }

    static async atualizar(req, res) {
        const id = req.params.id;
        const horarioAtualizado = await horarios.findByIdAndUpdate(id, req.body);
        res.status(200).json({message: "Horário atualizado com sucesso", horarios:horarioAtualizado});
    
    }

    static async excluir(req,res) {
        const id = req.params.id;
        await horarios.findByIdAndDelete(id);
        res.status(200).json({message : "Horário delatado com sucesso!"})
    }
}

export default HorarioController;