import Visit from "../models/visit.model.js";
import Lead from "../models/lead.model.js";

export const scheduleVisit = async (req, res) => {

  try {

    const visit = new Visit(req.body);

    await visit.save();

    const lead = await Lead.findById(req.body.leadId);

    if (!lead) {
      return res.status(404).json({
        error: "Lead not found"
      });
    }

    const outcome = req.body.outcome || "Scheduled";

    // update lead status based on visit
    if (outcome === "Scheduled") {
      lead.status = "Visit Scheduled";
    }

    if (outcome === "Successful") {
      lead.status = "Visit Completed";
    }

    if (outcome === "Booked") {
      lead.status = "Booked";
    }

    if (outcome === "Not Interested") {
      lead.status = "Lost";
    }

    // add timeline activity
    lead.activity.push({
      action: `Visit outcome: ${outcome}`
    });

    lead.lastActivity = new Date();

    await lead.save();

    res.status(201).json(visit);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};