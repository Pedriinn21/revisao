const mongoose = require('mongoose')
const alunoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    turma: { type: String, required: true, enum: ['A', 'B', 'C', 'D', 'E'] },
    notas: { type: [Number], required: true, validate: {
      validator: function(arr) {
        return arr.length === 4 && arr.every(nota => nota >= 0 && nota <= 10);
      },
      message: props => `${props.value} não é um array válido de notas`
    }},
    media: { type: Number, required: true }
  });
  