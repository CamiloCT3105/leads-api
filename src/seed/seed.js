const mongoose = require('mongoose');
const Lead = require('../models/lead.model');
require('dotenv').config();

const leads = [
  {
    nombre: "Juan Perez",
    email: "juan1@test.com",
    fuente: "instagram",
    presupuesto: 100
  },
  {
    nombre: "Maria Lopez",
    email: "maria1@test.com",
    fuente: "facebook",
    presupuesto: 200
  },
  {
    nombre: "Carlos Ruiz",
    email: "carlos@test.com",
    fuente: "landing_page",
    presupuesto: 300
  },
  {
    nombre: "Ana Torres",
    email: "ana@test.com",
    fuente: "referido",
    presupuesto: 150
  },
  {
    nombre: "Luis Gomez",
    email: "luis@test.com",
    fuente: "otro",
    presupuesto: 80
  },
  {
    nombre: "Sofia Diaz",
    email: "sofia@test.com",
    fuente: "instagram",
    presupuesto: 220
  },
  {
    nombre: "Pedro Silva",
    email: "pedro@test.com",
    fuente: "facebook",
    presupuesto: 400
  },
  {
    nombre: "Laura Mejia",
    email: "laura@test.com",
    fuente: "landing_page",
    presupuesto: 180
  },
  {
    nombre: "Andres Castro",
    email: "andres@test.com",
    fuente: "referido",
    presupuesto: 90
  },
  {
    nombre: "Valentina Rios",
    email: "valentina@test.com",
    fuente: "instagram",
    presupuesto: 250
  }
];

const seed = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await Lead.deleteMany();
  await Lead.insertMany(leads);

  console.log("Seed ejecutado correctamente");
  process.exit();
};

seed();