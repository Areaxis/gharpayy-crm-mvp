import { useState } from "react";
import { api } from "../../../config/api";

export default function LeadForm() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const submitLead = async () => {

    await api.post("/leads", {
      name,
      phone,
      source: "Website"
    });

    alert("Lead created");

  };

  return (
    <div>

      <h2>Create Lead</h2>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Phone"
        onChange={(e) => setPhone(e.target.value)}
      />

      <button onClick={submitLead}>
        Submit
      </button>

    </div>
  );
}