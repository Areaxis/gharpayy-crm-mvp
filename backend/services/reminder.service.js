import cron from "node-cron";
import Lead from "../models/lead.model.js";

const ONE_DAY = 24 * 60 * 60 * 1000;

const startReminderService = () => {

  cron.schedule("0 * * * *", async () => {

    console.log("Checking inactive leads...");

    const inactiveLeads = await Lead.find({
      lastActivity: { $lt: new Date(Date.now() - ONE_DAY) }
    });

    for (const lead of inactiveLeads) {

      lead.activity.push({
        action: "Follow-up reminder triggered"
      });

      await lead.save();

    }

  });

};

export default startReminderService;