const mongoose = require("mongoose");
const Schema  = mongoose.Schema;
import { MongooseAutoIncrementID } from 'mongoose-auto-increment-reworked';

const options = {
  field: 'id', 
  incrementBy: 1, 
  startAt: 69,
  reset: 'resetCount',
  unique: true
};

const Acudiente = new Schema({
    nombres: String,
    apellidos: String,
    documento: String,
    parentezco: String,
    direccion: String,
    barrio: String,
    celular: String,
    celularTrabajo: {type: String, default: 'No Registrado'},
    celularOpcional: String, 
    correo: { type: String, default: 'No registrado'}, 
})

const plugin = new MongooseAutoIncrementID(Acudiente, 'Acudiente', options);
plugin.applyPlugin();

module.exports = mongoose.model('Acudiente', Acudiente)