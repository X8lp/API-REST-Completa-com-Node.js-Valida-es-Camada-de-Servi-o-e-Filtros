const Joi = require('joi');

// Esquema de validação com Joi
const tarefaSchema = Joi.object({
  titulo: Joi.string().min(3).required(),
  descricao: Joi.string().required(),
  concluida: Joi.boolean().required()
});

function validateTarefa(req, res, next) {
  const { error } = tarefaSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const mensagens = error.details.map(d => d.message);
    return res.status(400).json({
      status: 'erro',
      mensagens
    });
  }

  next(); // Dados válidos, prossegue
}

module.exports = validateTarefa;
