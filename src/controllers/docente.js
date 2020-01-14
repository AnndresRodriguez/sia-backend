const express = require('express');
const router = express.Router();
const Docente = require("../models/docente-model.js");

//Obtener todos los Docentes
router.get("/", async(req, res) => {
  const docentes = await Docente.find();
  res.json(docentes)
})

//Crear Docente
router.post("/", async(req, res) => {
  const nuevoDocente = new Docente(req.body);
  nuevoDocente.save();
  res.json(nuevoDocente)
})

//Obtener Docente
router.get('/:id', async (req, res) => {
  const docentes = await Docente.findById(req.params.id)
  res.json(docentes)
});

//Editar Docente
router.put("/:id", async (req, res) => {
  await Docente.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    updated:true
  });
});

// //Eliminar Docente
router.delete("/:id", async (req, res) => {
  await Docente.findByIdAndRemove(req.params.id);
  res.json({
    removed:true
  });
});

// router.post("/addMany", (req, res) => {
//   Docente.insertMany([

// {
//   "id": 1,
//   "nombres": "Maria Olga",
//   "apellidos": "Llanos Gonzalez",
//   "codigo": "02005",
//   "documento": "094120",
//   "fechaIngreso": "17/01/2014",
//   "fechaNacimiento": "3/11/1967",
//   "tipoSangre": "A+",
//   "direccion": "Calle 1 av 15 #1-15",
//   "barrio": "Gaitan",
//   "celular": "3102584177",
//   "correo": "maolga@gmail.com"
// },
// {
//   "id": 2,
//   "nombres": "Esther Georgina",
//   "apellidos": "Merida Fuentes",
//   "codigo": "02006",
//   "documento": "094121",
//   "fechaIngreso": "17/01/2014",
//   "fechaNacimiento": "6/12/1972",
//   "tipoSangre": "O+",
//   "direccion": "Calle 3 av 3 #3-24",
//   "barrio": "El Salado",
//   "celular": "3103458787",
//   "correo": "esthergmd@outlook.com"
// },
// {
//   "id": 3,
//   "nombres": "Rafael Eduardo",
//   "apellidos": "Cardenas Quintero",
//   "codigo": "02005",
//   "documento": "094122",
//   "fechaIngreso": "17/01/2000",
//   "fechaNacimiento": "1/09/1970",
//   "tipoSangre": "O+",
//   "direccion": "Calle 1 av 1 #1-34",
//   "barrio": "Barrio Latino",
//   "celular": "3119468143",
//   "correo": "rafaeleduardocq@gmail.com"
// },
// {
//   "id": 4,
//   "nombres": "Pablo Emilio",
//   "apellidos": "Carrillo Rodriguez",
//   "codigo": "02006",
//   "documento": "094123",
//   "fechaIngreso": "17/01/1996",
//   "fechaNacimiento": "1/11/1965",
//   "tipoSangre": "AB+",
//   "direccion": "Calle 13 av 12 #12-36",
//   "barrio": "El Contento",
//   "celular": "3119468143",
//   "correo": "pablo1972@yahoo.com"
// },
// {
//   "id": 5,
//   "nombres": "Rosalia Marcela",
//   "apellidos": "Parada Montero",
//   "codigo": "02007",
//   "documento": "094124",
//   "fechaIngreso": "17/01/2007",
//   "fechaNacimiento": "16/07/1974",
//   "tipoSangre": "AB-",
//   "direccion": "Calle 5 av 4 #5-46",
//   "barrio": "Barrio Aeropuerto",
//   "celular": "3119468143",
//   "correo": "rosaliaparada@gmail.com"
// },
// {
//   "id": 6,
//     "nombres": "Edna Sulay",
//   "apellidos": "Caceres Leal",
//   "codigo": "02008",
//   "documento": "094125",
//   "fechaIngreso": "17/01/2017",
//   "fechaNacimiento": "02/01/1972",
//   "tipoSangre": "O-",
//   "direccion": "Calle 13 av 17 #13-14",
//   "barrio": "Barrio el Llano",
//   "celular": "3119468143",
//   "correo": "ednascl@gmail.com"
// },
// {
//   "id": 7,
//     "nombres": "Marcos Gerardo",
//   "apellidos": "Rueda Gelvez",
//   "codigo": "02009",
//   "documento": "094126",
//   "fechaIngreso": "17/01/2001",
//   "fechaNacimiento": "02/01/1975",
//   "tipoSangre": "AB+",
//   "direccion": "Calle 1 av 11 #1-45",
//   "barrio": "Barrio Quinta Oriental",
//   "celular": "3119467654",
//   "correo": "marcosruge@gmail.com"
// },
// {
//   "id": 8,
//   "nombres": "Alba Cecilia",
//   "apellidos": "Rosas Navarro",
//   "codigo": "02010",
//   "documento": "094127",
//   "fechaIngreso": "17/01/2007",
//   "fechaNacimiento": "02/01/1964",
//   "tipoSangre": "B+",
//   "direccion": "Calle 2 av 13 #2-76",
//   "barrio": "Ciudad Jardin",
//   "celular": "3119467654",
//   "correo": "albacrosas@yahoo.com"
// },
// {
//   "id": 9,
//     "nombres": "Luz Marina",
//   "apellidos": "Chacon Caballero",
//   "codigo": "02011",
//   "documento": "094128",
//   "fechaIngreso": "17/01/2005",
//   "fechaNacimiento": "02/01/1969",
//   "tipoSangre": "B+",
//   "direccion": "Calle 1 av 12 #12-36",
//   "barrio": "El Llano",
//   "celular": "3119465656",
//   "correo": "luzmarina1969@outlook.com"
// },
// {
//   "id": 10,
//     "nombres": "Jairo Guillermo",
//   "apellidos": "Gelvez Agudelo",
//   "codigo": "02011",
//   "documento": "094128",
//   "fechaIngreso": "17/01/2010",
//   "fechaNacimiento": "02/01/1969",
//   "tipoSangre": "A-",
//   "direccion": "Calle 11 av 12 #11-76",
//   "barrio": "El Llano",
//   "celular": "3119465656",
//   "correo": "jairoGuillermog@outlook.com"
// },
// {
//   "id": 11,
//     "nombres": "javier Guillermo",
//   "apellidos": "Gelvez Agudelo",
//   "codigo": "02011",
//   "documento": "094128",
//   "fechaIngreso": "17/01/2010",
//   "fechaNacimiento": "02/01/1969",
//   "tipoSangre": "A-",
//   "direccion": "Calle 11 av 12 #11-76",
//   "barrio": "El Llano",
//   "celular": "3119465656",
//   "correo": "jairoGuillermog@outlook.com"
// }

//     ])

//   res.json({
//     docentesAdded:true
//   })
// })
module.exports = router
