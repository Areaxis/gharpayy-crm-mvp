import Visit from "../models/visit.model.js";

export const scheduleVisit = async (req, res) => {
  try {

    const visit = new Visit(req.body);

    await visit.save();

    res.status(201).json(visit);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }
};