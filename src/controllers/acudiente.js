const express = require('express');
const router = express.Router();
const Acudiente = require("../models/acudiente-model.js");

//Obtener Acudientes
router.get("/", async(req, res) => {
  const Acudientes = await Acudiente.find();
  res.json(Acudientes)
})

//Obtener Acudiente Con Alumnos Asociados
// router.post("/docente", async(req, res) => {
//   const cursoDocente = await Curso.aggregate([

//      { $lookup: { from: "alumnos", localField: "idDocente", foreignField: "id", as: "curso_docente"} },
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

//Crear Acudiente
router.post("/", async(req, res) => {
  const nuevoAcudiente = new Acudiente(req.body);
  nuevoAcudiente.save();
  res.json(nuevoAcudiente)
})
 
//Obtener Acudiente por ID
router.get('/:id', async (req, res) => {
  const Acudientes = await Acudiente.find({id: req.params.id})
  res.json(Acudientes)
});

router.post('/documento/:id', async (req, res) => {
  const Acudientes = await Acudiente.find({documento: req.params.id})
  res.json(Acudientes)
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