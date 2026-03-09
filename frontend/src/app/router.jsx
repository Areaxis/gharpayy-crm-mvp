import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Dashboard = lazy(() =>
  import("../features/dashboard/components/Dashboard")
);

const LeadsPage = lazy(() =>
  import("../features/leads/components/LeadsPage")
);

const VisitScheduler = lazy(() =>
  import("../features/visits/components/VisitScheduler")
);

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>

          <Route path="/" element={<Dashboard />} />
          <Route path="/leads" element={<LeadsPage />} />
          <Route path="/visits" element={<VisitScheduler />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}