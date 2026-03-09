import { memo } from "react";
import { statusColor } from "../utils/statusColor";
import { getInitials } from "../utils/getInitials";

function PipelineColumn({ title, leads }) {

  return (

    <div className="min-w-[220px] bg-gray-100 rounded-lg p-4">

      <h3 className="font-bold mb-3">{title}</h3>

      {leads.map((lead) => (

        <div
          key={lead._id}
          className="bg-white rounded-md shadow p-3 mb-3"
        >

          <div className="flex items-center gap-3">

            {/* Avatar */}
            <div className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center text-sm font-bold">
              {getInitials(lead.name)}
            </div>

            <div>

              <div className="font-semibold">
                {lead.name}
              </div>

              <div className="text-sm text-gray-600">
                {lead.phone}
              </div>

            </div>

          </div>

          <span
            className={`text-white text-xs px-2 py-1 rounded mt-2 inline-block ${statusColor(lead.status)}`}
          >
            {lead.status}
          </span>

        </div>

      ))}

    </div>

  );

}

export default memo(PipelineColumn);