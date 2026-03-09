import { useState } from "react";
import { api } from "../../../config/api";

export default function LeadForm({ refresh }) {

  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [source,setSource] = useState("Website");

  const submitLead = async (e) => {

    e.preventDefault();

    await api.post("/leads",{
      name,
      phone,
      source
    });

    setName("");
    setPhone("");

    refresh();

  };

  return (

    <form onSubmit={submitLead}>

      <h3>Create Lead</h3>

      <input
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        placeholder="Phone"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
      />

      <select
        value={source}
        onChange={(e)=>setSource(e.target.value)}
      >
        <option>Website</option>
        <option>WhatsApp</option>
        <option>Phone</option>
      </select>

      <button type="submit">Create Lead</button>

    </form>

  );

}