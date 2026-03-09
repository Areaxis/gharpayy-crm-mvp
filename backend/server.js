import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";

import leadRoutes from "./routes/lead.routes.js";
import visitRoutes from "./routes/visit.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import agentRoutes from "./routes/agent.routes.js";
import startReminderService from "./services/reminder.service.js";

const app = express();

connectDB();
startReminderService();

app.use(cors());
app.use(express.json());

app.use("/api/leads", leadRoutes);
app.use("/api/visits", visitRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/agents", agentRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});