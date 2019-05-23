const express = require('express');
const router = express.Router();
const Alumno = require("../models/alumno-model.js");

router.get("/", async(req, res) => {
  const alumnos = await Alumno.find();
  res.json(alumnos)
})

router.get('/all/:id', async (req, res) => {
  const Alumnos = await Alumno.find({idCurso: req.params.id})
  res.json(Alumnos)
});

router.get('/:id', async (req, res) => {
  const Alumnos = await Alumno.find({id: req.params.id})
  res.json(Alumnos)
});

router.put("/:id", async (req, res) => {

  const alumnoUpdated = await Alumno.findByIdAndUpdate(req.params.id, req.body);
  res.json(alumnoUpdated);
  // Alumno.findAndModify({
  // 	query: { id: req.params.id },
  // 	update:{ $set: { nombres: req.body.nombres,
  // 	                 apellidos: req.body.apellidos, 
  // 	                 documento: req.body.documento, 
  // 	                 direccion: req.body.direccion,
  // 	                 barrio: req.body.barrio,
  // 	                 celular: req.body.celular 
  // 	                  } } 
  // });
  // res.json({
  //   updated:true
  // });
});

module.exports = router

