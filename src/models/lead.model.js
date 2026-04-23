const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    minlength: 2
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  telefono: String,
  fuente: {
    type: String,
    enum: ['instagram', 'facebook', 'landing_page', 'referido', 'otro'],
    required: true
  },
  producto_interes: String,
  presupuesto: Number,
  deleted: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Lead', leadSchema);