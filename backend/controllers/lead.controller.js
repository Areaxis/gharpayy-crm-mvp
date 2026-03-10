import Lead from "../models/lead.model.js";
import Agent from "../models/agent.model.js";

export const createLead = async (req, res) => {

  try {

    const agent = await Agent.findOne().sort({ activeLeads: 1 });

    if (!agent) {
      return res.status(400).json({
        error: "No agents available to assign lead"
      });
    }

    const lead = new Lead({
      ...req.body,
      assignedAgent: agent._id,
      lastActivity: new Date(),   // ← improvement added here
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

    const { status, agent, search, page = 1 } = req.query;

    const limit = 10;
    const query = {};

    if (status) {
      query.status = status;
    }

    if (agent) {
      query.assignedAgent = agent;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } }
      ];
    }

    const leads = await Lead.find(query)
      .populate("assignedAgent", "name email")
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    const total = await Lead.countDocuments(query);

    res.json({
      page: Number(page),
      total,
      leads
    });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};

export const updateLeadStatus = async (req, res) => {

  try {

    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        error: "Lead not found"
      });
    }

    lead.status = req.body.status;
    lead.lastActivity = new Date();

    if (!lead.activity) {
      lead.activity = [];
    }

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

    if (!lead) {
      return res.status(404).json({
        error: "Lead not found"
      });
    }

    res.json(lead.activity || []);

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