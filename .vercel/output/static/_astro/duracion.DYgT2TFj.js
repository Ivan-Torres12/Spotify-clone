import{j as a}from"./playerstore.DFc6T7Jz.js";import{r as e}from"./index.CaZlGE7t.js";const i=({id:d,audioSrc:r})=>{const[o,s]=e.useState(0),t=e.useRef(null);return e.useEffect(()=>{const n=()=>{t.current&&s(t.current.duration)};return t.current&&t.current.addEventListener("loadedmetadata",n),()=>{t.current&&t.current.removeEventListener("loadedmetadata",n)}},[r]),a.jsxs("td",{children:[`${Math.floor(o/60)}:${Math.floor(o%60-1)}`,a.jsx("audio",{ref:t,src:r})]})};export{i as Songcontrol};
