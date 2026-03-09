import mongoose from "mongoose";

const VisitSchema = new mongoose.Schema({
  leadId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lead"
  },

  property: {
    type: String
  },

  date: {
    type: Date
  },

  outcome: {
    type: String
  }
});

export default mongoose.model("Visit", VisitSchema);