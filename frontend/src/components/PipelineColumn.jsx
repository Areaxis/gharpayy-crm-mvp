import { memo } from "react";
import { statusColor } from "../utils/statusColor";
import { getInitials } from "../utils/getInitials";

function getScoreColor(score) {

  if (score >= 8) {
    return "bg-green-100 text-green-700";
  }

  if (score >= 5) {
    return "bg-yellow-100 text-yellow-700";
  }

  return "bg-red-100 text-red-700";
}

function PipelineColumn({ title, leads }) {

  return (

    <div className="min-w-[260px] bg-gray-100 rounded-xl p-4">

      <h3 className="font-semibold mb-4 text-gray-700">
        {title}
      </h3>

      <div className="space-y-3">

        {leads.map((lead) => (

          <div
            key={lead._id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition p-3"
          >

            {/* Top Row */}
            <div className="flex items-center justify-between mb-1">

              <div className="flex items-center gap-2">

                <div className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-600">
                  {getInitials(lead.name)}
                </div>

                <div className="font-medium text-gray-800">
                  {lead.name}
                </div>

              </div>

              {lead.score && (
                <div
                  className={`text-xs font-semibold px-2 py-1 rounded ${getScoreColor(lead.score)}`}
                >
                  {lead.score}/10
                </div>
              )}

            </div>

            <div className="text-sm text-gray-500">
              {lead.phone}
            </div>

            {lead.location && (
              <div className="text-xs text-gray-400">
                {lead.location}
              </div>
            )}

            <div
              className={`text-xs mt-2 inline-block px-2 py-1 rounded ${statusColor(title)}`}
            >
              {title}
            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default memo(PipelineColumn);