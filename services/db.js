//se usa la libreria dotenv para configurar los parametros 
//iniciales de la configuracion de la db
require('dotenv').config()


var mysql = require("mysql")


var conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USEr,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE

});

module.exports = conexion;