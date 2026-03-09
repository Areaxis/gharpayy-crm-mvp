import { useState } from "react";
import { api } from "../../../config/api";

export default function VisitScheduler() {

  const [leadId, setLeadId] = useState("");
  const [property, setProperty] = useState("");
  const [date, setDate] = useState("");
  const [outcome, setOutcome] = useState("");

  const schedule = async () => {

    await api.post("/visits", {
      leadId,
      property,
      date,
      outcome
    });

    alert("Visit Scheduled");

  };

  return (

    <div className="p-4">

      <h2 className="text-xl font-bold mb-4">
        Schedule Visit
      </h2>

      <input
        className="border p-2 mb-2 w-full"
        placeholder="Lead ID"
        onChange={(e) => setLeadId(e.target.value)}
      />

      <input
        className="border p-2 mb-2 w-full"
        placeholder="Property"
        onChange={(e) => setProperty(e.target.value)}
      />

      <input
        type="datetime-local"
        className="border p-2 mb-2 w-full"
        onChange={(e) => setDate(e.target.value)}
      />

      <select
        className="border p-2 mb-2 w-full"
        onChange={(e) => setOutcome(e.target.value)}
      >
        <option value="">Select Outcome</option>
        <option value="Successful">Successful</option>
        <option value="No Show">No Show</option>
        <option value="Not Interested">Not Interested</option>
        <option value="Booked">Booked</option>
      </select>

      <button
        onClick={schedule}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Visit
      </button>

    </div>

  );

}