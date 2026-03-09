import Lead from "../models/lead.model.js";
import Agent from "../models/agent.model.js";

export const getDashboardStats = async (req, res) => {

  try {

    const totalLeads = await Lead.countDocuments();

    const visits = await Lead.countDocuments({
      status: "Visit Scheduled"
    });

    const booked = await Lead.countDocuments({
      status: "Booked"
    });

    const conversionRate =
      totalLeads === 0
        ? 0
        : ((booked / totalLeads) * 100).toFixed(2);

    // recent activity
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

    // agent leaderboard
    const leaderboard = await Lead.aggregate([
      {
        $group: {
          _id: "$assignedAgent",
          totalLeads: { $sum: 1 },
          bookings: {
            $sum: {
              $cond: [{ $eq: ["$status", "Booked"] }, 1, 0]
            }
          }
        }
      },
      {
        $lookup: {
          from: "agents",
          localField: "_id",
          foreignField: "_id",
          as: "agent"
        }
      },
      { $unwind: "$agent" },
      {
        $project: {
          agentName: "$agent.name",
          totalLeads: 1,
          bookings: 1
        }
      },
      { $sort: { bookings: -1 } }
    ]);

    res.json({
      totalLeads,
      visits,
      booked,
      conversionRate,
      recentActivity,
      leaderboard
    });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};