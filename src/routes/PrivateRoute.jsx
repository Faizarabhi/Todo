import { useAppSelector } from "../hooks/useAppSelector";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const user = useAppSelector((state) => state.user);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
