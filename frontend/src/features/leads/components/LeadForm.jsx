import { useState } from "react";
import { api } from "../../../config/api";

export default function LeadForm({ refresh }) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [source, setSource] = useState("Website");

  const submitLead = async (e) => {

    e.preventDefault();

    await api.post("/leads", {
      name,
      phone,
      source
    });

    setName("");
    setPhone("");

    refresh();

  };

  return (

    <div className="bg-white rounded-xl shadow-sm p-5 mb-6">

      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Create Lead
      </h2>

      <form
        onSubmit={submitLead}
        className="grid md:grid-cols-4 gap-4 items-end"
      >

        {/* Name */}
        <div className="flex flex-col">

          <label className="text-sm text-gray-500 mb-1">
            Name
          </label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Lead name"
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

        </div>

        {/* Phone */}
        <div className="flex flex-col">

          <label className="text-sm text-gray-500 mb-1">
            Phone
          </label>

          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number"
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

        </div>

        {/* Source */}
        <div className="flex flex-col">

          <label className="text-sm text-gray-500 mb-1">
            Source
          </label>

          <select
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          >

            <option>Website</option>
            <option>WhatsApp</option>
            <option>Phone</option>
            <option>Walk-in</option>

          </select>

        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition transform hover:scale-[1.02]"
        >
          Create Lead
        </button>

      </form>

    </div>

  );

}