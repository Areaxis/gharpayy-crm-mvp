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

    <div className="grid grid-cols-3 gap-4">

      <div className="bg-white shadow rounded p-4">
        <h3 className="text-gray-500">Total Leads</h3>
        <p className="text-2xl font-bold">{stats.totalLeads}</p>
      </div>

      <div className="bg-white shadow rounded p-4">
        <h3 className="text-gray-500">Visits Scheduled</h3>
        <p className="text-2xl font-bold">{stats.visits}</p>
      </div>

      <div className="bg-white shadow rounded p-4">
        <h3 className="text-gray-500">Conversion Rate</h3>
        <p className="text-2xl font-bold">{stats.conversionRate}%</p>
      </div>

    </div>

  );

}