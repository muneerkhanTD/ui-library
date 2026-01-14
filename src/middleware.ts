import { defineMiddleware } from "astro/middleware";
import { createClient } from "@supabase/supabase-js";

export const onRequest = defineMiddleware(async ({ request, locals }, next) => {
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

  const supabase = createClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
    {
      auth: {
        persistSession: false,
      },
      global: {
        headers: {
          Cookie: request.headers.get("cookie") ?? "",
        },
      },
    }
  );

  let user = null;

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
    const { data } = await supabase.auth.getUser();
    user = data.user;
  }

  if (!user && request.url.includes("/dashboard")) {
    return Response.redirect(new URL("/login", request.url), 302);
  }

  locals.user = user;
  return next();
});
