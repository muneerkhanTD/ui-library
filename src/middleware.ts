import { defineMiddleware } from "astro/middleware";
import { createClient } from "@supabase/supabase-js";

export const onRequest = defineMiddleware(async ({ request, locals }, next) => {
  try {
    // Check if Supabase credentials are configured
    const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

    let user = null;

    // Only attempt auth if Supabase is configured
    if (supabaseUrl && supabaseAnonKey) {
      try {
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
          const { data, error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken || "",
          });

          if (!error && data.user) {
            user = data.user;
          }
        } else {
          // No tokens, try to get user from Supabase
          const { data } = await supabase.auth.getUser();
          user = data.user;
        }
      } catch (e) {
        // Auth error, continue without user
        console.error("Auth error:", e);
      }
    }

    // Allow dashboard access without auth (demo mode)
    // Future: uncomment this to require authentication
    // if (!user && request.url.includes("/dashboard")) {
    //   return Response.redirect(new URL("/login", request.url), 302);
    // }

    locals.user = user;
    return next();
  } catch (error) {
    // Catch any unexpected errors and log them
    console.error("Middleware error:", error);
    // Allow request to continue even if middleware fails
    return next();
  }
});
