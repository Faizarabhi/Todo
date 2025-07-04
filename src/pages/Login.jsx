import { GoogleLoginButton } from "../components/GoogleLoginButton";

const Login = () => {
  const handleLoginSuccess = (user) => {
    console.log("Utilisateur :", user);
  };

  return (
    <div>
      <GoogleLoginButton
        clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
        onSuccess={handleLoginSuccess}
      />
    </div>
  );
};

export default Login;
