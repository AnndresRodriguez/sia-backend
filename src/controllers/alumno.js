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

//Obtener  Alumno con Acudiente Asociados
router.get("/acudienteAlumno/:id", async(req, res) => {

  console.log(typeof(parseInt(req.params.id)));
  console.log(parseInt(req.params.id));
  const acudienteAlumno = await Alumno.aggregate([

     { $lookup: { from: "acudientes", localField: "idAcudiente", foreignField: "id", as: "alumno_acudiente"} },
     { $unwind:"$alumno_acudiente" },
     {
       $match:{
            $and:[{"id" : parseInt(req.params.id)}]
        }
     }, 
     {   
       $project:{
            nombreAcudiente : "$alumno_acudiente.nombres",
            apellidoAcudiente: "$alumno_acudiente.apellidos",
            documentoAcudiente: "$alumno_acudiente.documento",
            parentezcoAcudiente: "$alumno_acudiente.parentezco",
            celularAcudiente: "$alumno_acudiente.celularTrabajo",
            barrioAcudiente: "$alumno_acudiente.barrio"
        } 
      }
   ])

  res.json(acudienteAlumno);

})


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

