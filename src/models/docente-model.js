const mongoose = require("mongoose");
const Schema  = mongoose.Schema;
import { MongooseAutoIncrementID } from 'mongoose-auto-increment-reworked';

const options = {
  field: 'id', 
  incrementBy: 1, 
  startAt: 12,
  reset: 'resetCount',
  unique: true
};

const Docente = new Schema({
    nombres: String,
    apellidos: String,
    codigo: String,
    documento: String,
    fechaIngreso: String,
    fechaNacimiento: String,
    tipoSangre: String,
    direccion: String,
    barrio: String,
    celular: String,
    correo: { type: String, default: 'No registrado'}
})

const plugin = new MongooseAutoIncrementID(Docente, 'Docente', options);
plugin.applyPlugin()

module.exports = mongoose.model('Docente', Docente)
