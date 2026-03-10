import { useState } from "react";
import { api } from "../../../config/api";

export default function LeadForm({ refresh }) {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    moveInDate: "",
    location: "",
    inBlr: "",
    gender: "",
    occupation: "",
    month: "",
    score: "",
    owner: ""
  });

  const update = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };

  const submitLead = async (e) => {

    e.preventDefault();

    await api.post("/leads", form);

    setForm({
      name: "",
      phone: "",
      moveInDate: "",
      location: "",
      inBlr: "",
      gender: "",
      occupation: "",
      month: "",
      score: "",
      owner: ""
    });

    refresh();

  };

  return (

    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Create Lead
      </h2>

      <form
        onSubmit={submitLead}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >

        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={update}
          className="input"
        />

        <input
          name="phone"
          placeholder="Mobile Number"
          value={form.phone}
          onChange={update}
          className="input"
        />

        <input
          type="date"
          name="moveInDate"
          value={form.moveInDate}
          onChange={update}
          className="input"
        />

        <input
          name="location"
          placeholder="Preferred Location"
          value={form.location}
          onChange={update}
          className="input"
        />

        <select
          name="inBlr"
          value={form.inBlr}
          onChange={update}
          className="input"
        >
          <option value="">BLR / Not in BLR</option>
          <option value="Yes">Yes in BLR</option>
          <option value="No">Not in BLR</option>
        </select>

        <select
          name="gender"
          value={form.gender}
          onChange={update}
          className="input"
        >
          <option value="">Gender</option>
          <option>Boys</option>
          <option>Girls</option>
          <option>Coliving</option>
        </select>

        <select
          name="occupation"
          value={form.occupation}
          onChange={update}
          className="input"
        >
          <option value="">Student / Working</option>
          <option>Student</option>
          <option>Working</option>
          <option>Intern</option>
        </select>

        <select
          name="month"
          value={form.month}
          onChange={update}
          className="input"
        >
          <option value="">Preferred Month</option>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>

        <input
          type="number"
          name="score"
          min="1"
          max="10"
          placeholder="Lead Score (1-10)"
          value={form.score}
          onChange={update}
          className="input"
        />

        <input
          name="owner"
          placeholder="Lead Owner"
          value={form.owner}
          onChange={update}
          className="input"
        />

        <button
          className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
        >
          Create Lead
        </button>

      </form>

    </div>

  );

}