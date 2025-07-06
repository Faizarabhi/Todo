import { useState, useEffect } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const user = useAppSelector((state) => state.user);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading authentication state...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}