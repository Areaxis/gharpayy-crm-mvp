import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <div>

      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Dashboard</Link>
        <Link to="/leads">Leads</Link>
        <Link to="/visits">Visits</Link>
      </nav>

      <hr />

      {/* child routes render here */}
      <Outlet />

    </div>
  );
}