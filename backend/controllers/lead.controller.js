import Lead from "../models/lead.model.js";
import Agent from "../models/agent.model.js";

export const createLead = async (req, res) => {

  try {

    const agent = await Agent
      .findOne()
      .sort({ activeLeads: 1 });

    const lead = new Lead({
      ...req.body,
      assignedAgent: agent._id,
      activity: [
        { action: "Lead created" },
        { action: `Assigned to ${agent.name}` }
      ]
    });

    await lead.save();

    agent.activeLeads += 1;
    await agent.save();

    res.status(201).json(lead);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};

export const getLeads = async (req, res) => {
  try {

    const leads = await Lead
      .find()
      .populate("assignedAgent", "name email")
      .lean();

    res.json(leads);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }
};

export const updateLeadStatus = async (req, res) => {

  try {

    const lead = await Lead.findById(req.params.id);

    lead.status = req.body.status;

    lead.lastActivity = new Date();

    lead.activity.push({
        action: `Status changed to ${req.body.status}`
    });

    await lead.save();

    res.json(lead);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};

export const getLeadTimeline = async (req, res) => {

  try {

    const lead = await Lead
      .findById(req.params.id)
      .select("activity")
      .lean();

    res.json(lead.activity);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};

export const getFollowUps = async (req, res) => {

  try {

    const ONE_DAY = 24 * 60 * 60 * 1000;

    const leads = await Lead.find({
      lastActivity: { $lt: new Date(Date.now() - ONE_DAY) }
    })
    .populate("assignedAgent", "name")
    .lean();

    res.json(leads);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};