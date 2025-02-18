import { Pause, Play } from "./player";
import { usePlayerstore } from "../store/playerstore.js";
import { useEffect } from "react";

export function List({ id, album }) {
    const { isPlaying, setIsPlaying, currentMusic, setCurrentmusic } = usePlayerstore((state) => state);
    
    // Verificar si la canción actual corresponde a la playlist y a la canción específica
    const isPlayingCurrentSong = currentMusic?.song?.id === id && currentMusic?.playlist?.id == album && isPlaying == true

    // Logs para verificar el estado de reproducción
    

    const clickmusic = () => {
      if (isPlayingCurrentSong) {
        // Si la canción ya está reproduciendo, pausa la música
        setIsPlaying(false);
        return;
      }
      

      fetch(`/api/get-playlist.json?id=${album}`)
        .then((res) => res.json())
        .then((data) => {
          const { songs, playlist } = data;
          
          // Buscar la canción con el id correcto
          const songToPlay = songs.find((song) => song.id === id);
          
          setCurrentmusic({ songs, playlist, song: songToPlay });
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error('Error fetching playlist:', error);
        });
    };

    return (
      <button onClick={clickmusic} className="card-play-buton text-black rounded-full bg-green-500 p-3 hover:scale-105 transition hover:bg-green-400">
        {isPlayingCurrentSong ? <Pause /> : <Play />}
      </button>
    );
}
