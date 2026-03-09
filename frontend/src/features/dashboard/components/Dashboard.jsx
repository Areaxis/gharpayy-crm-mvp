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

      {/* Top Metrics */}
      <div className="grid grid-cols-3 gap-4">

        <div className="bg-white shadow rounded p-4">
          <h3 className="text-gray-500">Total Leads</h3>
          <p className="text-2xl font-bold">
            {stats.totalLeads ?? 0}
          </p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h3 className="text-gray-500">Visits Scheduled</h3>
          <p className="text-2xl font-bold">
            {stats.visits ?? 0}
          </p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h3 className="text-gray-500">Conversion Rate</h3>
          <p className="text-2xl font-bold">
            {stats.conversionRate ?? 0}%
          </p>
        </div>

      </div>


      {/* Dashboard Sections */}
      <div className="grid grid-cols-2 gap-6">

        {/* Recent Activity */}
        <div className="bg-white shadow rounded p-4">

          <h2 className="text-lg font-semibold mb-3">
            Recent Activity
          </h2>

          <div className="space-y-2">

            {stats.recentActivity?.length ? (

              stats.recentActivity.map((activity, index) => (

                <div
                  key={index}
                  className="text-sm text-gray-700 border-b pb-1"
                >
                  <span className="font-medium">
                    {activity.leadName}
                  </span>{" "}
                  — {activity.action}
                </div>

              ))

            ) : (

              <p className="text-sm text-gray-400">
                No recent activity
              </p>

            )}

          </div>

        </div>


        {/* Agent Leaderboard */}
        <div className="bg-white shadow rounded p-4">

          <h2 className="text-lg font-semibold mb-3">
            Agent Performance
          </h2>

          <div className="space-y-2">

            {stats.leaderboard?.length ? (

              stats.leaderboard.map((agent, index) => (

                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-1"
                >

                  <span className="font-medium">
                    {agent.agentName}
                  </span>

                  <span className="text-sm text-gray-600">
                    Leads: {agent.totalLeads} | Bookings: {agent.bookings}
                  </span>

                </div>

              ))

            ) : (

              <p className="text-sm text-gray-400">
                No agent data
              </p>

            )}

          </div>

        </div>

      </div>

    </div>

  );

}