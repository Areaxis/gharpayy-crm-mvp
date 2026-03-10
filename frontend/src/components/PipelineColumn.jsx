import { memo } from "react";
import { statusColor } from "../utils/statusColor";
import { getInitials } from "../utils/getInitials";

function PipelineColumn({ title, leads }) {

  return (

    <div className="min-w-[260px] bg-gray-100 rounded-xl p-4">

      <h3 className="font-semibold mb-4 text-gray-700">
        {title}
      </h3>

      <div className="space-y-3">

        {leads.map(lead => (

          <div
            key={lead._id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition p-3"
          >

            <div className="font-medium">
              {lead.name}
            </div>

            <div className="text-sm text-gray-500">
              {lead.phone}
            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default memo(PipelineColumn);