import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CgDBby4k.mjs';
import { manifest } from './manifest_3xRhBhEQ.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/get-playlist.json.astro.mjs');
const _page2 = () => import('./pages/playlists/_id_.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/get-playlist.json.js", _page1],
    ["src/pages/playlists/[id].astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "90e5a09e-e421-44fe-bdd9-79ee17686da2",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
