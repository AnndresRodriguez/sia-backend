const mongoose = require("mongoose");
const Schema  = mongoose.Schema;
import { MongooseAutoIncrementID } from 'mongoose-auto-increment-reworked';

const options = {
  field: 'id', 
  incrementBy: 1, 
  startAt: 11,
  reset: 'resetCount',
  unique: true
};

const Materia = new Schema({
    idDocente: Number,
    idPeriodo: String,
    nombre: String,
    horas: Number,
    notaFinal: Number
})

const plugin = new MongooseAutoIncrementID(Materia, 'Materia', options);
plugin.applyPlugin()

module.exports = mongoose.model('Materia', Materia);