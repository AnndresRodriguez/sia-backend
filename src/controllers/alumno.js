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

router.post("/", async(req, res) => {
  const nuevoAlumno = new Alumno(req.body);
  nuevoAlumno.save();
  res.json(nuevoAlumno)
})

router.put("/:id", async (req, res) => {

  const alumnoUpdated = await Alumno.findByIdAndUpdate(req.params.id, req.body);
  res.json(alumnoUpdated);
});

router.delete("/:id", async (req, res) => {
  await Alumno.findByIdAndRemove(req.params.id);
  res.json({
    removed:true
  });
});

module.exports = router

