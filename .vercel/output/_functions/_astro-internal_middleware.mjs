import { d as defineMiddleware, s as sequence } from './chunks/index_ypFga8oi.mjs';
import { createClient } from '@supabase/supabase-js';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_yP6VF6gw.mjs';
import './chunks/astro/server_D7iSzgVg.mjs';
import 'clsx';
import 'cookie';

const onRequest$1 = defineMiddleware(async ({ request, locals }, next) => {
  const supabaseUrl = "https://jxftgbvxapevwrimwbso.supabase.co";
  const supabaseAnonKey = "sb_publishable_oaeW9PeSJK8zBiKK8V2RVA_vlv4Ij5w";
  let user = null;
  {
    const cookieHeader = request.headers.get("cookie") ?? "";
    const cookies = Object.fromEntries(
      cookieHeader.split("; ").map((c) => {
        const [key, value] = c.split("=");
        return [key, value];
      })
    );
    const accessToken = cookies["sb-access-token"];
    const refreshToken = cookies["sb-refresh-token"];
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false
      },
      global: {
        headers: {
          Cookie: request.headers.get("cookie") ?? ""
        }
      }
    });
    if (accessToken) {
      try {
        const { data, error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken || ""
        });
        if (!error && data.user) {
          user = data.user;
        }
      } catch (e) {
      }
    } else {
      try {
        const { data } = await supabase.auth.getUser();
        user = data.user;
      } catch (e) {
      }
    }
  }
  locals.user = user;
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
