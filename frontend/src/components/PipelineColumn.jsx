import { memo } from "react";

function PipelineColumn({ title, leads }) {

  return (
    <div>

      <h3>{title}</h3>

      {leads.map((lead) => (
        <div key={lead._id}>{lead.name}</div>
      ))}

    </div>
  );
}

export default memo(PipelineColumn);