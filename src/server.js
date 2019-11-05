// Dependencies
const express = require("express");
const morgan = require("morgan");
const app = express();
const path = require("path");
// const multer = require("multer");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
// const uuid = require("uuid/v4");
require('dotenv').config();

// Routes Controllers
const alumnoController = require("./controllers/alumno");
const docenteController = require("./controllers/docente");
const acudienteController = require("./controllers/acudiente");
const cursoController = require("./controllers/curso.js");
const materiaController = require("./controllers/materia.js");
const actividadController = require("./controllers/actividad.js");


//------------------------------Multer-----------------------------------------

// const storage = multer.diskStorage({

// 	destination: path.join(__dirname, 'files/uploads/'),
// 	filename: (req, file, cb) =>{
// 		cb(null, uuid() + path.extname(file.originalname).toLowerCase());
// 	}

// });

// const upload = app.use(multer({
// 	storage,
// 	dest: path.join(__dirname, 'files/uploads/'),
// 	limits: {filesize: 3000000},
// 	fileFilter: (req, file, cb) => {
// 		const fileTypes = /pdf|doc|docx/;
// 		const mimetype = fileTypes.test(file.mimetype);
// 		const extname = fileTypes.test(path.extname(file.originalname));

// 		if(mimetype && extname){
// 			return cb(null, true)
// 		}

// 		cb("Error: los archivos deben ser pdf, doc, docx")
// 	}
// }).single('file'))

//--------------------------------------------------------------------------------


//cors
app.use(cors());

//Bodyparser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Settings Port
app.set("port", process.env.PORT || 3000);

//Database
//mongoose.connect(process.env.PASSWORD_DB , {dbName: 'sia', useNewUrlParser: true}) 
mongoose.connect("mongodb://localhost/sia" , {useNewUrlParser: true}) 
.then(db => console.log('Connection established'))
.catch(err => console.log(err));
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
//Connection Private
// mongoose.connect('mongodb://AndresRodriguez:root@localhost/mecanicapp' , {useNewUrlParser: true})


// Morgan y JSON
app.use(morgan("dev"));
app.use(express.json());

// Routes Controllers

app.use('/alumno', alumnoController);
app.use('/docente', docenteController);
app.use('/acudiente', acudienteController);
app.use('/cursos', cursoController);
app.use('/materias', materiaController);
app.use('/actividad', actividadController);

//Static Files



//Listening server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});