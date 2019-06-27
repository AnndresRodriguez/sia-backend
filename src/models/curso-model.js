const mongoose = require("mongoose");
const Schema  = mongoose.Schema;
import { MongooseAutoIncrementID } from 'mongoose-auto-increment-reworked';

const options = {
  field: 'id', 
  incrementBy: 1, 
  startAt: 24,
  reset: 'resetCount',
  unique: true
};

const Curso = new Schema({
	id: Number,
    idDocente: Number,
    nombre: String,
    alumnosInscritos: Number,
})

const plugin = new MongooseAutoIncrementID(Curso, 'Curso', options);
plugin.applyPlugin();

module.exports = mongoose.model('Curso', Curso)