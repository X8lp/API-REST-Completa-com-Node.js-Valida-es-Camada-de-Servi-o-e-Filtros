
# 📌 API REST - Gerenciamento de Tarefas

Uma API RESTful desenvolvida com Node.js e Express para o gerenciamento de tarefas. Possui validação de dados com Joi, organização em camadas (Controller, Service, Middleware), filtros por query e path parameters, e logs de ações.

---

## 🚀 Funcionalidades

- Criar, listar, atualizar e excluir tarefas.
- Filtrar tarefas por status (concluídas ou não).
- Marcar uma tarefa como concluída.
- Validação de dados com Joi.
- Logs de ações importantes.
- Simulação de banco de dados com um array em memória.

---

## 📁 Estrutura de Pastas

```
api-tarefas/
├── src/
│   ├── controllers/         # Lógica para requisições HTTP
│   ├── routes/              # Definição de rotas da API
│   ├── services/            # Regras de negócio
│   ├── middlewares/         # Validações e interceptadores
│   ├── utils/               # Funções utilitárias como logs
│   ├── database/            # FakeDB com array em memória
│   └── app.js               # Arquivo principal da aplicação
├── package.json
```

---

## 🧰 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [UUID](https://www.npmjs.com/package/uuid)
- [Joi](https://joi.dev/)
- [Morgan (opcional)](https://www.npmjs.com/package/morgan)

---

## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/api-tarefas.git
cd api-tarefas
```

2. Instale as dependências:

```bash
npm install
```

3. Execute a aplicação:

```bash
node src/app.js
```

---

## 🧪 Endpoints da API

### 🔹 Criar Tarefa

**POST** `/tarefas`

```json
{
  "titulo": "Estudar API",
  "descricao": "Praticar Node.js com Express",
  "concluida": false
}
```

---

### 🔹 Listar Tarefas

**GET** `/tarefas`  
**GET** `/tarefas?concluida=true`

---

### 🔹 Buscar Tarefa por ID

**GET** `/tarefas/:id`

---

### 🔹 Atualizar Tarefa

**PUT** `/tarefas/:id`

```json
{
  "titulo": "Novo título",
  "descricao": "Nova descrição",
  "concluida": false
}
```

---

### 🔹 Marcar como Concluída

**PATCH** `/tarefas/:id/concluir`

---

### 🔹 Deletar Tarefa

**DELETE** `/tarefas/:id`

---

## ⚠️ Validações

- `titulo`: obrigatório, mínimo de 3 caracteres.
- `descricao`: obrigatório.
- `concluida`: obrigatório (booleano).

---

## 📝 Observações

- A base de dados é um array em memória. Ao reiniciar o servidor, os dados serão perdidos.
- Ideal para fins educacionais ou protótipos.

---

## 📄 Licença

MIT - sinta-se livre para usar e modificar este projeto.
