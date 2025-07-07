import { useAppSelector } from "../hooks/useAppSelector";

export default function Home() {
  const user = useAppSelector((state) => state.user);

  return (
    <div className="p-4">
      <h1>Bienvenue, {user.user_metadata?.name || user.email} !</h1>
    </div>
  );
}
