import express from "express";

import {
  createAgent,
  getAgents
} from "../controllers/agent.controller.js";

const router = express.Router();

router.post("/", createAgent);
router.get("/", getAgents);

export default router;