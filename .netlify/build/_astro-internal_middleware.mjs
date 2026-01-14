import 'es-module-lexer';
import './chunks/shared_9gEenf6c.mjs';
import { appendForwardSlash, removeTrailingForwardSlash } from '@astrojs/internal-helpers/path';
import { o as originPathnameSymbol, A as AstroError, F as ForbiddenRewrite } from './chunks/astro/server_CKUz1TYO.mjs';
import 'clsx';
import 'cookie';
import 'html-escaper';
import { createClient } from '@supabase/supabase-js';

function shouldAppendForwardSlash(trailingSlash, buildFormat) {
  switch (trailingSlash) {
    case "always":
      return true;
    case "never":
      return false;
    case "ignore": {
      switch (buildFormat) {
        case "directory":
          return true;
        case "preserve":
        case "file":
          return false;
      }
    }
  }
}

function setOriginPathname(request, pathname, trailingSlash, buildFormat) {
  if (!pathname) {
    pathname = "/";
  }
  const shouldAppendSlash = shouldAppendForwardSlash(trailingSlash, buildFormat);
  let finalPathname;
  if (pathname === "/") {
    finalPathname = "/";
  } else if (shouldAppendSlash) {
    finalPathname = appendForwardSlash(pathname);
  } else {
    finalPathname = removeTrailingForwardSlash(pathname);
  }
  Reflect.set(request, originPathnameSymbol, encodeURIComponent(finalPathname));
}

function getParams(route, pathname) {
  if (!route.params.length) return {};
  const paramsMatch = route.pattern.exec(pathname) || route.fallbackRoutes.map((fallbackRoute) => fallbackRoute.pattern.exec(pathname)).find((x) => x);
  if (!paramsMatch) return {};
  const params = {};
  route.params.forEach((key, i) => {
    if (key.startsWith("...")) {
      params[key.slice(3)] = paramsMatch[i + 1] ? paramsMatch[i + 1] : void 0;
    } else {
      params[key] = paramsMatch[i + 1];
    }
  });
  return params;
}

const apiContextRoutesSymbol = Symbol.for("context.routes");

function sequence(...handlers) {
  const filtered = handlers.filter((h) => !!h);
  const length = filtered.length;
  if (!length) {
    return defineMiddleware((_context, next) => {
      return next();
    });
  }
  return defineMiddleware((context, next) => {
    let carriedPayload = void 0;
    return applyHandle(0, context);
    function applyHandle(i, handleContext) {
      const handle = filtered[i];
      const result = handle(handleContext, async (payload) => {
        if (i < length - 1) {
          if (payload) {
            let newRequest;
            if (payload instanceof Request) {
              newRequest = payload;
            } else if (payload instanceof URL) {
              newRequest = new Request(payload, handleContext.request.clone());
            } else {
              newRequest = new Request(
                new URL(payload, handleContext.url.origin),
                handleContext.request.clone()
              );
            }
            const oldPathname = handleContext.url.pathname;
            const pipeline = Reflect.get(handleContext, apiContextRoutesSymbol);
            const { routeData, pathname } = await pipeline.tryRewrite(
              payload,
              handleContext.request
            );
            if (pipeline.serverLike === true && handleContext.isPrerendered === false && routeData.prerender === true) {
              throw new AstroError({
                ...ForbiddenRewrite,
                message: ForbiddenRewrite.message(
                  handleContext.url.pathname,
                  pathname,
                  routeData.component
                ),
                hint: ForbiddenRewrite.hint(routeData.component)
              });
            }
            carriedPayload = payload;
            handleContext.request = newRequest;
            handleContext.url = new URL(newRequest.url);
            handleContext.params = getParams(routeData, pathname);
            handleContext.routePattern = routeData.route;
            setOriginPathname(
              handleContext.request,
              oldPathname,
              pipeline.manifest.trailingSlash,
              pipeline.manifest.buildFormat
            );
          }
          return applyHandle(i + 1, handleContext);
        } else {
          return next(payload ?? carriedPayload);
        }
      });
      return result;
    }
  });
}

function defineMiddleware(fn) {
  return fn;
}

const onRequest$1 = defineMiddleware(async ({ request, locals }, next) => {
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
    "https://jxftgbvxapevwrimwbso.supabase.co",
    "sb_publishable_oaeW9PeSJK8zBiKK8V2RVA_vlv4Ij5w",
    {
      auth: {
        persistSession: false
      },
      global: {
        headers: {
          Cookie: request.headers.get("cookie") ?? ""
        }
      }
    }
  );
  let user = null;
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
    const { data } = await supabase.auth.getUser();
    user = data.user;
  }
  if (!user && request.url.includes("/dashboard")) {
    return Response.redirect(new URL("/login", request.url), 302);
  }
  locals.user = user;
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
