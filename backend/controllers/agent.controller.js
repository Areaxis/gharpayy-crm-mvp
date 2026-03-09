import Agent from "../models/agent.model.js";

export const createAgent = async (req, res) => {
  try {

    const agent = new Agent(req.body);

    await agent.save();

    res.status(201).json(agent);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }
};

export const getAgents = async (req, res) => {
  try {

    const agents = await Agent.find().lean();

    res.json(agents);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }
};