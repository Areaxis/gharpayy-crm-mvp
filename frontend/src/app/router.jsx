// import react and lazy loading tools
import React, { Suspense, lazy } from "react";

// import router tools
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// lazy load layout component
const Navbar = lazy(() => import("../components/Navbar"));

// lazy load pages
const Dashboard = lazy(() =>
  import("../features/dashboard/components/Dashboard")
);

const LeadsPage = lazy(() =>
  import("../features/leads/components/LeadsPage")
);

const VisitScheduler = lazy(() =>
  import("../features/visits/components/VisitScheduler")
);

// lazy load error page
const NotFound = lazy(() =>
  import("../components/NotFound")
);

// create router
const router = createBrowserRouter([
  {
    // layout route
    path: "/",

    // navbar acts as layout
    element: <Navbar />,

    // fallback page
    errorElement: <NotFound />,

    // child routes
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/leads",
        element: <LeadsPage />
      },
      {
        path: "/visits",
        element: <VisitScheduler />
      }
    ]
  }
]);

function Router() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default Router;