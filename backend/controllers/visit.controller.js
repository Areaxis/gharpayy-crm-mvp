import Visit from "../models/visit.model.js";
import Lead from "../models/lead.model.js";

export const scheduleVisit = async (req, res) => {

  try {

    const visit = new Visit(req.body);

    await visit.save();

    const lead = await Lead.findById(req.body.leadId);

    lead.activity.push({
      action: `Visit outcome: ${req.body.outcome || "Scheduled"}`
    });

    lead.lastActivity = new Date();

    await lead.save();

    res.status(201).json(visit);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};