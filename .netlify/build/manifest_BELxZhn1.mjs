import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { N as NOOP_MIDDLEWARE_HEADER, k as decodeKey } from './chunks/astro/server_CKUz1TYO.mjs';
import 'clsx';
import 'cookie';
import './chunks/shared_9gEenf6c.mjs';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/MuhammadMuneerKhan/Desktop/ui-library/","cacheDir":"file:///C:/Users/MuhammadMuneerKhan/Desktop/ui-library/node_modules/.astro/","outDir":"file:///C:/Users/MuhammadMuneerKhan/Desktop/ui-library/dist/","srcDir":"file:///C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/","publicDir":"file:///C:/Users/MuhammadMuneerKhan/Desktop/ui-library/public/","buildClientDir":"file:///C:/Users/MuhammadMuneerKhan/Desktop/ui-library/dist/","buildServerDir":"file:///C:/Users/MuhammadMuneerKhan/Desktop/ui-library/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"components/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/components","isIndex":false,"type":"page","pattern":"^\\/components\\/?$","segments":[[{"content":"components","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/components.astro","pathname":"/components","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"docs/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/docs","isIndex":false,"type":"page","pattern":"^\\/docs\\/?$","segments":[[{"content":"docs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/docs.astro","pathname":"/docs","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"home/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/home","isIndex":false,"type":"page","pattern":"^\\/home\\/?$","segments":[[{"content":"home","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/home.astro","pathname":"/home","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"login/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"signup/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/signup","isIndex":false,"type":"page","pattern":"^\\/signup\\/?$","segments":[[{"content":"signup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signup.astro","pathname":"/signup","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DZHjYD5R.css"}],"routeData":{"route":"/dashboard","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/pages/docs.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/docs@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/pages/components.astro",{"propagation":"none","containsHead":true}],["C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/pages/docs/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/pages/home.astro",{"propagation":"none","containsHead":true}],["C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/pages/login.astro",{"propagation":"none","containsHead":true}],["C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/pages/services.astro",{"propagation":"none","containsHead":true}],["C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/pages/signup.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/components@_@astro":"pages/components.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"pages/dashboard.astro.mjs","\u0000@astro-page:src/pages/docs/[slug]@_@astro":"pages/docs/_slug_.astro.mjs","\u0000@astro-page:src/pages/docs@_@astro":"pages/docs.astro.mjs","\u0000@astro-page:src/pages/home@_@astro":"pages/home.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/signup@_@astro":"pages/signup.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BELxZhn1.mjs","C:/Users/MuhammadMuneerKhan/Desktop/ui-library/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","C:\\Users\\MuhammadMuneerKhan\\Desktop\\ui-library\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","\u0000astro:assets":"chunks/_astro_assets_udNwDzQo.mjs","C:\\Users\\MuhammadMuneerKhan\\Desktop\\ui-library\\.astro\\content-modules.mjs":"chunks/content-modules_BVus3i4M.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_Cns28Oxd.mjs","C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/content/components/hero.mdx?astroPropagatedAssets":"chunks/hero_iZSQyNyf.mjs","C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/content/components/hero.mdx":"chunks/hero_Cq7jTR5Y.mjs","C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/components/auth/LoginForm.jsx":"_astro/LoginForm.CNANLb0d.js","C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/components/auth/SignupForm.jsx":"_astro/SignupForm.CK860Jrq.js","C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/components/auth/LogoutButton.jsx":"_astro/LogoutButton.B32cIDLf.js","@astrojs/react/client.js":"_astro/client.CSQ4PDHQ.js","C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/pages/about.astro?astro&type=script&index=0&lang.ts":"_astro/about.astro_astro_type_script_index_0_lang.CCGDY5W8.js","C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/pages/home.astro?astro&type=script&index=0&lang.ts":"_astro/home.astro_astro_type_script_index_0_lang.CCGDY5W8.js","C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/pages/home.astro?astro&type=script&index=1&lang.ts":"_astro/home.astro_astro_type_script_index_1_lang.CCGDY5W8.js","C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/components/Footer.astro?astro&type=script&index=0&lang.ts":"_astro/Footer.astro_astro_type_script_index_0_lang.DlsOZQej.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/pages/about.astro?astro&type=script&index=0&lang.ts","console.log(\"https://jxftgbvxapevwrimwbso.supabase.co\");"],["C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/pages/home.astro?astro&type=script&index=0&lang.ts","console.log(\"https://jxftgbvxapevwrimwbso.supabase.co\");"],["C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/pages/home.astro?astro&type=script&index=1&lang.ts","console.log(\"https://jxftgbvxapevwrimwbso.supabase.co\");"],["C:/Users/MuhammadMuneerKhan/Desktop/ui-library/src/components/Footer.astro?astro&type=script&index=0&lang.ts","document.getElementById(\"year\").textContent=new Date().getFullYear().toString();"]],"assets":["/_astro/about.DZHjYD5R.css","/favicon.svg","/_astro/client.CSQ4PDHQ.js","/_astro/index.WFquGv8Z.js","/_astro/LoginForm.CNANLb0d.js","/_astro/LogoutButton.B32cIDLf.js","/_astro/SignupForm.CK860Jrq.js","/_astro/supabase.ByVC_i-z.js","/about/index.html","/blog/index.html","/components/index.html","/contact/index.html","/docs/index.html","/home/index.html","/login/index.html","/services/index.html","/signup/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"4/4TnhnCV8ZuTaH/tvGRPpULhaPPnilb4cz53Kk1TEo=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
