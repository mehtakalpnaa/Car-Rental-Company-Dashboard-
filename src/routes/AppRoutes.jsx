import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute"; 
import PublicRoute from "./PublicRoute";      
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Dashboard from "../pages/Dashboard";
import Drivers from "../pages/Drivers";
import Bookings from "../pages/Bookings";
import Payments from "../pages/Payments";

function AppRoutes() {
  return (
    <Routes>
     
      <Route element={<PublicRoute><Outlet /></PublicRoute>}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/signin" />} /> 
      </Route>

     
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="drivers" element={<Drivers />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="payments" element={<Payments />} />
        </Route>
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
export default AppRoutes;