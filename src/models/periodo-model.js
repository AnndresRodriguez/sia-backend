const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const Periodo = new Schema({
    idCurso: Number,
    nombre: String,
})

module.exports = mongoose.model('Periodo', Periodo)