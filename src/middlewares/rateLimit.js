const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // máximo 100 requests por IP
  message: {
    message: 'Demasiadas peticiones, intenta más tarde'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = limiter;