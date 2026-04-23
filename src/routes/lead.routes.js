/**
 * @swagger
 * tags:
 *   name: Leads
 *   description: API de leads
 */

const router = require('express').Router();
const ctrl = require('../controllers/lead.controller');

/**
 * @swagger
 * /leads:
 *   post:
 *     summary: Crear un nuevo lead
 *     tags: [Leads]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - email
 *               - fuente
 *             properties:
 *               nombre:
 *                 type: string
 *               email:
 *                 type: string
 *               telefono:
 *                 type: string
 *               fuente:
 *                 type: string
 *                 enum: [instagram, facebook, landing_page, referido, otro]
 *               producto_interes:
 *                 type: string
 *               presupuesto:
 *                 type: number
 *     responses:
 *       201:
 *         description: Lead creado
 */
router.post('/', ctrl.createLead);

/**
 * @swagger
 * /leads:
 *   get:
 *     summary: Obtener leads
 *     tags: [Leads]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: number
 *       - in: query
 *         name: fuente
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de leads
 */
router.get('/', ctrl.getLeads);

/**
 * @swagger
 * /leads/stats:
 *   get:
 *     summary: Obtener estadísticas
 *     tags: [Leads]
 *     responses:
 *       200:
 *         description: Estadísticas
 */
router.get('/stats', ctrl.getStats);

/**
 * @swagger
 * /leads/ai/summary:
 *   post:
 *     summary: Generar resumen con IA
 *     tags: [Leads]
 *     responses:
 *       200:
 *         description: Resumen generado
 */
router.get('/ai/summary', ctrl.aiSummary);
router.get('/:id', ctrl.getLeadById);
router.patch('/:id', ctrl.updateLead);
router.delete('/:id', ctrl.deleteLead);

module.exports = router;