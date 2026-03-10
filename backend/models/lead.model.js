import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema({

  // Core lead info
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


  // Qualification fields (from employer example form)

  moveInDate: {
    type: Date
  },

  location: {
    type: String
  },

  inBlr: {
    type: String,
    enum: ["Yes", "No"]
  },

  gender: {
    type: String,
    enum: ["Boys", "Girls", "Coliving"]
  },

  occupation: {
    type: String,
    enum: ["Student", "Working", "Intern"]
  },

  month: {
    type: String
  },

  score: {
    type: Number,
    min: 1,
    max: 10
  },

  owner: {
    type: String
  },


  // CRM pipeline fields

  status: {
    type: String,
    default: "New Lead"
  },

  assignedAgent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Agent"
  },


  // Activity tracking

  lastActivity: {
    type: Date,
    default: Date.now
  },

  activity: [
    {
      action: String,
      timestamp: {
        type: Date,
        default: Date.now
      }
    }
  ],


  // Metadata

  createdAt: {
    type: Date,
    default: Date.now
  }

});

export default mongoose.model("Lead", LeadSchema);