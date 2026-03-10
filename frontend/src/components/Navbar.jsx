import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {

  const base =
    "px-3 py-1 rounded-md transition";

  const active =
    "bg-white text-blue-600 font-medium";

  const inactive =
    "text-white hover:bg-white/20";

  return (

    <div>

      <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md">

        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:px-6">

          {/* Logo */}

          <div className="flex items-center gap-2 text-white font-semibold">

            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center text-blue-600 font-bold">
              G
            </div>

            <span className="text-sm md:text-lg">
              Gharpayy CRM
            </span>

          </div>


          {/* Navigation */}

          <div className="flex gap-2 md:gap-4 text-sm md:text-base">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/leads"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              Leads
            </NavLink>

            <NavLink
              to="/visits"
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              Visits
            </NavLink>

          </div>

        </div>

      </nav>

      <Outlet />

    </div>

  );

}