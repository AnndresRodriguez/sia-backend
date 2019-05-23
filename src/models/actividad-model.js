const mongoose = require("mongoose");
const Schema  = mongoose.Schema;
import { MongooseAutoIncrementID } from 'mongoose-auto-increment-reworked';

const options = {
  field: 'id', 
  incrementBy: 1, 
  startAt: 6,
  reset: 'resetCount',
  unique: true
};

const Actividad = new Schema({
    idMateria: Number,
    tema: String,
    descripcion: Number,
    indicaciones: String,
    observaciones: String,
    nota: Number
})

const plugin = new MongooseAutoIncrementID(Actividad, 'Actividad', options);
plugin.applyPlugin()

module.exports = mongoose.model('Actividad', Actividad)