import express from "express";

import {
  scheduleVisit
} from "../controllers/visit.controller.js";

const router = express.Router();

router.post("/", scheduleVisit);

export default router;