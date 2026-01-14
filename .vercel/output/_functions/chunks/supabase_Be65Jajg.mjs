import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://jxftgbvxapevwrimwbso.supabase.co",
  "sb_publishable_oaeW9PeSJK8zBiKK8V2RVA_vlv4Ij5w",
  {
    auth: {
      flowType: "pkce",
      persistSession: true,
      detectSessionInUrl: true,
      storage: typeof window !== "undefined" ? window.localStorage : void 0
    }
  }
);

export { supabase as s };
