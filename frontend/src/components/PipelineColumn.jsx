import { memo } from "react";

function PipelineColumn({title,leads}){

  return (

    <div style={{
      minWidth:"200px",
      border:"1px solid #ddd",
      padding:"10px"
    }}>

      <h4>{title}</h4>

      {leads.map(lead => (

        <div key={lead._id} style={{
          border:"1px solid #ccc",
          padding:"5px",
          marginBottom:"5px"
        }}>

          <strong>{lead.name}</strong>
          <p>{lead.phone}</p>

        </div>

      ))}

    </div>

  );

}

export default memo(PipelineColumn);