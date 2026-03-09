import { useEffect, useState } from "react";
import { api } from "../../../config/api";

export default function Dashboard() {

  const [stats, setStats] = useState({});

  useEffect(() => {

    const load = async () => {
      const res = await api.get("/dashboard");
      setStats(res.data);
    };

    load();

  }, []);

  return (

    <div>

      <h1>CRM Dashboard</h1>

      <h3>Total Leads: {stats.totalLeads}</h3>
      <h3>Visits Scheduled: {stats.visits}</h3>
      <h3>Bookings: {stats.booked}</h3>

    </div>

  );
}