import { defineMiddleware } from "astro/middleware";
import { createClient } from "@supabase/supabase-js";

export const onRequest = defineMiddleware(async ({ request, locals }, next) => {
  // Check if Supabase credentials are configured
  const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

  let user = null;

  // Only attempt auth if Supabase is configured
  if (supabaseUrl && supabaseAnonKey) {
    // Extract tokens from cookies
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
        persistSession: false,
      },
      global: {
        headers: {
          Cookie: request.headers.get("cookie") ?? "",
        },
      },
    });

    // If we have tokens, try to restore the session
    if (accessToken) {
      try {
        const { data, error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken || "",
        });

        if (!error && data.user) {
          user = data.user;
        }
      } catch (e) {
        // Session restoration failed, user will be null
      }
    } else {
      // No tokens, try to get user from Supabase
      try {
        const { data } = await supabase.auth.getUser();
        user = data.user;
      } catch (e) {
        // Error getting user, continue without auth
      }
    }
  }

  // Redirect to login if accessing protected route without user
  if (!user && request.url.includes("/dashboard")) {
    return Response.redirect(new URL("/login", request.url), 302);
  }

  locals.user = user;
  return next();
});
