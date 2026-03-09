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

    // conversion rate calculation
    const conversionRate =
      totalLeads === 0
        ? 0
        : ((booked / totalLeads) * 100).toFixed(2);

    // fetch activity
    const leads = await Lead.find()
      .select("name activity")
      .lean();

    const activity = [];

    for (const lead of leads) {

      for (const event of lead.activity) {

        activity.push({
          leadName: lead.name,
          action: event.action,
          timestamp: event.timestamp
        });

      }

    }

    activity.sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );

    const recentActivity = activity.slice(0, 10);

    res.json({
      totalLeads,
      visits,
      booked,
      conversionRate,
      recentActivity
    });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};