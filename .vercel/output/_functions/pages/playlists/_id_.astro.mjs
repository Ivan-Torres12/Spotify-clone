/* empty css                                    */
import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as createAstro, b as renderComponent, d as addAttribute, e as renderTransition } from '../../chunks/astro/server_c_7KyPNe.mjs';
import 'kleur/colors';
import { $ as $$Layout, C as Cardplaybuton } from '../../chunks/cardplaybuton_Cv1wCfVP.mjs';
import { a as allPlaylists, s as songs } from '../../chunks/data_wVF740hw.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Time = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 8V12L15 15" stroke="white" stroke-width="2" stroke-linecap="round"></path> <circle cx="12" cy="12" r="9" stroke="white" stroke-width="2"></circle> </svg>`;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/icons/time.astro", void 0);

const $$Astro$1 = createAstro();
const $$Musictable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Musictable;
  const { songs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<table class="table-auto text-left min-w-full divide-y divide-gray-500/50 z-10"> <thead> <tr class="text-gray-300 text-sm"> <th class="px-4 py-2 font-light">Reproducir</th> <th class="px-4 py-2 font-light">#</th> <th class="px-4 py-2 font-light">Titulo</th> <th class="px-4 py-2 font-light">Album</th> <th class="px-4 py-2 font-light">${renderComponent($$result, "Time", $$Time, {})}</th> </tr> </thead> <tbody> ${songs.map((song, index) => renderTemplate`<tr class="text-gray-300 text-sm font-light hover:bg-white/10 duration-300 cursor-pointer overflow-hidden rounded-lg"> <td class="flex items-center rounded-tl-lg rounded-bl-lg">${renderComponent($$result, "List", null, { "id": song.id, "album": song.albumId, "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/components/listplayersong", "client:component-export": "List" })}</td> <td class="px-2 py-2  w-5 ">${song.id}</td> <td class="px-2 py-2 flex gap-3"> <picture> <img class="w-10 h-10"${addAttribute(song.image, "src")}${addAttribute(song.title, "alt")}> </picture> <div class="flex flex-col"> <h3 class="text-white text-base font-normal">${song.title}</h3> <span>${song.artists.join(", ")}</span> </div> </td> <td class="px-2 py-2">${song.album}</td> <td class="px-2 py-2"> ${renderComponent($$result, "Songcontrol", null, { "id": song.id, "audioSrc": `/music/${song.albumId}/${song.id}.mp3`, "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/components/duracion", "client:component-export": "Songcontrol" })} </td> </tr>`)} </tbody> </table>`;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/components/musictable.astro", void 0);

const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const playlist = allPlaylists.find((playlist2) => playlist2.id === id);
  const playlistsongs = songs.filter((song) => song.albumId === playlist?.albumId);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Clone spotify" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="playlist-container" class="relative flex flex-col h-full overflow-x-hidden bg-zinc-900"${addAttribute(renderTransition($$result2, "blfohn46", "", `playlists ${id} box`), "data-astro-transition-scope")}> <div class="relative z-10 px-6 pt-6"> <header class="flex flex-row gap-8 px-6 mt-12"> <picture class=" aspect-square w-52 h-52 float-none"> <img${addAttribute(playlist?.cover, "src")} class="object-cover w-full h-full shadow-lg" alt=""${addAttribute(renderTransition($$result2, "hn6zdzif", "", `playlists ${playlist?.id} image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-col justify-between"> <h2 class="flex flex-1 items-end text-white">Playlist</h2> <div> <h1 class="title-clamp text-5xl font-bold block text-white"> ${playlist?.title} <span${addAttribute(renderTransition($$result2, "f5chrfne", "", `playlist ${playlist?.id} title`), "data-astro-transition-scope")}></span> </h1> </div> <div class="flex flex-1 items-end"> <div class="text-sm text-gray-100 font-normal"> <div${addAttribute(renderTransition($$result2, "ju5o4uae", "", `playlist ${playlist?.id} artist`), "data-astro-transition-scope")}> <span>${playlist?.artists.join(",")}</span> </div> <p class="mt-1"> <span class="text-white">Canciones ${playlistsongs.length}</span> 3 h aproximadamente
</p> </div> </div> </div> </header> <div class="pl-6 pt-6"> ${renderComponent($$result2, "Cardplaybuton", Cardplaybuton, { "id": id, "client:load": true, "size": "large", "client:component-hydration": "load", "client:component-path": "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/components/cardplaybuton", "client:component-export": "Cardplaybuton" })} </div> </div> <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80"></div> <section class="p-11 z-10"> ${renderComponent($$result2, "Musictable", $$Musictable, { "songs": playlistsongs })} </section> </div> ` })} `;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/pages/playlists/[id].astro", "self");

const $$file = "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/pages/playlists/[id].astro";
const $$url = "/playlists/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
