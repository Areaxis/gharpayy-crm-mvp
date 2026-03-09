import { useEffect, useState } from "react";
import { getLeads } from "./api/getLeads";
import LeadForm from "./LeadForm";

export default function LeadsPage() {

  const [leads, setLeads] = useState([]);

  useEffect(() => {

    const load = async () => {
      const data = await getLeads();
      setLeads(data);
    };

    load();

  }, []);

  return (

    <div>

      <h1>Leads Pipeline</h1>

      <LeadForm />

      {leads.map((lead) => (
        <div key={lead._id}>

          <h4>{lead.name}</h4>
          <p>{lead.phone}</p>
          <p>Status: {lead.status}</p>

        </div>
      ))}

    </div>

  );
}