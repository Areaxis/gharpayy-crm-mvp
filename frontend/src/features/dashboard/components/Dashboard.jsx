import { useEffect,useState } from "react";
import { api } from "../../../config/api";

export default function Dashboard(){

  const [stats,setStats] = useState({});

  useEffect(()=>{

    const load = async ()=>{

      const res = await api.get("/dashboard");
      setStats(res.data);

    };

    load();

  },[]);

  return(

    <div>

      <h1>CRM Dashboard</h1>

      <p>Total Leads: {stats.totalLeads}</p>
      <p>Visits Scheduled: {stats.visits}</p>
      <p>Bookings: {stats.booked}</p>

    </div>

  );

}