const mysql = require('mysql2');

let dbobject = {
    host: 'LocalHost',
    user: 'root',
    password: 'cdac',
    database: 'Pratik',
    port: 3306
}

const connection = mysql.createConnection(dbobject);

console.log("Connection Successful!!");