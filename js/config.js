// ============================================================
//  Configuration Supabase : MÊME base que le site CISSP
//  (les questions CCSP sont les chapitres 201-210 et 301-308).
//  La clé "publishable" est faite pour être publique : la sécurité
//  repose sur les règles RLS de supabase/schema.sql.
//
//  Laissez vide pour le MODE LOCAL (test sur votre PC) : le site lit
//  alors private/ccsp_guide.json + private/ccsp_practice.json.
// ============================================================
window.CCSP_CONFIG = {
  SUPABASE_URL: "https://dywhikydfvpnxytawoty.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_7ndfC8AsN4nVVEnWiKv5rQ_cis5sS8I",
  PASS_MARK: 70,            // % pour considérer un quiz "réussi"
  LOCAL_DATA: "private/ccsp_guide.json"
};
