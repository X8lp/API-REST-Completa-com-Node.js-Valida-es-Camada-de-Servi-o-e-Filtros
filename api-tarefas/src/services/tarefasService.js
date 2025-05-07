const { v4: uuidv4 } = require('uuid');
const { tarefas } = require('../database/fakeDb');

function listarTarefas(filtroConcluida) {
  if (filtroConcluida !== undefined) {
    const concluida = filtroConcluida === 'true';
    return tarefas.filter(t => t.concluida === concluida);
  }
  return tarefas;
}

function buscarPorId(id) {
  return tarefas.find(t => t.id === id);
}

function adicionarTarefa({ titulo, descricao, concluida }) {
  const novaTarefa = {
    id: uuidv4(),
    titulo,
    descricao,
    concluida
  };
  tarefas.push(novaTarefa);
  return novaTarefa;
}

function atualizarTarefa(id, { titulo, descricao, concluida }) {
  const tarefa = buscarPorId(id);
  if (!tarefa) return null;

  tarefa.titulo = titulo;
  tarefa.descricao = descricao;
  tarefa.concluida = concluida;
  return tarefa;
}

function deletarTarefa(id) {
  const index = tarefas.findIndex(t => t.id === id);
  if (index === -1) return false;

  tarefas.splice(index, 1);
  return true;
}

function concluirTarefa(id) {
  const tarefa = buscarPorId(id);
  if (!tarefa) return null;

  tarefa.concluida = true;
  return tarefa;
}

module.exports = {
  listarTarefas,
  buscarPorId,
  adicionarTarefa,
  atualizarTarefa,
  deletarTarefa,
  concluirTarefa
};
