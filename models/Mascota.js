// models/Mascota.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Mascota = new Schema({
    nombre: {
        type: String,
        required: true
    },
    tipo: {
        type: String,  
        enum: ['Perro', 'Gato', 'Otro'], // Puedes ajustar los tipos de mascotas
        required: true
    },
    fechaDeLlegada: {
        type: Date, // Tipo calendario
        required: true
    },
    estadoAdopcion: {
        type: String,
        enum: ['Disponible', 'Adoptada', 'En proceso'], // Puedes ajustar los valores
        default: 'Disponible'
    },
    genero: {
        type: String,
        enum: ['Macho', 'Hembra'], // Género de la mascota
        required: true
    },
    descripcionLlegada: {
        type: String, // Breve descripción de la llegada de la mascota
        required: true
    },
    esterilizado: {
        type: Boolean,
        default: false
    }
}, {
    collection: 'mascotas'
});

module.exports = mongoose.model('Mascota', Mascota);
