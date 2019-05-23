const express = require('express');
const router = express.Router();
const Docente = require("../models/docente-model.js");

//Obtener todos los Docentes
router.get("/", async(req, res) => {
  const docentes = await Docente.find();
  res.json(docentes)
})

//Crear Docente
router.post("/", async(req, res) => {
  const nuevoDocente = new Docente(req.body);
  nuevoDocente.save();
  res.json(nuevoDocente)
})

//Obtener Docente
router.get('/:id', async (req, res) => {
  const Docente = await Docente.findById(req.params.id)
  res.json(Docente)
});

//Editar Docente
router.put("/:id", async (req, res) => {
  await Docente.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    updated:true
  });
});

// //Eliminar Docente
router.delete("/:id", async (req, res) => {
  await Docente.findByIdAndRemove(req.params.id);
  res.json({
    removed:true
  });
});
module.exports = router
