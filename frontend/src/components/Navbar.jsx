import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {

  const linkBase =
    "px-4 py-2 rounded-md text-sm font-medium transition";

  const active =
    "bg-white text-blue-700 shadow-sm";

  const inactive =
    "text-white/90 hover:bg-white/20";

  return (

    <div className="min-h-screen bg-gray-50">

      <nav className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 shadow-md">

        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">

            <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white text-blue-600 font-bold shadow-sm">
              G
            </div>

            <span className="text-white font-semibold text-lg tracking-wide">
              Gharpayy CRM
            </span>

          </div>

          {/* Navigation */}
          <div className="flex gap-2">

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : inactive}`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/leads"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : inactive}`
              }
            >
              Leads
            </NavLink>

            <NavLink
              to="/visits"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? active : inactive}`
              }
            >
              Visits
            </NavLink>

          </div>

        </div>

      </nav>

      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>

    </div>

  );

}