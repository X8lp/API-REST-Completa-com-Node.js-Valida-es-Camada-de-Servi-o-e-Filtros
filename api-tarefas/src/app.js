const express = require('express');
const morgan = require('morgan'); // opcional, para log de requisições
const tarefasRoutes = require('./routes/tarefasRoutes');

const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(morgan('dev')); // use apenas se instalou morgan

// Rotas
app.use('/tarefas', tarefasRoutes);

// Rota raiz
app.get('/', (req, res) => {
  res.send('API de Tarefas - Node.js + Express');
});

// Tratamento de rota não encontrada
app.use((req, res) => {
  res.status(404).json({ mensagem: 'Rota não encontrada.' });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
