const express = require('express');
const router = express.Router();
const Acudiente = require("../models/acudiente-model.js");

//Obtener Acudientes
router.get("/", async(req, res) => {
  const Acudientes = await Acudiente.find();
  res.json(Acudientes)
})

//Crear Acudiente
router.post("/", async(req, res) => {
  const nuevoAcudiente = new Acudiente(req.body);
  nuevoAcudiente.save();
  res.json(nuevoAcudiente)
})

//Obtener Acudiente por ID
router.get('/:id', async (req, res) => {
  const Acudiente = await Acudiente.findById(req.params.id)
  res.json(Acudiente)
});

//Editar Acudiente
router.put("/:id", async (req, res) => {
  await Acudiente.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    updated:true
  });
});

// //Eliminar Acudiente
router.delete("/:id", async (req, res) => {
  await Acudiente.findByIdAndRemove(req.params.id);
  res.json({
    removed:true
  });
});

  

module.exports = router