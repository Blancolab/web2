const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

//intanciamos el uso del servidor
const app = express();

//Configuración body-parser (análisar datos del cuerpo del formulario 
// que viene desde HTML con POST o GET.

app.use(bodyParser.urlencoded({ extended: false }));

//motor de plantillas (Juntar html con css)
app.set('view engine', 'ejs');

//configuración db
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'node_crud',
    port: 3306
});

//mostrar la lista de los usuarios
app.get('/users', (req, res) => {
    //consulta
    const consulta = 'SELECT * FROM users';
    db.query(consulta, (err, results) => {
        
    });
});

//servidor
const port = 3009;
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://127.0.0.1:${port}`);
});