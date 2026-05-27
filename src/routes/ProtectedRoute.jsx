import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  
  const user = localStorage.getItem("user"); 

  return user ? <Outlet /> : <Navigate to="/signin" replace />;
};
export default ProtectedRoute;