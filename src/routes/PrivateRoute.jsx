import { useState, useEffect } from "react";
import { useAppSelector } from "../hooks/useAppSelector";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const user = useAppSelector((state) => state.user);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    const minTimer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 2500);

    const authCheck = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(authCheck);
    };
  }, []);

  if (isLoading || !minTimeElapsed) {
    return (
        <video
          autoPlay
          muted
          loop
          className="w-full max-h-screen object-fill"
        >
          <source src="/src/assets/videos/checklist.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}