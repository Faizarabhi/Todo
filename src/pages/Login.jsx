import { GoogleLoginButton } from "../components/GoogleLoginButton";

const Login = () => {
  const handleLoginSuccess = (user) => {
    console.log("Utilisateur :", user);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <span className="text-lg font-semibold">Login</span>
      <GoogleLoginButton
        clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
        onSuccess={handleLoginSuccess}
      />
      <input
        type="text"
        placeholder="Email"
        className="mt-4 p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="password"
        className="mt-4 p-2 border border-gray-300 rounded"
      />
      <input
        type="submit"
        className="mt-4 p-2  border bg-red-400 border-gray-300 rounded"
      />
    </div>
  );
};

export default Login;
