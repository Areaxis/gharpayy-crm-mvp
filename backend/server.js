import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";

import leadRoutes from "./routes/lead.routes.js";
import visitRoutes from "./routes/visit.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import agentRoutes from "./routes/agent.routes.js";
import startReminderService from "./services/reminder.service.js";

const app = express();

/* connect database */
connectDB();

/* start reminder service */
startReminderService();

/* CORS configuration for Vercel */
app.use(
  cors({
    origin: [
      "http://localhost:5173", 
      "https://gharpayy-crm-mvp-3d7o.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true
  })
);

/* middleware */
app.use(express.json());

/* routes */
app.use("/api/leads", leadRoutes);
app.use("/api/visits", visitRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/agents", agentRoutes);

/* health check route */
app.get("/", (req, res) => {
  res.send("Gharpayy CRM API running");
});

export default app;