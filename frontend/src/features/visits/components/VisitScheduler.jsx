import { useState } from "react";
import { api } from "../../../config/api";

export default function VisitScheduler(){

  const [leadId,setLeadId] = useState("");
  const [property,setProperty] = useState("");
  const [date,setDate] = useState("");

  const schedule = async ()=>{

    await api.post("/visits",{
      leadId,
      property,
      date
    });

    alert("Visit Scheduled");

  };

  return(

    <div>

      <h2>Schedule Visit</h2>

      <input
        placeholder="Lead ID"
        onChange={(e)=>setLeadId(e.target.value)}
      />

      <input
        placeholder="Property"
        onChange={(e)=>setProperty(e.target.value)}
      />

      <input
        type="datetime-local"
        onChange={(e)=>setDate(e.target.value)}
      />

      <button onClick={schedule}>
        Schedule
      </button>

    </div>

  );

}