import { useState } from "react";
import { api } from "../../../config/api";

export default function VisitScheduler() {

  const [leadId, setLeadId] = useState("");
  const [property, setProperty] = useState("");
  const [date, setDate] = useState("");
  const [outcome, setOutcome] = useState("");

  const scheduleVisit = async () => {

    try {

      await api.post("/visits", {
        leadId,
        property,
        date,
        outcome
      });

      alert("Visit scheduled successfully");

      setLeadId("");
      setProperty("");
      setDate("");
      setOutcome("");

    } catch (err) {

      console.error(err);
      alert("Failed to schedule visit");

    }

  };

  return (

    <div className="p-6 flex justify-center">

      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md space-y-4">

        <h1 className="text-xl font-semibold text-gray-700">
          Schedule Property Visit
        </h1>

        {/* Lead ID */}
        <input
          type="text"
          placeholder="Lead ID"
          value={leadId}
          onChange={(e) => setLeadId(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Property */}
        <input
          type="text"
          placeholder="Property Name"
          value={property}
          onChange={(e) => setProperty(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Date */}
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {/* Outcome */}
        <select
          value={outcome}
          onChange={(e) => setOutcome(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="">Select Visit Outcome</option>
          <option value="Scheduled">Scheduled</option>
          <option value="Successful">Successful</option>
          <option value="No Show">No Show</option>
          <option value="Not Interested">Not Interested</option>
          <option value="Booked">Booked</option>
        </select>

        {/* Button */}
        <button
          onClick={scheduleVisit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition transform hover:scale-[1.02]"
        >
          Save Visit
        </button>

      </div>

    </div>

  );

}