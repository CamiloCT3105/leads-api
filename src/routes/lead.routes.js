const router = require('express').Router();
const ctrl = require('../controllers/lead.controller');

router.post('/', ctrl.createLead);
router.get('/', ctrl.getLeads);
router.get('/stats', ctrl.getStats);
router.get('/ai/summary', ctrl.aiSummary);
router.get('/:id', ctrl.getLeadById);
router.patch('/:id', ctrl.updateLead);
router.delete('/:id', ctrl.deleteLead);

module.exports = router;