import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as createAstro, d as addAttribute, g as renderSlot, b as renderComponent, h as renderScript, i as renderHead, e as renderTransition } from './astro/server_c_7KyPNe.mjs';
import 'kleur/colors';
import cn from 'clsx';
import { p as playlists } from './data_wVF740hw.mjs';
/* empty css                         */
import { jsxs, jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { create } from 'zustand';

const $$Library = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg fill="currentColor" width="20px" height="20px"> <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path> </svg>`;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/icons/Library.astro", void 0);

const $$Astro$6 = createAstro();
const $$Sideiconsmenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Sideiconsmenu;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="cursor-pointer duration-300 w-8 h-8 rounded-full  bg-zinc-800 hover:bg-zinc-700 hover:text-white"${addAttribute(href, "href")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/components/sideiconsmenu.astro", void 0);

const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="18px" height="18px" fill="currentColor" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path> </svg>`;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/icons/search.astro", void 0);

const $$Astro$5 = createAstro();
const $$Sidemenuitem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Sidemenuitem;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="flex items-center font-medium duration-300 hover:text-white cursor-pointer"${addAttribute(href, "href")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/components/sidemenuitem.astro", void 0);

const $$More = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="20px" height="20px" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"></path> </svg>`;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/icons/more.astro", void 0);

const $$Arrowicon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="24px" height="24px" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path> </svg>`;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/icons/arrowicon.astro", void 0);

const $$Listicon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="23px" height="23px" fill="currentColor" viewBox="0 0 17 17"> <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path> </svg>`;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/icons/listicon.astro", void 0);

const $$Astro$4 = createAstro();
const $$Sidebutton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Sidebutton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="cursor-pointer duration-300 font-medium w-20 h-7 bg-zinc-700 rounded-2xl flex items-center justify-center hover:bg-zinc-600"${addAttribute(href, "href")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/components/sidebutton.astro", void 0);

const $$Astro$3 = createAstro();
const $$Recientesside = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Recientesside;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="cursor-pointer duration-300 text-gray-400 hover:text-white hover:scale-105 font-medium  flex items-center text-center space-x-2"${addAttribute(href, "href")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/components/Recientesside.astro", void 0);

const $$Astro$2 = createAstro();
const $$Sidemenucard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Sidemenucard;
  const { playlists } = Astro2.props;
  const { id, cover, title, artists, color } = playlists;
  const artistsStrings = artists.join(",");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/playlists/${id}`, "href")} class="playlist-item flex relative p-2 overflow-hidden items-center gap-5 rounded-md hover:bg-zinc-500"> <picture class="h-12 w-12 float-none"> <img${addAttribute(cover, "src")} class="object-cover w-full h-full rounded-md" alt=""> </picture> <div class="flex flex-auto flex-col truncate"> <h4 class="text-white font-medium text-sm"> ${title} </h4> <span class="text-gray-400 text-xs">${artistsStrings}</span> </div> </a>`;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/components/Sidemenucard.astro", void 0);

const $$AsideMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-between px-6 mt-5 text-gray-400"> ${renderComponent($$result, "Sidemenuitem", $$Sidemenuitem, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Libraryicon", $$Library, {})} <span class="ml-3 flex items-center">Tu biblioteca</span> ` })} <div class="cursor-pointer space-x-3 text-gray-400 flex items-center"> ${renderComponent($$result, "Sideiconsmenu", $$Sideiconsmenu, {}, { "default": ($$result2) => renderTemplate` <span class="flex text-center  w-8 h-8 items-center justify-center">${renderComponent($$result2, "Moreicon", $$More, {})}</span> ` })} ${renderComponent($$result, "Sideiconsmenu", $$Sideiconsmenu, {}, { "default": ($$result2) => renderTemplate` <span class="flex text-center w-8 h-8 items-center justify-center">${renderComponent($$result2, "Arrowicon", $$Arrowicon, {})}</span> ` })} </div> </div> <div class="flex space-x-4 h-6 mb-2 justify-start text-white p-6 text-center items-start"> ${renderComponent($$result, "Sidebutton", $$Sidebutton, {}, { "default": ($$result2) => renderTemplate`
Artistas
` })} ${renderComponent($$result, "Sidebutton", $$Sidebutton, {}, { "default": ($$result2) => renderTemplate`
Albumes
` })} </div> <div class="flex h-12 justify-between items-center text-gray-400 p-6"> ${renderComponent($$result, "Sideiconsmenu", $$Sideiconsmenu, {}, { "default": ($$result2) => renderTemplate` <span class="flex text-center w-8 h-8 items-center justify-center">${renderComponent($$result2, "Searchicon", $$Search, {})}</span> ` })} <div class="flex items-center justify-center space-x-2"> ${renderComponent($$result, "Recientesside", $$Recientesside, {}, { "default": ($$result2) => renderTemplate` <span>Recientes</span> <span class="mt-1">${renderComponent($$result2, "Listicon", $$Listicon, {})}</span> ` })} </div> </div> <div class="overflow-y-auto no-scrollbar"> <ul> ${playlists.map((playlists2) => renderTemplate`${renderComponent($$result, "Sidemenucard", $$Sidemenucard, { "playlists": playlists2 })}`)} </ul> </div>`;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/components/AsideMenu.astro", void 0);

const $$Spotifyicon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="32px" height="32px" fill="currentColor" viewBox="0 0 16 16"> <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"></path> </svg>`;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/icons/spotifyicon.astro", void 0);

const $$Headermenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="text-white flex justify-start p-5 "> <a href="#"> ${renderComponent($$result, "Spotifyicon", $$Spotifyicon, {})} </a> </div>`;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/components/headermenu.astro", void 0);

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="24px" height="24px" fill="currentColor" viewBox="0 0 16 16"> <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"></path> </svg>`;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/icons/home.astro", void 0);

const $$Explorericon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="21px" height="21px" fill="currentColor" class="bi bi-compass" viewBox="0 0 16 16"> <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016m6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"></path> <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"></path> </svg>`;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/icons/explorericon.astro", void 0);

const $$Headeecenter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center"> <div class="bg-zinc-800 space-x-2 text-white rounded-full hover:scale-110 duration-300 cursor-pointer w-12 h-12 flex justify-center items-center"> <a href="http://localhost:4321/"> ${renderComponent($$result, "Homeicon", $$Home, {})} </a> </div> <div class="flex justify-between w-96 h-12 p-3 items-center hover:bg-zinc-700 bg-zinc-800 rounded-full ml-4 group"> <div class="flex items-center flex-grow"> <div class="text-white w-12 h-12 flex items-center justify-center"> ${renderComponent($$result, "Searchicon", $$Search, {})} </div> <input placeholder="¿Qué quieres reproducir?" class="bg-zinc-800 font-medium group-hover:bg-zinc-700 outline-none hover:border-white text-white border-none flex-grow pr-4 h-5" type="text"> </div> <div class="flex items-center space-x-2"> <div class="flex justify-center items-center text-white text-3xl m-0">
|
</div> <div class="text-zinc-400 flex justify-center items-center hover:text-white hover:scale-110 duration-300 cursor-pointer"> <a href=""> ${renderComponent($$result, "Explorericon", $$Explorericon, {})} </a> </div> </div> </div> </div> `;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/components/headeecenter.astro", void 0);

const $$Notifyicon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16px" height="16px" fill="currentColor" viewBox="0 0 16 16"> <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"></path> </svg>`;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/icons/notifyicon.astro", void 0);

const $$Headerfinal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-start items-center p-6 text-zinc-700 hover:text-white duration-300 cursor-pointer"> <a href="#"> ${renderComponent($$result, "Notifyicon", $$Notifyicon, {})} </a> </div> <div class="rounded-full w-11 h-11 bg-zinc-800 flex hover:scale-105 duration-300 cursor-pointer items-center justify-center"> <a href="#"> <div class="rounded-full w-7 h-7 bg-cyan-500 text-center flex items-center justify-center"> <div class="text-lg text-black text-center">
I
</div> </div> </a> </div>`;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/components/headerfinal.astro", void 0);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/node_modules/astro/components/ClientRouter.astro", void 0);

const Slider = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(
  SliderPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex touch-none select-none items-center group",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx(SliderPrimitive.Track, { className: "relative h-1 w-full grow overflow-hidden rounded-full bg-gray-800", children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute h-full bg-white group-hover:bg-green-400" }) }),
      /* @__PURE__ */ jsx(SliderPrimitive.Thumb, { className: "hidden group-hover:block h-3 w-3 bg-white rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Slider.displayName = SliderPrimitive.Root.displayName;

const usePlayerstore = create((set)=>({
    isPlaying : false,
    currentMusic: {playlist: null,songs: [], song:null},
    volumen: 1,
    setVolumen: (volumen)=> set({volumen}),
    setIsPlaying: (isPlaying)=> set({isPlaying}),
    setCurrentmusic: (currentMusic)=> set({currentMusic})
}));

const Pause = ({ className }) => /* @__PURE__ */ jsx("svg", { className, width: "16px", height: "16px", fill: "currentColor", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { d: "M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5" }) });
const Play = ({ className }) => /* @__PURE__ */ jsx("svg", { className, width: "16px", height: "16px", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z", stroke: "#000000", strokeWidth: "2", strokeLinejoin: "round" }) });
const SiguienteIcon = () => /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", fill: "currentColor", class: "bi bi-rewind-fill", viewBox: "0 0 16 16", children: [
  /* @__PURE__ */ jsx("path", { d: "M8.404 7.304a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696z" }),
  /* @__PURE__ */ jsx("path", { d: "M.404 7.304a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696z" })
] });
const AnteriorIcon = () => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", class: "bi bi-skip-forward-fill", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { d: "M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5" }) });
const Volumensilence = () => /* @__PURE__ */ jsx("svg", { width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { d: "M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06m7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0" }) });
const Volumenmin = () => /* @__PURE__ */ jsx("svg", { width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { d: "M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12zm3.025 4a4.5 4.5 0 0 1-1.318 3.182L10 10.475A3.5 3.5 0 0 0 11.025 8 3.5 3.5 0 0 0 10 5.525l.707-.707A4.5 4.5 0 0 1 12.025 8" }) });
const Volumenmid = () => /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: [
  /* @__PURE__ */ jsx("path", { d: "M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z" }),
  /* @__PURE__ */ jsx("path", { d: "M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06" })
] });
const Volumenmax = () => /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", fill: "currentColor", viewBox: "0 0 16 16", children: [
  /* @__PURE__ */ jsx("path", { d: "M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z" }),
  /* @__PURE__ */ jsx("path", { d: "M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z" }),
  /* @__PURE__ */ jsx("path", { d: "M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06" })
] });
const Currentsong = ({ title, image, artists }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { className: "w-10 h-10 rounded-md bg-zinc-800 shadow-lg overflow-hidden", src: image }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm block text-white", children: title }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-xs ", children: artists?.join(",") })
    ] })
  ] });
};
const Songcontrol = ({ audio }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const { isPlaying, setIsPlaying, currentMusic, setCurrentmusic, volumen } = usePlayerstore((state) => state);
  useEffect(() => {
    const savedMusic = localStorage.getItem("currentMusic");
    const savedTime = localStorage.getItem("currentTime");
    const savedDuration = localStorage.getItem("duration");
    if (savedMusic) {
      const parsedMusic = JSON.parse(savedMusic);
      setCurrentmusic(parsedMusic);
    }
    if (savedTime) {
      setCurrentTime(parseFloat(savedTime));
    }
    if (savedDuration) {
      setDuration(parseFloat(savedDuration));
    }
    if (audio.current) {
      audio.current.currentTime = savedTime ? parseFloat(savedTime) : 0;
    }
    audio.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime);
    localStorage.setItem("currentTime", audio.current.currentTime);
  };
  useEffect(() => {
    if (currentMusic) {
      localStorage.setItem("currentMusic", JSON.stringify(currentMusic));
    }
    if (audio.current?.duration) {
      setDuration(audio.current.duration);
      localStorage.setItem("duration", audio.current.duration);
    }
  }, [currentMusic, audio.current?.duration]);
  const formatTime = (time) => {
    if (time == null) return "0:00";
    const segundos = Math.floor(time % 60);
    const minutos = Math.floor(time / 60);
    return `${minutos}:${segundos.toString().padStart(2, "0")}`;
  };
  const handleSongEnd = () => {
    const currentIndex = currentMusic?.songs?.findIndex((song) => song.id === currentMusic.song.id);
    const nextSong = currentMusic?.songs?.[currentIndex + 1];
    if (nextSong) {
      setCurrentmusic({ ...currentMusic, song: nextSong });
      setIsPlaying(true);
      audio.current.play();
    } else {
      const firstSong = currentMusic?.songs?.[0];
      if (firstSong) {
        setCurrentmusic({ ...currentMusic, song: firstSong });
        setIsPlaying(true);
        audio.current.play();
      } else {
        setIsPlaying(false);
      }
    }
  };
  useEffect(() => {
    if (formatTime(currentTime) === formatTime(duration)) {
      handleSongEnd();
    }
  }, [currentTime, duration, isPlaying]);
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-x-3", children: [
    /* @__PURE__ */ jsx("span", { className: "text-white", children: formatTime(currentTime) }),
    /* @__PURE__ */ jsx(
      Slider,
      {
        defaultValue: currentTime,
        max: duration,
        min: 0,
        value: [currentTime],
        className: "w-[400px] cursor-pointer",
        onValueChange: (value) => {
          audio.current.currentTime = value;
          setCurrentTime(value);
          localStorage.setItem("currentTime", value);
        }
      }
    ),
    /* @__PURE__ */ jsx("span", { className: "text-white", children: duration ? formatTime(duration) : "0:00" })
  ] });
};
const Volumecontrol = () => {
  const volumen = usePlayerstore((state) => state.volumen);
  const setVolume = usePlayerstore((state) => state.setVolumen);
  const Previusvolumen = useRef(volumen);
  const isvolumensilenced = volumen === 0;
  const clickvolumen = () => {
    if (isvolumensilenced) {
      setVolume(Previusvolumen.current);
    } else {
      Previusvolumen.current = volumen;
      setVolume(0);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-x-2 text-white", children: [
    /* @__PURE__ */ jsxs("button", { className: "opacity-70 hover:opacity-100 transition", onClick: clickvolumen, children: [
      volumen === 0 && /* @__PURE__ */ jsx(Volumensilence, {}),
      volumen > 0 && volumen <= 0.3 && /* @__PURE__ */ jsx(Volumenmin, {}),
      volumen > 0.3 && volumen <= 0.7 && /* @__PURE__ */ jsx(Volumenmid, {}),
      volumen > 0.7 && /* @__PURE__ */ jsx(Volumenmax, {})
    ] }),
    /* @__PURE__ */ jsx(
      Slider,
      {
        defaultValue: [volumen * 100],
        max: 100,
        min: 0,
        value: [volumen * 100],
        className: "w-[95px] cursor-pointer",
        onValueChange: (value) => {
          const [newVolume] = value;
          const volumenValue = newVolume / 100;
          setVolume(volumenValue);
        }
      }
    )
  ] });
};
function Player() {
  const { isPlaying, setIsPlaying, currentMusic, volumen, setCurrentmusic } = usePlayerstore((state) => state);
  const audioRef = useRef(null);
  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);
  useEffect(() => {
    audioRef.current.volume = volumen;
  }, [volumen]);
  useEffect(() => {
    const { song, playlist, songs } = currentMusic;
    if (song) {
      const src = `/music/${playlist?.id}/${song.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.volume = volumen;
      audioRef.current.play();
    }
  }, [currentMusic]);
  const siguientesong = () => {
    const currentIndex = currentMusic?.songs?.findIndex((song) => song.id === currentMusic.song.id);
    const nextSong = currentMusic?.songs?.[currentIndex + 1];
    if (nextSong) {
      setCurrentmusic({ ...currentMusic, song: nextSong });
      setIsPlaying(true);
      audioRef.current.play();
    } else {
      const firstSong = currentMusic?.songs?.[0];
      if (firstSong) {
        setCurrentmusic({ ...currentMusic, song: firstSong });
        setIsPlaying(true);
        audiorRef.current.play();
      } else {
        setIsPlaying(false);
      }
    }
  };
  const Anteriorsong = () => {
    const currentIndex = currentMusic?.songs?.findIndex((song) => song.id === currentMusic.song.id);
    const anteriorsong = currentMusic?.songs?.[currentIndex - 1];
    if (anteriorsong) {
      setCurrentmusic({ ...currentMusic, song: anteriorsong });
      setIsPlaying(true);
      audioRef.current.play();
    } else {
      const lastSong = currentMusic?.songs?.[currentMusic.songs.length - 1];
      if (lastSong) {
        setCurrentmusic({ ...currentMusic, song: lastSong });
        setIsPlaying(true);
        audioRef.current.play();
      }
    }
  };
  const clickmusic = () => {
    setIsPlaying(!isPlaying);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between w-full px-4 z-50", children: [
    /* @__PURE__ */ jsx("div", { className: "w-[200px]", children: /* @__PURE__ */ jsx(Currentsong, { ...currentMusic.song }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid place-content-center gap-4 flex-1", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center flex-row items-center", children: [
        /* @__PURE__ */ jsxs("button", { className: "bg-white text-black rounded-full p-2 hover:scale-105  duration-300", onClick: Anteriorsong, children: [
          /* @__PURE__ */ jsx(SiguienteIcon, {}),
          " "
        ] }),
        /* @__PURE__ */ jsx("button", { className: "bg-white text-black rounded-full p-2 mx-4 hover:scale-105  duration-300", onClick: clickmusic, children: isPlaying ? /* @__PURE__ */ jsx(Pause, {}) : /* @__PURE__ */ jsx(Play, {}) }),
        /* @__PURE__ */ jsx("button", { className: "bg-white text-black rounded-full p-2 hover:scale-105 duration-300", onClick: siguientesong, children: /* @__PURE__ */ jsx(AnteriorIcon, {}) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center flex-col items-center", children: /* @__PURE__ */ jsx(Songcontrol, { audio: audioRef }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid place-content-center", children: /* @__PURE__ */ jsx(Volumecontrol, {}) }),
    /* @__PURE__ */ jsx("audio", { ref: audioRef })
  ] });
}

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="src/icons/spotify.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ClientRouter, { "fallback": "none", "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div id="app" class="h-screen gap-2 pl-2 pr-2" data-astro-cid-sckkx6r4> <header class="  [grid-area:header] grid grid-cols-[1fr_1fr_1fr]" data-astro-cid-sckkx6r4> <div data-astro-cid-sckkx6r4>${renderComponent($$result, "Headermenu", $$Headermenu, { "data-astro-cid-sckkx6r4": true })}</div> <div class="flex items-center ml-7" data-astro-cid-sckkx6r4>${renderComponent($$result, "Headercenter", $$Headeecenter, { "data-astro-cid-sckkx6r4": true })}</div> <div class="flex items-center justify-end  " data-astro-cid-sckkx6r4>${renderComponent($$result, "Headerfinal", $$Headerfinal, { "data-astro-cid-sckkx6r4": true })}</div> </header> <aside class=" bg-zinc-800 rounded-lg  [grid-area:aside] flex flex-col overflow-y-auto" data-astro-cid-sckkx6r4> ${renderComponent($$result, "AsideMenu", $$AsideMenu, { "data-astro-cid-sckkx6r4": true })} </aside> <main class="rounded-lg overflow-y-auto [grid-area:main] " data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> <footer class="  [grid-area:player]  " data-astro-cid-sckkx6r4> ${renderComponent($$result, "Player", Player, { "client:load": true, "data-astro-transition-persist": "media-player", "client:component-hydration": "load", "client:component-path": "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/components/player.jsx", "client:component-export": "Player", "data-astro-cid-sckkx6r4": true, "data-astro-transition-scope": renderTransition($$result, "gbvijb6a", "", "media-player") })} </footer> </div>  </body></html>`;
}, "C:/Users/IVAN TORRES/Desktop/proyectos personales/clone/clone/src/layouts/Layout.astro", "self");

function Cardplaybuton({ id, size = "small" }) {
  const { isPlaying, setIsPlaying, currentMusic, setCurrentmusic } = usePlayerstore((state) => state);
  const isplayingplaylist = isPlaying && currentMusic?.playlist?.id === id;
  const clickmusic = () => {
    if (isplayingplaylist) {
      setIsPlaying(false);
      return;
    }
    fetch(`/api/get-playlist.json?id=${id}`).then((res) => res.json()).then((data) => {
      const { songs, playlist } = data;
      setCurrentmusic({ songs, playlist, song: songs[0] });
      setIsPlaying(true);
      console.log({ songs, playlist });
    }).catch((error) => {
      console.error("Error fetching playlist:", error);
    });
  };
  const iconclassname = size == "small" ? "w-4 h-4" : "w-5 h-5";
  return /* @__PURE__ */ jsx("button", { onClick: clickmusic, className: "card-play-buton rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400", children: isplayingplaylist ? /* @__PURE__ */ jsx(Pause, { className: iconclassname }) : /* @__PURE__ */ jsx(Play, { className: iconclassname }) });
}

export { $$Layout as $, Cardplaybuton as C };
