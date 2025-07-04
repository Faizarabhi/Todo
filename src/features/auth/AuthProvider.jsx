import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { setUser } from "./authSlice";

export default function AuthProvider({ children }) {
  const dispatch = useAppDispatch();

 useEffect(() => {
  const stored = localStorage.getItem("user");
  if (stored) {
    try {
      const parsed = JSON.parse(stored) ;
      dispatch(setUser(parsed));
    } catch (e) {
      console.error("Invalid user data in localStorage", e);
    }
  }
}, [dispatch]);

  return <>{children}</>;
}
