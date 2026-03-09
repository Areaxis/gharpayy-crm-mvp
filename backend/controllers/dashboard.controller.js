import Lead from "../models/lead.model.js";

export const getDashboardStats = async (req, res) => {
  try {

    const totalLeads = await Lead.countDocuments();

    const visits = await Lead.countDocuments({
      status: "Visit Scheduled"
    });

    const booked = await Lead.countDocuments({
      status: "Booked"
    });

    res.json({
      totalLeads,
      visits,
      booked
    });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }
};