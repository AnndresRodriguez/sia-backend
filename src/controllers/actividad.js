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

// router.post("/addMany", (req, res)=> {

//   Actividad.insertMany([
//   {
//   "id": 1,
//   "idMateria": 1,
//   "tema": "Ecuaciones Con Valor Absoluto",
//   "descripcion": "Desarrollar destrezas en ecuaciones de valor Absoluto",
//   "indicaciones": "Realizar ejercicios la pagina 123 hasta la 127",
//   "observaciones": "",
//   "fecha": "03-04-2019",
//   "nota": 4,
// },
// {
//   "id": 2,
//   "idMateria": 1,
//   "tema": "Inecuaciones Con Valor Lineal",
//   "descripcion": "Entender el concepto de Valor Lineal",
//   "indicaciones": "Realizar ejercicios la pagina 167 hasta la 169",
//   "observaciones": "",
//   "fecha": "10-04-2019",
//   "nota": 5,
// },
// {
//   "id": 3,
//   "idMateria": 1,
//   "tema": "Inecuaciones Con Valor Cuadrático",
//   "descripcion": "Reforzar el concepto de Valor Cuadrático",
//   "indicaciones": "Realizar ejercicios la pagina 170 hasta la 167",
//   "observaciones": "",
//   "fecha": "17-04-2019",
//   "nota": 5,
// },
// {
//   "id": 4,
//   "idMateria": 1,
//   "tema": "Examen Trimestral",
//   "descripcion": "Evaluar los conocimientos Adquiridos en el trimestre",
//   "indicaciones": "Ejercicios de los temas vistos hasta la fecha",
//   "observaciones": "",
//   "fecha": "24-04-2019",
//   "nota": 3,
// },
// {
//   "id": 5,
//   "idMateria": 2,
//   "tema": "Problemas ortográficos en el verbo haber",
//   "descripcion": "Entender claramente diferencias del verbo haber",
//   "indicaciones": "Realizar un listdo de oraciones con los distintos tipos",
//   "observaciones": "",
//   "fecha": "03-04-2019",
//   "nota": 4,
// },
// {
//   "id": 6,
//   "idMateria": 2,
//   "tema": "Comunicación y nueva alfabetización",
//   "descripcion": "Profundizar en el tema de la Comunicación y su historia",
//   "indicaciones": "Realizar una ensayo Sobre la Historia de la Comunicación",
//   "observaciones": "",
//   "fecha": "10-04-2019",
//   "nota": 5,
// },
// {
//   "id": 7,
//   "idMateria": 2,
//   "tema": "Las funciones gramaticales",
//   "descripcion": "Conocer el uso de las funciones gramaticales dentro de la literatura",
//   "indicaciones": "Realizar un mapa Conceptual con los conceptos de funciones gramaticales",
//   "observaciones": "",
//   "fecha": "17-04-2019",
//   "nota": 5,
// },
// {
//   "id": 8,
//   "idMateria": 2,
//   "tema": "Examen Trimestral",
//   "descripcion": "Evaluar los conocimientos Adquiridos en el trimestre",
//   "indicaciones": "Seleccion Muliple Unica Respuesta",
//   "observaciones": "",
//   "fecha": "24-04-2019",
//   "nota": 4,
// },


//     ]);
//   res.json({
//     ActividadAdded: true
//   })


// })
module.exports = router