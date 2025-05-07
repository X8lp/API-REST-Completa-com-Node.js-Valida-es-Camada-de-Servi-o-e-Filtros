const tarefaService = require('../services/tarefasService');
const logger = require('../utils/logger');

function listar(req, res) {
  const { concluida } = req.query;
  const resultado = tarefaService.listarTarefas(concluida);
  res.json(resultado);
}

function buscarPorId(req, res) {
  const { id } = req.params;
  const tarefa = tarefaService.buscarPorId(id);
  if (!tarefa) {
    return res.status(404).json({ mensagem: 'Tarefa não encontrada.' });
  }
  res.json(tarefa);
}

function criar(req, res) {
  const novaTarefa = tarefaService.adicionarTarefa(req.body);
  logger.log('Tarefa criada com sucesso.');
  res.status(201).json(novaTarefa);
}

function atualizar(req, res) {
  const { id } = req.params;
  const tarefaAtualizada = tarefaService.atualizarTarefa(id, req.body);
  if (!tarefaAtualizada) {
    return res.status(404).json({ mensagem: 'Tarefa não encontrada.' });
  }
  res.json(tarefaAtualizada);
}

function deletar(req, res) {
  const { id } = req.params;
  const sucesso = tarefaService.deletarTarefa(id);
  if (!sucesso) {
    return res.status(404).json({ mensagem: 'Tarefa não encontrada.' });
  }
  logger.log('Tarefa deletada.');
  res.status(204).send();
}

function concluir(req, res) {
  const { id } = req.params;
  const tarefa = tarefaService.concluirTarefa(id);
  if (!tarefa) {
    return res.status(404).json({ mensagem: 'Tarefa não encontrada.' });
  }
  res.json({ mensagem: 'Tarefa concluída com sucesso.', tarefa });
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  deletar,
  concluir
};
