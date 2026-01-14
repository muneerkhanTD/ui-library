import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BELxZhn1.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/components.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/dashboard.astro.mjs');
const _page6 = () => import('./pages/docs/_slug_.astro.mjs');
const _page7 = () => import('./pages/docs.astro.mjs');
const _page8 = () => import('./pages/home.astro.mjs');
const _page9 = () => import('./pages/login.astro.mjs');
const _page10 = () => import('./pages/services.astro.mjs');
const _page11 = () => import('./pages/signup.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog.astro", _page2],
    ["src/pages/components.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/dashboard.astro", _page5],
    ["src/pages/docs/[slug].astro", _page6],
    ["src/pages/docs.astro", _page7],
    ["src/pages/home.astro", _page8],
    ["src/pages/login.astro", _page9],
    ["src/pages/services.astro", _page10],
    ["src/pages/signup.astro", _page11],
    ["src/pages/index.astro", _page12]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "796adb7a-021c-4c94-8709-e3459e36b78d"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
