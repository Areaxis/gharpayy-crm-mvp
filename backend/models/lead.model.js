import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  source: {
    type: String,
    default: "Website"
  },

  status: {
    type: String,
    default: "New Lead"
  },

  assignedAgent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Agent"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Lead", LeadSchema);