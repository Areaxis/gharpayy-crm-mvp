import mongoose from "mongoose";

const AgentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String
  },

  activeLeads: {
    type: Number,
    default: 0
  }
});

export default mongoose.model("Agent", AgentSchema);