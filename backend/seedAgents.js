import mongoose from "mongoose";
import Agent from "./models/agent.model.js";

await mongoose.connect("mongodb://127.0.0.1:27017/gharpayyCRM");

await Agent.insertMany([
  { name: "Agent A", email: "a@crm.com" },
  { name: "Agent B", email: "b@crm.com" },
  { name: "Agent C", email: "c@crm.com" }
]);

console.log("Agents seeded");

process.exit();