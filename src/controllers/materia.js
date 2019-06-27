const express = require('express');
const router = express.Router();
const Materia = require("../models/materia-model.js");

//Obtener todos los Cursos
router.get("/", async(req, res) => {
  const materia = await Materia.find();
  res.json(materia)
})


//Obtener Curso Con Docentes Asociados
// router.post("/docente", async(req, res) => {
//   const cursoDocente = await Curso.aggregate([

//      { $lookup: { from: "docentes", localField: "idDocente", foreignField: "id", as: "curso_docente"} },
//      { $unwind:"$curso_docente" }, 
//      {   
//        $project:{
//             alumnosInscritos: 1,
//             nombre: 1,
//             nombreProfesor : "$curso_docente.nombres",
//             apellidoProfesor: "$curso_docente.apellidos"
//         } 
//       }
//    ])

//   res.json(cursoDocente);

// })

//Crear Materia
router.post("/", async(req, res) => {
  const nuevaMateria = new Materia(req.body);
  nuevaMateria.save();
  res.json(nuevaMateria)
})

//Obtener Materia
router.get('/:id', async (req, res) => {
  const materia = await Materia.findById(req.params.id)
  res.json(materia)
});

//Editar Materia
router.put("/:id", async (req, res) => {
  await Materia.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    updated:true
  });
});

//Eliminar Materia
router.delete("/:id", async (req, res) => {
  await Materia.findByIdAndRemove(req.params.id);
  res.json({
    removed:true
  });
});

router.post("/addMany", (req, res)=> {

Materia.insertMany([
{
  "id": 1,
  "idDocente": 1,
  "nombre": "Matematica",
  "horas": 6,
  "notaFinal": 0
},
{
  "id": 2,
  "idDocente": 2,
  "nombre": "Español",
  "horas": 6,
  "notaFinal": 0
},
{
  "id": 3,
  "idDocente": 3,
  "nombre": "Ingles",
  "horas": 4,
  "notaFinal": 0
},
{
  "id": 4,
  "idDocente": 4,
  "nombre": "Sociales",
  "horas": 4,
  "notaFinal": 0
},
{
  "id": 5,
  "idDocente": 5,
  "nombre": "Biologia",
  "horas": 4,
  "notaFinal": 0
},
{
  "id": 6,
  "idDocente": 6,
  "nombre": "Artistica",
  "horas": 2,
  "notaFinal": 0
},
{
  "id": 7,
  "idDocente": 7,
  "nombre": "Informatica",
  "horas": 3,
  "notaFinal": 0
},
{
  "id": 8,
  "idDocente": 8,
  "nombre": "Religión",
  "horas": 2,
  "notaFinal": 0
},
{
  "id": 9,
  "idDocente": 9,
  "nombre": "Ética",
  "horas": 2,
  "notaFinal": 0
},
{
  "id": 10,
  "idDocente": 10,
  "nombre": "Física",
  "horas": 4,
  "notaFinal": 0
},
{
  "id": 11,
  "idDocente": 11,
  "nombre": "Química",
  "horas": 4,
  "notaFinal": 0
}

    ]);
  res.json({
    cursoAdded: true
  })


})
module.exports = router