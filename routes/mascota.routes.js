const express = require('express');
const mascotaRutas = express.Router();

// Declaramos el modelo de mascota
let Mascota = require('../models/Mascota');

// Agregar mascota
mascotaRutas.route('/agregar').post((req, res) => {
    Mascota.create(req.body)
    .then((data) => {
        console.log('Se insertó correctamente el documento');
        res.send(data);
    })
    .catch((error) => {
        console.log(error);
    })
})

// Obtener todas las mascotas
mascotaRutas.route('/mascotas').get((req, res) => {
    Mascota.find()
    .then((data) => {
        res.send(data);
    }) 
    .catch((error) => {
        console.log(error);
    });
});

// Obtener una mascota por id
mascotaRutas.route('/mascota/:id').get((req, res) => {
    Mascota.findById(req.params.id)
    .then((data) => {
        res.send(data);
    })
    .catch((error) => {
        console.log(error);
    });
});

// Actualizar una mascota por id
mascotaRutas.route('/actualizar/:id').put((req, res) => {
    Mascota.findByIdAndUpdate(req.params.id, {
        $set: req.body
    })
    .then((data) => {
        console.log('Se actualizó correctamente el documento');
        res.send(data);
    })
    .catch((error) => {
        console.log(error);
    });
});

// Eliminar una mascota por id
mascotaRutas.route('/eliminar/:id').delete((req, res) => {
    Mascota.findByIdAndDelete(req.params.id)
    .then((data) => {
        console.log('Se eliminó correctamente el documento');
        res.send(data);
    })
    .catch((error) => {
        console.log(error);
    });
});

module.exports = mascotaRutas;
