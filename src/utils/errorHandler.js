exports.handleError = (error) => {
  if (error.code === 11000) {
    return { message: 'El email ya está registrado' };
  }

  if (error.name === 'ValidationError') {
    const messages = Object.values(error.errors).map(e => e.message);
    return { message: messages.join(', ') };
  }

  return { message: 'Error interno del servidor' };
};