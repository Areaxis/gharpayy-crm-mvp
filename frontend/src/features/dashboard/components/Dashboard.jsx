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

    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-bold text-gray-700">
        CRM Dashboard
      </h1>

      {/* Metric Cards */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-5">

          <h3 className="text-gray-500 text-sm">
            Total Leads
          </h3>

          <p className="text-3xl font-bold text-blue-600">
            {stats.totalLeads ?? 0}
          </p>

        </div>

        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-5">

          <h3 className="text-gray-500 text-sm">
            Visits Scheduled
          </h3>

          <p className="text-3xl font-bold text-indigo-600">
            {stats.visits ?? 0}
          </p>

        </div>

        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-5">

          <h3 className="text-gray-500 text-sm">
            Conversion Rate
          </h3>

          <p className="text-3xl font-bold text-green-600">
            {stats.conversionRate ?? 0}%
          </p>

        </div>

      </div>


      {/* Activity + Leaderboard */}
      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white rounded-xl shadow-sm p-5">

          <h2 className="font-semibold mb-3">
            Recent Activity
          </h2>

          <div className="space-y-2">

            {stats.recentActivity?.map((activity, index) => (

              <div
                key={index}
                className="text-sm text-gray-600 border-b pb-2"
              >
                <span className="font-medium">
                  {activity.leadName}
                </span>{" "}
                — {activity.action}
              </div>

            ))}

          </div>

        </div>


        <div className="bg-white rounded-xl shadow-sm p-5">

          <h2 className="font-semibold mb-3">
            Agent Performance
          </h2>

          <div className="space-y-2">

            {stats.leaderboard?.map((agent, index) => (

              <div
                key={index}
                className="flex justify-between items-center p-2 rounded hover:bg-gray-100 transition"
              >

                <span className="font-medium">
                  {agent.agentName}
                </span>

                <span className="text-sm text-gray-500">
                  Leads: {agent.totalLeads} | Bookings: {agent.bookings}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

}