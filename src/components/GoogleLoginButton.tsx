import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { setUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export const GoogleLoginButton = ({ clientId }: { clientId: string }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={({ credential }) => {
          if (!credential) return;

          const decoded: any = jwtDecode(credential);

          const isExpired = decoded.exp * 1000 < Date.now();
          if (isExpired) {
            console.warn("Token expiré");
            return;
          }

          const user = {
            email: decoded.email,
            name: decoded.name,
            picture: decoded.picture,
          };

          localStorage.setItem("user", JSON.stringify(user));
          dispatch(setUser(user));
          navigate("/");
        }}
        onError={() => {
          console.error("Erreur lors de la connexion");
        }}
      />
    </GoogleOAuthProvider>
  );
};
