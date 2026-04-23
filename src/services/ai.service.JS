exports.generateSummary = async (leads) => {
  if (!leads.length) {
    return "No hay leads para analizar.";
  }

  const total = leads.length;

  const fuentes = {};
  let totalPresupuesto = 0;

  leads.forEach(l => {
    fuentes[l.fuente] = (fuentes[l.fuente] || 0) + 1;
    if (l.presupuesto) totalPresupuesto += l.presupuesto;
  });

  const principalFuente = Object.entries(fuentes).sort((a, b) => b[1] - a[1])[0][0];
  const promedio = totalPresupuesto / total;

  return `
Resumen Ejecutivo:

- Total de leads: ${total}
- Fuente principal: ${principalFuente}
- Promedio de presupuesto: ${promedio.toFixed(2)}

Recomendaciones:
- Invertir más en ${principalFuente}
- Optimizar campañas con bajo rendimiento
`;
};

//GENERATE SUMMARY CON OPEN AI
// const OpenAI = require("openai");
// const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// exports.generateSummary = async (leads) => {
//   const prompt = `Analiza estos leads y genera un resumen ejecutivo:
//   ${JSON.stringify(leads)}
//   `;

//   const response = await client.chat.completions.create({
//     model: "gpt-4o-mini",
//     messages: [{ role: "user", content: prompt }],
//   });

//   return response.choices[0].message.content;
// };