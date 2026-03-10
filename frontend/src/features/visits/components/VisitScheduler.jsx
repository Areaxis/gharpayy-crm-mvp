import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { api } from "../../../config/api";

import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function VisitScheduler() {

  const [searchParams] = useSearchParams();

  const [leadId, setLeadId] = useState(
    searchParams.get("leadId") || ""
  );

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

      alert("Visit scheduled");

      setLeadId("");
      setProperty("");
      setDate("");
      setOutcome("");

    } catch (err) {

      console.error(err);
      alert("Failed to schedule visit");

    }

  };

  const formattedDate = date
    ? new Date(date).toLocaleString()
    : "No date selected";

  return (

    <div className="p-8 flex justify-center">

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">

        {/* LEFT: PROPERTY PREVIEW */}

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">

          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-8 flex justify-center">

            <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center text-yellow-600">
              <HomeIcon fontSize="large" />
            </div>

          </div>

          <div className="p-6 space-y-4">

            <h2 className="text-xl font-semibold text-gray-700">
              {property || "Gharpayy Property Visit"}
            </h2>

            <p className="text-gray-500 text-sm">
              Schedule a visit to explore available PG accommodations across
              Mahadevapura, Whitefield, Hoodi, BTM and Koramangala.
            </p>

            <div className="space-y-2 text-sm text-gray-600">

              <div className="flex items-center gap-2">
                <PhoneIcon fontSize="small" />
                Phone consultation available
              </div>

              <div className="flex items-center gap-2">
                <AccessTimeIcon fontSize="small" />
                Typical visit duration: 5–10 minutes
              </div>

              <div className="flex items-center gap-2">
                <EventIcon fontSize="small" />
                {formattedDate}
              </div>

            </div>

          </div>

        </div>


        {/* RIGHT: BOOKING FORM */}

        <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">

          <h2 className="text-lg font-semibold text-gray-700">
            Schedule Visit
          </h2>

          <input
            type="text"
            placeholder="Lead ID"
            value={leadId}
            onChange={(e) => setLeadId(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="text"
            placeholder="Property Name"
            value={property}
            onChange={(e) => setProperty(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <select
            value={outcome}
            onChange={(e) => setOutcome(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Select Outcome</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Successful">Successful</option>
            <option value="No Show">No Show</option>
            <option value="Not Interested">Not Interested</option>
            <option value="Booked">Booked</option>
          </select>

          <button
            onClick={scheduleVisit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition transform hover:scale-[1.02]"
          >
            Confirm Visit
          </button>

        </div>

      </div>

    </div>

  );

}