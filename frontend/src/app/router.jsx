import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Navbar = lazy(() => import("../components/Navbar"));
const Dashboard = lazy(() => import("../features/dashboard/components/Dashboard"));
const LeadsPage = lazy(() => import("../features/leads/components/LeadsPage"));
const VisitScheduler = lazy(() => import("../features/visits/components/VisitScheduler"));
const NotFound = lazy(() => import("../components/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <NotFound />,

    children: [
      { index: true, element: <Dashboard /> },
      { path: "leads", element: <LeadsPage /> },
      { path: "visits", element: <VisitScheduler /> }
    ]
  }
]);

export default function Router() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}