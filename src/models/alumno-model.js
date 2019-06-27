const mongoose = require("mongoose");
const Schema  = mongoose.Schema;
import { MongooseAutoIncrementID } from 'mongoose-auto-increment-reworked';

const options = {
  field: 'id', 
  incrementBy: 1, 
  startAt: 71,
  reset: 'resetCount',
  unique: false
};

const Alumno= new Schema({
    id: Number,
    nombres: String,
    apellidos: String,
    codigo: String,
    documento: String,
    idCurso: String,
    tipoSangre: String,
    genero: String,
    fechaIngreso: String,
    fechaNacimiento: String,
    direccion: String,
    barrio: String,
    celular: String,
    correo: { type: String, default: 'No registrado'},
    idAcudiente: Number 
})

const plugin = new MongooseAutoIncrementID(Alumno, 'Alumno', options);
plugin.applyPlugin()

module.exports = mongoose.model('Alumno', Alumno)