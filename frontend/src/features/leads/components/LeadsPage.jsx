import { useEffect, useState } from "react";
import { getLeads } from "../api/getLeads";
import PipelineColumn from "../../../components/PipelineColumn";
import LeadForm from "./LeadForm";

const stages = [
  "New Lead",
  "Contacted",
  "Requirement Collected",
  "Property Suggested",
  "Visit Scheduled",
  "Visit Completed",
  "Booked",
  "Lost"
];

export default function LeadsPage() {

  const [leads, setLeads] = useState([]);

  const loadLeads = async () => {

    const data = await getLeads();

    // backend returns { page, total, leads }
    setLeads(data.leads || []);

  };

  useEffect(() => {
    loadLeads();
  }, []);

  return (

    <div className="p-6">

      <h1 className="text-2xl font-bold text-gray-700 mb-4">
        Lead Pipeline
      </h1>

      <LeadForm refresh={loadLeads} />

      <div className="flex gap-6 overflow-x-auto mt-6 pb-4">

        {stages.map(stage => {

          const stageLeads = leads.filter(
            lead => lead.status === stage
          );

          return (
            <PipelineColumn
              key={stage}
              title={stage}
              leads={stageLeads}
            />
          );

        })}

      </div>

    </div>

  );

}