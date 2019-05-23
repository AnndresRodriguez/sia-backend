const express = require('express');
const router = express.Router();
const Curso = require("../models/curso-model.js");

//Obtener todos los Cursos
router.get("/", async(req, res) => {
  const Cursos = await Curso.find();
  res.json(Cursos)
})

//Obtener Curso Con Docentes Asociados
router.post("/docente", async(req, res) => {
  const cursoDocente = await Curso.aggregate([

     { $lookup: { from: "docentes", localField: "idDocente", foreignField: "id", as: "curso_docente"} },
     { $unwind:"$curso_docente" }, 
     {   
       $project:{
            alumnosInscritos: 1,
            nombre: 1,
            nombreProfesor : "$curso_docente.nombres",
            apellidoProfesor: "$curso_docente.apellidos"
        } 
      }
   ])

  res.json(cursoDocente);

})

//Crear Curso
router.post("/", async(req, res) => {
  const nuevoCurso = new Curso(req.body);
  nuevoCurso.save();
  res.json(nuevoCurso)
})

//Obtener Curso
router.get('/:id', async (req, res) => {
  const Curso = await Curso.findById(req.params.id)
  res.json(Curso)
});

//Editar Curso
router.put("/:id", async (req, res) => {
  await Curso.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    updated:true
  });
});

// //Eliminar Curso
router.delete("/:id", async (req, res) => {
  await Curso.findByIdAndRemove(req.params.id);
  res.json({
    removed:true
  });
});
module.exports = router