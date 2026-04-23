require('dotenv').config();
const app = require('./src/app');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('DB conectada');
    app.listen(process.env.PORT, () => {
      console.log(`Server corriendo en puerto ${process.env.PORT}`);
    });
  })
  .catch(err => console.error(err));