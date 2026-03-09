import express from "express";

import {
  createLead,
  getLeads,
  updateLeadStatus,
  getLeadTimeline
} from "../controllers/lead.controller.js";

const router = express.Router();

router.post("/", createLead);
router.get("/", getLeads);
router.patch("/:id", updateLeadStatus);
router.get("/:id/timeline", getLeadTimeline);
router.get("/followups", getFollowUps);

export default router;