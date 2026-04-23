exports.generateSummary = (leads) => {
  return `
Resumen Ejecutivo:

- Total leads: ${leads.length}
- Fuente principal: ${leads[0]?.fuente || 'N/A'}
- Recomendación: invertir más en canales con mayor conversión.
`;
};