const express = require('express');
const router = express.Router();

const tarefasController = require('../controllers/tarefasController');
const validateTarefa = require('../middlewares/validateTarefa');

// Listar todas ou com filtro ?concluida=true/false
router.get('/', tarefasController.listar);

// Buscar tarefa por ID
router.get('/:id', tarefasController.buscarPorId);

// Criar nova tarefa com validação
router.post('/', validateTarefa, tarefasController.criar);

// Atualizar todos os dados da tarefa com validação
router.put('/:id', validateTarefa, tarefasController.atualizar);

// Marcar como concluída
router.patch('/:id/concluir', tarefasController.concluir);

// Deletar tarefa
router.delete('/:id', tarefasController.deletar);

module.exports = router;
