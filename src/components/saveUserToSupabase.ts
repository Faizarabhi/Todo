import { supabase } from "../lib/supabaseClient";

export async function saveUserToSupabase(decoded: {
  email: string;
  name: string;
  picture: string;
}) {
  const { data: existing, error: fetchError } = await supabase
    .from("users")
    .select("*")
    .eq("email", decoded.email)
    .single();

  if (fetchError && fetchError.code !== "PGRST116") {
    console.error("Erreur lors de la recherche de l'utilisateur :", fetchError);
    return;
  }

  if (existing) {
    console.log("Utilisateur déjà présent :", existing);
    return;
  }

  const { error: insertError } = await supabase.from("users").insert({
    email: decoded.email,
    name: decoded.name,
    picture: decoded.picture,
  });

  if (insertError) {
    console.error("Erreur lors de l'insertion :", insertError);
  } else {
    console.log("Nouvel utilisateur enregistré dans Supabase");
  }
}
