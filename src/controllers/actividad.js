const express = require('express');
const router = express.Router();
const Actividad = require("../models/actividad-model.js");

//Obtener todas las Actividades

router.get("/", async(req, res) => {
  const actividades = await Actividad.find();
  res.json(actividades)
})

router.get("/actividadMateria/:id", async (req, res) => {
  const actividadesMateria =  await Actividad.aggregate([

     { $lookup: { from: "materias", localField: "idMateria", foreignField: "id", as: "actividades_materia"} },
     { $unwind:"$actividades_materia" },
     {   
       $project:{
            nombreMateria : "$actividades_materia.nombre",
            tema: 1,
            descripcion: 1,
            indicaciones: 1,
            fecha: 1,
            nota: 1,
        } 
      }
   ])

  res.json(actividadesMateria)
})

//Crear Actividad
router.post("/", async(req, res) => {
  const nuevaActividad = new Actividad(req.body);
  nuevaActividad.save();
  res.json(nuevaActividad)
})

//Obtener Activiadad
router.get('/:id', async (req, res) => {
  const actividad = await Actividad.findById(req.params.id)
  res.json(actividad)
});

//Editar Actividad
router.put("/:id", async (req, res) => {
  await Actividad.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    updated:true
  });
});

// //Eliminar Actividad
router.delete("/:id", async (req, res) => {
  await Actividad.findByIdAndRemove(req.params.id);
  res.json({
    removed:true
  });
});


module.exports = router