import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

function DashboardPages({ children }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route
          path="/dashboard"
          element={
            <DashboardPages>
              <Dashboard />
            </DashboardPages>
          }
        />

        <Route
          path="/users"
          element={
            <DashboardPages>
              <Users />
            </DashboardPages>
          }
        />

        <Route
          path="/analytics"
          element={
            <DashboardPages>
              <Analytics />
            </DashboardPages>
          }
        />

        <Route
          path="/settings"
          element={
            <DashboardPages>
              <Settings />
            </DashboardPages>
          }
        />

        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}