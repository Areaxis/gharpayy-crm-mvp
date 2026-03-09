import { useEffect,useState } from "react";
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

export default function LeadsPage(){

  const [leads,setLeads] = useState([]);

  const loadLeads = async () => {
    const data = await getLeads();
    setLeads(data);
  };

  useEffect(()=>{
    loadLeads();
  },[]);

  return (

    <div>

      <LeadForm refresh={loadLeads} />

      <div className="flex gap-4 overflow-x-auto p-4">

        {stages.map(stage=>{

          const stageLeads = leads.filter(
            lead => lead.status === stage
          );

          return(
            <PipelineColumn
              key={stage}
              title={stage}
              leads={stageLeads}
            />
          )

        })}

      </div>

    </div>

  );

}