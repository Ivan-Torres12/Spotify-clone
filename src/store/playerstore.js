import { create } from "zustand";

export const usePlayerstore = create((set)=>({
    isPlaying : false,
    currentMusic: {playlist: null,songs: [], song:null},
    volumen: 1,
    setVolumen: (volumen)=> set({volumen}),
    setIsPlaying: (isPlaying)=> set({isPlaying}),
    setCurrentmusic: (currentMusic)=> set({currentMusic})
}))

