const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Conexión a la base de datos
mongoose
    //.connect('mongodb://127.0.0.1:27017/mascotas')
    .connect('mongodb+srv://danielarrti22:lbgLeS24Wyb5u6SF@cluster0.bjsxcdx.mongodb.net/mascotas?retryWrites=true&w=majority&appName=Cluster0')
    .then((x) => {
        console.log(`Conectado a la base de datos: ${x.connections[0].name}`);
    })
    .catch((error) => {
        console.error('Error al conectar a la base de datos:', error);
    });

// Configuración del servidor web
const mascotasRutas = require('./routes/mascota.routes'); // Actualizado aquí
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', mascotasRutas); // Actualizado aquí

// Habilitar el puerto
const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Manejo de errores 404
app.use((req, res, next) => {
    res.status(404).send('Ruta no encontrada');
});

// Manejo de errores generales
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
