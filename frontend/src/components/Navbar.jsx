import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <div>

      <nav className="flex gap-4 p-4 bg-gray-200">
        <Link to="/">Dashboard</Link>
        <Link to="/leads">Leads</Link>
        <Link to="/visits">Visits</Link>
      </nav>

      <Outlet />

    </div>
  );
}