import express from "express";
import cors from "cors";

import connectDB from "../config/db.js";

import leadRoutes from "../routes/lead.routes.js";
import visitRoutes from "../routes/visit.routes.js";
import dashboardRoutes from "../routes/dashboard.routes.js";
import agentRoutes from "../routes/agent.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/leads", leadRoutes);
app.use("/api/visits", visitRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/agents", agentRoutes);

let isConnected = false;

async function ensureDB() {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
}

export default async function handler(req, res) {
  await ensureDB();
  return app(req, res);
}