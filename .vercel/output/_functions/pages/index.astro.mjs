/* empty css                                 */
import { c as createComponent, a as createAstro, m as maybeRenderHead, b as renderComponent, d as addAttribute, e as renderTransition, r as renderTemplate } from '../chunks/astro/server_c_7KyPNe.mjs';
import 'kleur/colors';
import { C as Cardplaybuton, $ as $$Layout } from '../chunks/cardplaybuton_Cv1wCfVP.mjs';
import { p as playlists } from '../chunks/data_wVF740hw.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Playlistcard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Playlistcard;
  const { playlists } = Astro2.props;
  const { id, cover, title, artists, color } = playlists;
  const artistsStrings = artists.join(",");
  return renderTemplate`${maybeRenderHead()}<article class="group relative shadow-lg hover:shadow-xl bg-zinc-500/30"> <div class="absolute right-4 bottom-20 translate-y-4 transition-all duration-500 opacity-0  group-hover:translate-y-0 group-hover:opacity-100 z-10"> ${renderComponent($$result, "Cardplaybuton", Cardplaybuton, { "id": id, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/components/cardplaybuton.jsx", "client:component-export": "Cardplaybuton" })} </div> <a${addAttribute(`/playlists/${id}`, "href")} class="playlist-item flex transition-all duration-300   relative p-2 overflow-hidden gap-2 pb-6 rounded-md hover:bg-zinc-500 w-40 flex-col"${addAttribute(renderTransition($$result, "ldj4dufi", "", `playlists ${id} box`), "data-astro-transition-scope")}> <picture class=" aspect-square w-full h-auto float-none"> <img${addAttribute(cover, "src")} class="object-cover w-full h-full rounded-md" alt=""${addAttribute(renderTransition($$result, "24yhgml5", "", `playlists ${id} image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-auto flex-col truncate"> <h4 class="text-white font-medium text-sm"${addAttribute(renderTransition($$result, "cmkf6bum", "", `playlist ${id} title`), "data-astro-transition-scope")}> ${title} </h4> <span class="text-gray-400 text-xs"${addAttribute(renderTransition($$result, "rm7hxtpb", "", `playlist ${id} artist`), "data-astro-transition-scope")}>${artistsStrings}</span> </div> </a> </article>`;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/components/playlistcard.astro", "self");

const $$Hora = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1 id="saludos" class="text-4xl font-bold text-white"></h1> <h3 id="time" class="text-4xl font-bold text-white">--:--:--</h3>`;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/components/hora.astro", void 0);

const $$Clima = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="absolute top-0 right-0 flex items-start justify-end  p-4"> <div class="flex items-center "> <!-- Icono del clima --> <img id="weather-icon" class="w-10 h-10 hidden" alt="icono del clima"> <!-- Texto del clima --> <div> <span class="text-lg font-semibold text-white">Clima:</span> <span class="text-lg font-bold text-yellow-300" id="temperature">Cargando...</span> </div> </div> </div>`;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/components/clima.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Clone spotify" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="playlist-container" class="relative transition-all duration-1000 bg-green-600"> <div class="relative z-10 px-6 pt-6 "> ${renderComponent($$result2, "Hora", $$Hora, {})} ${renderComponent($$result2, "Clima", $$Clima, {})} <div class=" flex flex-wrap mt-6 gap-4"> ${playlists.map((playlists2) => renderTemplate`${renderComponent($$result2, "Playlistcard", $$Playlistcard, { "playlists": playlists2 })}`)} </div> </div> <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80"></div> </div> ` })} `;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/pages/index.astro", void 0);

const $$file = "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
