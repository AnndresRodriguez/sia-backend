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

// router.post("/addMany", (req, res) => {
//   Acudiente.insertMany([

// {
//   "id": 1,
//   "nombres": "Edgar Erasmo",
//   "apellidos": "Carrillo Bastidas",
//   "documento": "1784673",
//   "parentezco": "Padre",
//   "direccion": "Calle 13 av 12",
//   "barrio": "El Contento",
//   "celular": "3102584177",
//   "celularTrabajo": "3144134538",
//   "celularOpcional": "3156783456",
//   "correo": "edgarcarrillo@outlook.com"
// },
// {
//   "id": 2,
//   "nombres": "Clara Lucía",
//   "apellidos": "Bermont Alvarez",
//   "documento": "54671202",
//   "parentezco": "Madre",
//   "direccion": "Calle 14 av 11",
//   "barrio": "san Gerardo",
//   "celularTrabajo": "3144134538",
//   "celularOpcional": "3156783456",
//   "correo": "claralucia1976@gmail.com",
// },
// {
//   "id": 3,
//   "nombres": "Graciela",
//   "apellidos": "Rojas Guerrero",
//   "documento": "941255654",
//   "parentezco": "Madre",
//   "direccion": "Calle 1 av 19",
//   "barrio": "Ceiba 2",
//   "celular": "3164257654",
//   "celularTrabajo": "3116574638",
//   "celularOpcional": "3165673456",
//   "correo": "gracielarojasg@gmail.com"
// },
// {
//   "id": 4,
//   "nombres": "Rocio",
//   "apellidos": "martinez lopez",
//   "documento": "941255645",
//   "parentezco": "Madre",
//   "direccion": "Av 12 av 3",
//   "barrio": "san martin ",
//   "celular": "3164257651",
//   "celularTrabajo": "3116574619",
//   "celularOpcional": "3165673400",
//   "correo": "rociomartinez@gmail.com"
// },
// {
//   "id": 5,
//   "nombres": "sandra",
//   "apellidos": "perez rios",
//   "documento": "9412478645",
//   "parentezco": "Madre",
//   "direccion": "Cll 9 5-56",
//   "barrio": "san mateo",
//   "celular": "3164257652",
//   "celularTrabajo": "3116574639",
//   "celularOpcional": "3165673400",
//   "correo": "sandraperez@gmail.com"
// },
// {
//   "id": 6,
//   "nombres": "Pedro",
//   "apellidos": "lopez sandoval",
//   "documento": "1090445678",
//   "parentezco": "Padre",
//   "direccion": "Av 9 8-80",
//   "barrio": "la libertad",
//   "celular": "3164253344",
//   "celularTrabajo": "3116571123",
//   "celularOpcional": "3165665980",
//   "correo": "pedrolopez@gmail.com"
// },
// {
//   "id": 7,
//   "nombres": "Wilmer",
//   "apellidos": "calderon bautista",
//   "documento": "1091567098",
//   "parentezco": "Padre",
//   "direccion": "Av 6 5-89",
//   "barrio": "san mateo",
//   "celular": "316567876",
//   "celularTrabajo": "3112135678",
//   "celularOpcional": "3157890099",
//   "correo": "wilmercalderon@gmail.com"
// },
// {
//   "id": 8,
//   "nombres": "Esperanza",
//   "apellidos": "fernandez perez",
//   "documento": "1092567876",
//   "parentezco": "Madre",
//   "direccion": "Cll 21 6-09",
//   "barrio": "san martin",
//   "celular": "316567222",
//   "celularTrabajo": "3112135678",
//   "celularOpcional": "3157890912",
//   "correo": "esperanzafernandez@gmail.com"
// },
// {
//   "id": 9,
//   "nombres": "rodrigo",
//   "apellidos": "suarez villamizar",
//   "documento": "60345678",
//   "parentezco": "Padre",
//   "direccion": "Av 11 67-09",
//   "barrio": "san isidro",
//   "celular": "316554678",
//   "celularTrabajo": "3112123598",
//   "celularOpcional": "3157821357",
//   "correo": "rodrigosuarez@gmail.com"
// },
// {
//   "id": 10,
//   "nombres": "Gladys",
//   "apellidos": "zuluaga pablos",
//   "documento": "1090456789",
//   "parentezco": "Madre",
//   "direccion": "Cll 2a 6-90",
//   "barrio": "Motilones",
//   "celular": "316500124",
//   "celularTrabajo": "3112654235",
//   "celularOpcional": "3136780987",
//   "correo": "gladyszuluaga@gmail.com"
// },
// {
//   "id": 11,
//   "nombres": "Angelica",
//   "apellidos": "hernadez ramirez",
//   "documento": "1078904789",
//   "parentezco": "Madre",
//   "direccion": "Av 12 5-90",
//   "barrio": "comuneros",
//   "celular": "316545612",
//   "celularTrabajo": "3112609800",
//   "celularOpcional": "3136712343",
//   "correo": "angelicahernadez@gmail.com"
// },
// {
//   "id": 12,
//   "nombres": "Daniela",
//   "apellidos": "villamizar contreras",
//   "documento": "1094678987",
//   "parentezco": "Madre",
//   "direccion": "Av 5 4-05",
//   "barrio": "colpet",
//   "celular": "3164560712",
//   "celularTrabajo": "3112678900",
//   "celularOpcional": "3136715678",
//   "correo": "danielavillamizar@gmail.com"
// },
// {
//   "id": 13,
//   "nombres": "Maria eugenia",
//   "apellidos": "mesa arteaga",
//   "documento": "1094678987",
//   "parentezco": "Madre",
//   "direccion": "Cll 3 30-02",
//   "barrio": "trigal del norte",
//   "celular": "3164556787",
//   "celularTrabajo": "3112600987",
//   "celularOpcional": "3136234768",
//   "correo": "mariamesa@gmail.com"
// },
// {
//   "id": 14,
//   "nombres": "Josue David",
//   "apellidos": "riviera marquez",
//   "documento": "1094678670",
//   "parentezco": "Padre",
//   "direccion": "Av3 6-26",
//   "barrio": "san eduardo",
//   "celular": "3164553456",
//   "celularTrabajo": "3112600987",
//   "celularOpcional": "3136235674",
//   "correo": "josueriviera@gmail.com"
// },
// {
//   "id": 15,
//   "nombres": "Clara",
//   "apellidos": "vera",
//   "documento": "1094634540",
//   "parentezco": "Madre",
//   "direccion": "Av 8 7-23",
//   "barrio": "ciudad jardin",
//   "celular": "3164345654",
//   "celularTrabajo": "3112689237",
//   "celularOpcional": "3136237680",
//   "correo": "claravera@gmail.com"
// },
// {
//   "id": 16,
//   "nombres": "Sofia",
//   "apellidos": "suarez llanos",
//   "documento": "1094634560",
//   "parentezco": "Madre",
//   "direccion": "Av8 7-12",
//   "barrio": "san martin",
//   "celular": "3164334554",
//   "celularTrabajo": "3112689212",
//   "celularOpcional": "3136237890",
//   "correo": "sofiasuarez@gmail.com"
// },
// {
//   "id": 17,
//   "nombres": "Martha",
//   "apellidos": "flores ",
//   "documento": "1090567890",
//   "parentezco": "Madre",
//   "direccion": "Av5 6-09",
//   "barrio": "motilones",
//   "celular": "3164345676",
//   "celularTrabajo": "3112621212",
//   "celularOpcional": "3136237650",
//   "correo": "marthafloresz@gmail.com"
// },
// {
//   "id": 18,
//   "nombres": "Martin",
//   "apellidos": "cardenas flores ",
//   "documento": "1090534560",
//   "parentezco": "Padre",
//   "direccion": "Av5 7-08",
//   "barrio": "motilones",
//   "celular": "3113345679",
//   "celularTrabajo": "3112667092",
//   "celularOpcional": "3136232387",
//   "correo": "martincardenas@gmail.com"
// },
// {
//   "id": 19,
//   "nombres": "Maira",
//   "apellidos": "puerto rodriguez ",
//   "documento": "1090545678",
//   "parentezco": "Madre",
//   "direccion": "Cll 12 8-90",
//   "barrio": "pescadero",
//   "celular": "3113344561",
//   "celularTrabajo": "3112666543",
//   "celularOpcional": "3136230987",
//   "correo": "mairapuerto@gmail.com"
// },
// {
//   "id": 20,
//   "nombres": "Rosaura",
//   "apellidos": "rodriguez ",
//   "documento": "1090544567",
//   "parentezco": "Madre",
//   "direccion": "Av7 8-09",
//   "barrio": "garcia herreros",
//   "celular": "3113334561",
//   "celularTrabajo": "3112661267",
//   "celularOpcional": "3136233409",
//   "correo": "rosaurarodriguez@gmail.com"
// },
// {
//   "id": 21,
//   "nombres": "Benjamin",
//   "apellidos": "gallardo perez ",
//   "documento": "1090543412",
//   "parentezco": "Padre",
//   "direccion": "Av4 12-09",
//   "barrio": "san luis ",
//   "celular": "3113560961",
//   "celularTrabajo": "3112662377",
//   "celularOpcional": "3136235789",
//   "correo": "benjamingallardo@gmail.com"
// },
// {
//   "id": 22,
//   "nombres": "Luz marina",
//   "apellidos": "bedoya lopez ",
//   "documento": "1090523490",
//   "parentezco": "Madre",
//   "direccion": "Av7 13-30",
//   "barrio":" San jose",
//   "celular": "3113560961",
//   "celularTrabajo": "3112662377",
//   "celularOpcional": "3136235789",
//   "correo": "luzmarinabedoya@gmail.com"
// },
// {
//   "id": 23,
//   "nombres": "Ruben",
//   "apellidos": "buitrago",
//   "documento": "1093498490",
//   "parentezco": "Padre",
//   "direccion": "Av 7 6-90",
//   "barrio": "magdalena ",
//   "celular": "3115698961",
//   "celularTrabajo": "3112667907",
//   "celularOpcional": "3136234509",
//   "correo": "rubenbuitrago@gmail.com"
// },
// {
//   "id": 24,
//   "nombres": "leonel",
//   "apellidos": "fuentes",
//   "documento": "1093492345",
//   "parentezco": "Padre",
//   "direccion": "Av7 8-90",
//   "barrio": "nuevo Horizonte",
//   "celular": "3115600451",
//   "celularTrabajo": "3112664567",
//   "celularOpcional": "3136231290",
//   "correo": "leonelfuentes@gmail.com"
// },
// {
//   "id": 25,
//   "nombres": "carmen",
//   "apellidos": "paez",
//   "documento": "1093567908",
//   "parentezco": "Madre",
//   "direccion": "Cll 8  8-09",
//   "barrio": "manuela beltran",
//   "celular": "3115600451",
//   "celularTrabajo": "3112664567",
//   "celularOpcional": "3136231290",
//   "correo": "carmenpaez@gmail.com"
// },
// {
//   "id": 26,
//   "nombres": "Pedro",
//   "apellidos": "pineda",
//   "documento": "1093564567",
//   "parentezco": "Padre",
//   "direccion": "Av 3 2-56",
//   "barrio": "motilones ",
//   "celular": "3115666781",
//   "celularTrabajo": "3112667897",
//   "celularOpcional": "3136234598",
//   "correo": "pedropineda@gmail.com"
// },
// {
//   "id": 27,
//   "nombres": "miguel",
//   "apellidos": "robles",
//   "documento": "1090445678",
//   "parentezco": "Padre",
//   "direccion": "Av 6 5-36",
//   "barrio": "ciudad jardin ",
//   "celular": "3115666781",
//   "celularTrabajo": "3112667897",
//   "celularOpcional": "3136234598",
//   "correo": "miguelrobles@gmail.com"
// },
// {
//   "id": 28,
//   "nombres": "zaida",
//   "apellidos": "fuentes",
//   "documento": "1090567009",
//   "parentezco": "Madre",
//   "direccion": "Av 9 8-06",
//   "barrio": "prados norte ",
//   "celular": "3115645678",
//   "celularTrabajo": "3112609878",
//   "celularOpcional": "3136223467",
//   "correo": "zaidafuentes@gmail.com"
// },
// {
//   "id": 29,
//   "nombres": "maite",
//   "apellidos": "torres ",
//   "documento": "1090545678",
//   "parentezco": "Madre",
//   "direccion": "Av 7 2-56",
//   "barrio": "antonia santos ",
//   "celular": "3115678909",
//   "celularTrabajo": "3112623456",
//   "celularOpcional": "3136234509",
//   "correo": "maitetorres@gmail.com"
// },
// {
//   "id": 30,
//   "nombres": "Manuel ",
//   "apellidos": "parra ",
//   "documento": "1090523412",
//   "parentezco": "Padre",
//   "direccion": "Av2 4-09",
//   "barrio": "la libertad ",
//   "celular": "3115678905",
//   "celularTrabajo": "3112234996",
//   "celularOpcional": "3136209890",
//   "correo": "manuelparra@gmail.com"
// },
// {
//   "id": 31,
//   "nombres": "Ana ",
//   "apellidos": "rosas perez ",
//   "documento": "1090678912",
//   "parentezco": "Madre",
//   "direccion": "Av 4 3-33",
//   "barrio": "prados del este ",
//   "celular": "3115634533",
//   "celularTrabajo": "3112289877",
//   "celularOpcional": "3136204567",
//   "correo": "anarosas@gmail.com"
// },
// {
//   "id": 32,
//   "nombres": "monica zuleyda ",
//   "apellidos": "alvarez sandoval ",
//   "documento": "1090445678",
//   "parentezco": "Madre",
//   "direccion": "Cll 5 5-33",
//   "barrio": "prados del este ",
//   "celular": "3115645655",
//   "celularTrabajo": "3112267866",
//   "celularOpcional": "3136233360",
//   "correo": "monicaalvarez@gmail.com"
// },
// {
//   "id": 33,
//   "nombres": "carolina ",
//   "apellidos": "granados rios ",
//   "documento": "1009394567",
//   "parentezco": "Madre",
//   "direccion": "Av 4 4-06",
//   "barrio": "prados del norte ",
//   "celular": "3235678909",
//   "celularTrabajo": "3214532233",
//   "celularOpcional": "3136235609",
//   "correo": "carolinagranados@gmail.com"
// },
// {
//   "id": 34,
//   "nombres": "Julio ",
//   "apellidos": "higuera ",
//   "documento": "1009347867",
//   "parentezco": "Padre",
//   "direccion": "Av 6 7-34",
//   "barrio": "ciudad jardin",
//   "celular": "3235677659",
//   "celularTrabajo": "3214532213",
//   "celularOpcional": "3136238765",
//   "correo": "juliohiguera@gmail.com"
// },
// {
//   "id": 35,
//   "nombres": "Diana carolina ",
//   "apellidos": "lopez ",
//   "documento": "1090556789",
//   "parentezco": "Madre",
//   "direccion": "Cll 4 3-53",
//   "barrio": "prados del este ",
//   "celular": "3235645690",
//   "celularTrabajo": "3214523454",
//   "celularOpcional": "3136287690",
//   "correo": "dianalopez@gmail.com"
// },
// {
//   "id": 36,
//   "nombres": "Fredy ",
//   "apellidos": "roa ",
//   "documento": "1090567009",
//   "parentezco": "Padre",
//   "direccion": "Av 3 3-09",
//   "barrio": "san eduardo",
//   "celular": "3225678909",
//   "celularTrabajo": "3214568754",
//   "celularOpcional": "3136284332",
//   "correo": "fredyroa@gmail.com"
// },
// {
//   "id": 37,
//   "nombres": "Mariela ",
//   "apellidos": "torres alvarez ",
//   "documento": "1009867009",
//   "parentezco": "Madre",
//   "direccion": "Av 6 4-33",
//   "barrio": "prados del este",
//   "celular": "3225678967",
//   "celularTrabajo": "3214568778",
//   "celularOpcional": "3136284782",
//   "correo": "marielatorres@gmail.com"
// },
// {
//   "id": 38,
//   "nombres": "jesus ",
//   "apellidos": " paez niño ",
//   "documento": "1009865609",
//   "parentezco": "Padre",
//   "direccion": "Av 7 48-33",
//   "barrio": "motilones",
//   "celular": "3225678900",
//   "celularTrabajo": "3214568228",
//   "celularOpcional": "3136284745",
//   "correo": "jesuspaez@gmail.com"
// },
// {
//   "id": 39,
//   "nombres": "leidy ",
//   "apellidos": " cardenas ",
//   "documento": "1009865456",
//   "parentezco": "Madre",
//   "direccion": "Cll 9 7-78",
//   "barrio": "comuneros",
//   "celular": "3225678879",
//   "celularTrabajo": "3214568111",
//   "celularOpcional": "3136284234",
//   "correo": "leidycardenas@gmail.com"
// },
// {
//   "id": 40,
//   "nombres": "Elizabeth ",
//   "apellidos": " vargas martinez ",
//   "documento": "1009865127",
//   "parentezco": "Madre",
//   "direccion": "Av 6 7-93",
//   "barrio": "contento",
//   "celular": "3225678234",
//   "celularTrabajo": "3214568222",
//   "celularOpcional": "3136284778",
//   "correo": "elizabethvargas@gmail.com"
// },
// {
//   "id": 41,
//   "nombres": "Maritza ",
//   "apellidos": " fiayo perez ",
//   "documento": "1009865678",
//   "parentezco": "Madre",
//   "direccion": "Av 7 6-33",
//   "barrio": "san eduardo",
//   "celular": "3225675678",
//   "celularTrabajo": "3214562345",
//   "celularOpcional": "3136289099",
//   "correo": "maritzafiayo@gmail.com"
// },
// {
//   "id": 42,
//   "nombres": "Efrain david ",
//   "apellidos": " suarez ",
//   "documento": "10098652345",
//   "parentezco": "Padre",
//   "direccion": "Av 7 6-33",
//   "barrio": "san martin",
//   "celular": "3225674522",
//   "celularTrabajo": "3214562340",
//   "celularOpcional": "3136289091",
//   "correo": "efrainsuarez@gmail.com"
// },
// {
//   "id": 43,
//   "nombres": "Yolanda",
//   "apellidos": " ibarra ",
//   "documento": "10098652346",
//   "parentezco": "Madre",
//   "direccion": "Av 6 4-89",
//   "barrio": "san mateo",
//   "celular": "3225674534",
//   "celularTrabajo": "3214562378",
//   "celularOpcional": "3136289089",
//   "correo": "yolandaibarra@gmail.com"
// },
// {
//   "id": 44,
//   "nombres": "Nieves",
//   "apellidos": " torres fuentes ",
//   "documento": "1090556789",
//   "parentezco": "Madre",
//   "direccion": "Cll 1 2-33",
//   "barrio": "quinta oriental",
//   "celular": "3225674530",
//   "celularTrabajo": "3214562371",
//   "celularOpcional": "3136289082",
//   "correo": "nievestorres@gmail.com"
// },
// {
//   "id": 45,
//   "nombres": "Raul",
//   "apellidos": " roa zuluaga ",
//   "documento": "1090556711",
//   "parentezco": "Padre",
//   "direccion": "Cll 6 2-73",
//   "barrio": "quinta oriental",
//   "celular": "3225674540",
//   "celularTrabajo": "3214562451",
//   "celularOpcional": "3136289067",
//   "correo": "raulroa@gmail.com"
// },
// {
//   "id": 46,
//   "nombres": "Cristo",
//   "apellidos": " jaimes rios ",
//   "documento": "1090556717",
//   "parentezco": "Padre",
//   "direccion": "Cll 9 2-67",
//   "barrio": "guaimaral",
//   "celular": "3225674678",
//   "celularTrabajo": "3214562678",
//   "celularOpcional": "3136289890",
//   "correo": "cristojaimes@gmail.com"
// },
// {
//   "id": 47,
//   "nombres": "manuela",
//   "apellidos": " garcia rios ",
//   "documento": "1090556543",
//   "parentezco": "Madre",
//   "direccion": "Cll 8 9-09",
//   "barrio": "chapinero",
//   "celular": "3225674678",
//   "celularTrabajo": "3214562689",
//   "celularOpcional": "3136289898",
//   "correo": "manuelagarcia@gmail.com"
// },
// {
//   "id": 48,
//   "nombres": "Jaime andres",
//   "apellidos": " prato garcia ",
//   "documento": "1090556556",
//   "parentezco": "Padre",
//   "direccion": "Cll 7 6-09",
//   "barrio": "chapinero",
//   "celular": "3225674211",
//   "celularTrabajo": "3214562998",
//   "celularOpcional": "3136289126",
//   "correo": "jaimeprato@gmail.com"
// },
// {
//   "id": 49,
//   "nombres": "luz karime",
//   "apellidos": " fuentes ",
//   "documento": "1090556578",
//   "parentezco": "Madre",
//   "direccion": "Cll 7 6-09",
//   "barrio": "colpet",
//   "celular": "3225674457",
//   "celularTrabajo": "3214562091",
//   "celularOpcional": "3136289460",
//   "correo": "luzfuentes@gmail.com"
// },
// {
//   "id": 50,
//   "nombres": "Alfredo",
//   "apellidos": " calderon ",
//   "documento": "1090556567",
//   "parentezco": "Padre",
//   "direccion": "Cll 6 9-98",
//   "barrio": "chapinero",
//   "celular": "3225674400",
//   "celularTrabajo": "3214562456",
//   "celularOpcional": "3136289128",
//   "correo": "alfredocalderon@gmail.com"
// },
// {
//   "id": 51,
//   "nombres": "Mildred",
//   "apellidos": " paez ",
//   "documento": "1090556549",
//   "parentezco": "Madre",
//   "direccion": "Cll 8 6-09",
//   "barrio": "san eduardo",
//   "celular": "3225674456",
//   "celularTrabajo": "3214562489",
//   "celularOpcional": "3136289458",
//   "correo": "mildredpaez@gmail.com"
// },
// {
//   "id": 52,
//   "nombres": "Miguel angel",
//   "apellidos": " torres ",
//   "documento": "1090556234",
//   "parentezco": "Padre",
//   "direccion": "Av 5 7-98",
//   "barrio": "ceiba",
//   "celular": "3225675678",
//   "celularTrabajo": "3214562456",
//   "celularOpcional": "3136289423",
//   "correo": "migueltorres@gmail.com"
// },
// {
//   "id": 53,
//   "nombres": "Yolima",
//   "apellidos": "montes sandoval ",
//   "documento": "1090553214",
//   "parentezco": "Madre",
//   "direccion": "Cll 5 7-98",
//   "barrio": "ceiba",
//   "celular": "3225675600",
//   "celularTrabajo": "3214562466",
//   "celularOpcional": "3136289477",
//   "correo": "yolimamantes@gmail.com"
// },
// {
//   "id": 54,
//   "nombres": "Zoraida",
//   "apellidos": "sandoval ",
//   "documento": "1090553222",
//   "parentezco": "Madre",
//   "direccion": "Cll 7 7-98",
//   "barrio": "san gerardo",
//   "celular": "3225675666",
//   "celularTrabajo": "3214562465",
//   "celularOpcional": "3136289490",
//   "correo": "zoraidasandoval@gmail.com"
// },
// {
//   "id": 55,
//   "nombres": "Luis",
//   "apellidos": "maldonado ",
//   "documento": "1090556789",
//   "parentezco": "Padre",
//   "direccion": "Av 3 7-98",
//   "barrio": "motilones",
//   "celular": "3225674446",
//   "celularTrabajo": "3214567865",
//   "celularOpcional": "3136256790",
//   "correo": "luismaldonado@gmail.com"
// },
// {
//   "id": 56,
//   "nombres": "isabel",
//   "apellidos": "angarita ",
//   "documento": "1090346789",
//   "parentezco": "Madre",
//   "direccion": "Av 5 6-70",
//   "barrio": "san eduardo",
//   "celular": "3225674676",
//   "celularTrabajo": "3214500865",
//   "celularOpcional": "3136256600",
//   "correo": "isabelangarita@gmail.com"
// },
// {
//   "id": 57,
//   "nombres": "Miguel ",
//   "apellidos": "paez ",
//   "documento": "1090346009",
//   "parentezco": "Padre",
//   "direccion": "Cll 5 7-98",
//   "barrio": "panamericano",
//   "celular": "3225674006",
//   "celularTrabajo": "3214501165",
//   "celularOpcional": "3136256645",
//   "correo": "miguelpaez@gmail.com"
// },
// {
//   "id": 58,
//   "nombres": "Mercela ",
//   "apellidos": "mora ",
//   "documento": "1090346456",
//   "parentezco": "Madre",
//   "direccion": "Av 5 7-01",
//   "barrio": "san eduardo",
//   "celular": "3225674333",
//   "celularTrabajo": "3214501678",
//   "celularOpcional": "3136256123",
//   "correo": "marcelamora@gmail.com"
// },
// {
//   "id": 59,
//   "nombres": "jorge ",
//   "apellidos": "tarazona ",
//   "documento": "1090342256",
//   "parentezco": "Padre",
//   "direccion": "Av 5 7-98",
//   "barrio": "prados del este",
//   "celular": "3225674223",
//   "celularTrabajo": "3214505578",
//   "celularOpcional": "3136256773",
//   "correo": "jorgetarazona@gmail.com"
// },
// {
//   "id": 60,
//   "nombres": "Stella ",
//   "apellidos": "villanueva ",
//   "documento": "1090347756",
//   "parentezco": "Madre",
//   "direccion": "Cll 9 7-98",
//   "barrio": "colpet",
//   "celular": "3225677723",
//   "celularTrabajo": "3214505566",
//   "celularOpcional": "3136256003",
//   "correo": "stellavillanueva@gmail.com"
// },
// {
//   "id": 61,
//   "nombres": "Josue ",
//   "apellidos": "buitrago ",
//   "documento": "1090300756",
//   "parentezco": "Padre",
//   "direccion": "Av 5 8-01",
//   "barrio": "pescadero",
//   "celular": "3225677773",
//   "celularTrabajo": "3214533566",
//   "celularOpcional": "3136252203",
//   "correo": "Josuebuitrago@gmail.com"
// },
// {
//   "id": 62,
//   "nombres": "Manuel ",
//   "apellidos": "villamizar ",
//   "documento": "1090110756",
//   "parentezco": "Padre",
//   "direccion": "Cll 5 8-01",
//   "barrio": "antonia santos",
//   "celular": "3225632773",
//   "celularTrabajo": "3214538066",
//   "celularOpcional": "3136252783",
//   "correo": "manuelvillamizar@gmail.com"
// },
// {
//   "id": 63,
//   "nombres": "Andres ",
//   "apellidos": "Ramirez ",
//   "documento": "1090144756",
//   "parentezco": "Padre",
//   "direccion": "Cll 7 8-01",
//   "barrio": "ciudad jardin ",
//   "celular": "3225632553",
//   "celularTrabajo": "3214538106",
//   "celularOpcional": "3136252756",
//   "correo": "andresramirez@gmail.com"
// },
// {
//   "id": 64,
//   "nombres": "sergio ",
//   "apellidos": "perez ",
//   "documento": "1090144456",
//   "parentezco": "Padre",
//   "direccion": "Cll 9 8-01",
//   "barrio": " san miguel",
//   "celular": "3225632510",
//   "celularTrabajo": "3214536606",
//   "celularOpcional": "3136250056",
//   "correo": "sergioperez@gmail.com"
// },
// {
//   "id": 65,
//   "nombres": "Maritza ",
//   "apellidos": "sanchez ",
//   "documento": "1090114456",
//   "parentezco": "Madre",
//   "direccion": "Cll 7 8-01",
//   "barrio": "ciudad jardin ",
//   "celular": "3225632220",
//   "celularTrabajo": "3214568606",
//   "celularOpcional": "3136258956",
//   "correo": "maritzasanchez@gmail.com"
// },
// {
//   "id": 66,
//   "nombres": "Valery ",
//   "apellidos": "torres ",
//   "documento": "1090664463",
//   "parentezco": "Madre",
//   "direccion": "Cll 6 8-01",
//   "barrio": "san rafael ",
//   "celular": "3225632220",
//   "celularTrabajo": "3215568606",
//   "celularOpcional": "3136258970",
//   "correo": "valerytorres@gmail.com"
// },
// {
//   "id": 67,
//   "nombres": "Mellanie ",
//   "apellidos": "moncada ",
//   "documento": "1090650963",
//   "parentezco": "Madre",
//   "direccion": "Av 6 6-01",
//   "barrio": "guaimaral ",
//   "celular": "3225636720",
//   "celularTrabajo": "3215568896",
//   "celularOpcional": "3136259070",
//   "correo": "mellaniemoncada@gmail.com"
// },
// {
//   "id": 68,
//   "nombres": "Rodolfo ",
//   "apellidos": "sanchez ",
//   "documento": "1090655063",
//   "parentezco": "Padre",
//   "direccion": "Cll 9 6-87",
//   "barrio": "quinta oriental",
//   "celular": "3225612720",
//   "celularTrabajo": "3215568996",
//   "celularOpcional": "3136259000",
//   "correo": "rodolfosanchez@gmail.com"
// }



//     ])

// res.json({
//   archivedAcudient: true
// })
// })

module.exports = router