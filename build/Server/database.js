var mysql = require('mysql');


//Guardo parametros de conexion como un objeto funcional
var connection = mysql.createConnection({
    host:'localhost',
    user:'hazear_sov',
    password:'sovproyect',
    database:'hazear_sov'
})

//Intento conectarla
connection.connect(function(err) {
    // in case of error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});

