const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const limiter = require('./middlewares/rateLimit');

const leadRoutes = require('./routes/lead.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/leads', limiter);
app.use('/leads', leadRoutes);

module.exports = app;