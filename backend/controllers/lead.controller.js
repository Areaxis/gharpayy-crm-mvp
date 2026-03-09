import Lead from "../models/lead.model.js";
import Agent from "../models/agent.model.js";

export const createLead = async (req, res) => {
  try {

    // find agent with lowest workload
    const agent = await Agent
      .findOne()
      .sort({ activeLeads: 1 });

    const lead = new Lead({
      ...req.body,
      assignedAgent: agent._id
    });

    await lead.save();

    // update workload
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

    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.json(lead);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }
};