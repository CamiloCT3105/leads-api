const Lead = require('../models/lead.model');

// CREATE
exports.createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);
    res.status(201).json(lead);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET ALL (con filtros)
exports.getLeads = async (req, res) => {
  try {
    const { page = 1, limit = 10, fuente, startDate, endDate } = req.query;

    let filter = { deleted: false };

    if (fuente) filter.fuente = fuente;

    if (startDate && endDate) {
      filter.createdAt = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    const leads = await Lead.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET BY ID
exports.getLeadById = async (req, res) => {
  const lead = await Lead.findById(req.params.id);

  if (!lead || lead.deleted) {
    return res.status(404).json({ message: 'Lead no encontrado' });
  }

  res.json(lead);
};

// UPDATE
exports.updateLead = async (req, res) => {
  const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.json(lead);
};

// DELETE (soft)
exports.deleteLead = async (req, res) => {
  await Lead.findByIdAndUpdate(req.params.id, { deleted: true });

  res.json({ message: 'Lead eliminado' });
};

// GET STATS
exports.getStats = async (req, res) => {
  try {
    const total = await Lead.countDocuments({ deleted: false });

    const byFuente = await Lead.aggregate([
      { $match: { deleted: false } },
      { $group: { _id: "$fuente", count: { $sum: 1 } } }
    ]);

    const avgBudget = await Lead.aggregate([
      { $match: { deleted: false } },
      { $group: { _id: null, avg: { $avg: "$presupuesto" } } }
    ]);

    const last7Days = await Lead.countDocuments({
      createdAt: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) },
      deleted: false
    });

    res.json({
      total,
      byFuente,
      avgBudget: avgBudget[0]?.avg || 0,
      last7Days
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};