const mysql = require('mysql');

var conexion = mysql.createConnection({
    host: 'comentarios-instance-1.cx26a4muqapq.us-east-2.rds.amazonaws.com',        
    database: 'evaluation',  
    user: 'erik',
    password: 'o7]9yj#JYCevmGX]991?7)HRLXz-',
    port: '3306'        
});
    
conexion.connect(function(error) {
    if(error){
        console.log(error);
    }else{
        console.log("Conexión exitosa");
    }
});    

module.exports = conexion;