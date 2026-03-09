import cron from "node-cron";
import Lead from "../models/lead.model.js";
import Agent from "../models/agent.model.js";

const ONE_DAY = 24 * 60 * 60 * 1000;

const startReminderService = () => {

  cron.schedule("0 * * * *", async () => {

    console.log("Checking inactive leads...");

    const inactiveLeads = await Lead.find({
      lastActivity: { $lt: new Date(Date.now() - ONE_DAY) },
      status: { $nin: ["Booked", "Lost"] }
    });

    for (const lead of inactiveLeads) {

      // find next agent with lowest workload
      const newAgent = await Agent
        .findOne()
        .sort({ activeLeads: 1 });

      if (!newAgent) continue;

      // skip if already assigned
      if (lead.assignedAgent?.toString() === newAgent._id.toString()) {
        continue;
      }

      lead.assignedAgent = newAgent._id;

      lead.activity.push({
        action: `Lead automatically reassigned to ${newAgent.name}`
      });

      lead.lastActivity = new Date();

      await lead.save();

      newAgent.activeLeads += 1;
      await newAgent.save();

    }

  });

};

export default startReminderService;