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
  const curso = await Curso.findById(req.params.id)
  res.json(curso)
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

router.post("/addMany", (req, res)=> {

  Curso.insertMany([
    {
  "id": 1,
  "idDocente": 1,
  "nombre": "11-A",
  "alumnosInscritos": 3
},
{
  "id": 2,
  "idDocente": 1,
  "nombre": "11-B",
  "alumnosInscritos": 3
},
{
  "id": 3,
  "idDocente": 2,
  "nombre": "10-A",
  "alumnosInscritos": 3
},
{
  "id": 4,
  "idDocente": 2,
  "nombre": "10-B",
  "alumnosInscritos": 3
},
{
  "id": 5,
  "idDocente": 3,
  "nombre": "9-A",
  "alumnosInscritos": 3
},
{
  "id": 6,
  "idDocente": 3,
  "nombre": "9-B",
  "alumnosInscritos": 3
},
{
  "id": 7,
  "idDocente": 4,
  "nombre": "8-A",
  "alumnosInscritos": 3
},
{
  "id": 8,
  "idDocente": 4,
  "nombre": "8-B",
  "alumnosInscritos": 3
},
{
  "id": 9,
  "idDocente": 5,
  "nombre": "7-A",
  "alumnosInscritos": 3
},
{
  "id": 10,
  "idDocente": 5,
  "nombre": "7-B",
  "alumnosInscritos": 3
},
{
  "id": 11,
  "idDocente": 6,
  "nombre": "6-A",
  "alumnosInscritos": 3
},
{
  "id": 12,
  "idDocente": 6,
  "nombre": "6-B",
  "alumnosInscritos": 3
},
{
  "id": 13,
  "idDocente": 7,
  "nombre": "5-A",
  "alumnosInscritos": 3
},
{
  "id": 14,
  "idDocente": 7,
  "nombre": "5-B",
  "alumnosInscritos": 3
},
{
  "id": 15,
  "idDocente": 8,
  "nombre": "4-A",
  "alumnosInscritos": 3
},
{
  "id": 16,
  "idDocente": 8,
  "nombre": "4-B",
  "alumnosInscritos": 3
},
{
  "id": 17,
  "idDocente": 9,
  "nombre": "3-A",
  "alumnosInscritos": 3
},
{
  "id": 18,
  "idDocente": 9,
  "nombre": "3-B",
  "alumnosInscritos": 3
},
{
  "id": 19,
  "idDocente": 10,
  "nombre": "2-A",
  "alumnosInscritos": 3
},
{
  "id": 20,
  "idDocente": 10,
  "nombre": "2-B",
  "alumnosInscritos": 3
},
{
  "id": 21,
  "idDocente": 10,
  "nombre": "1-A",
  "alumnosInscritos": 3
},
{
  "id": 22,
  "idDocente": 10,
  "nombre": "1-B",
  "alumnosInscritos": 3
},
{
  "id": 23,
  "idDocente": 10,
  "nombre": "Preescolar",
  "alumnosInscritos": 3
},

    ]);
  res.json({
    cursoAdded: true
  })


})
module.exports = router