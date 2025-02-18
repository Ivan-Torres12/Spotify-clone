import { Pause, Play } from "./player";
import { usePlayerstore } from "../store/playerstore.js";


export function Cardplaybuton({ id, size = "small" }) {
    const { isPlaying, setIsPlaying, currentMusic, setCurrentmusic } = usePlayerstore((state) => state);
  
    // Verificar si la canción actual corresponde a la playlist que queremos reproducir
    const isplayingplaylist = isPlaying && currentMusic?.playlist?.id === id;
  
    const clickmusic = () => {
      if (isplayingplaylist) {
        // Si la playlist ya está reproduciendo, pausa la música
        setIsPlaying(false);
        return;
      }

    fetch(`/api/get-playlist.json?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const { songs, playlist } = data;
        setCurrentmusic({ songs, playlist, song: songs[0] });
        setIsPlaying(true);
        console.log({songs, playlist});
      })
      .catch((error) => {
        console.error('Error fetching playlist:', error);
      });
  };

  const iconclassname = size == "small" ? 'w-4 h-4': 'w-5 h-5'

  return (
    <button onClick={clickmusic} className="card-play-buton rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400">
      {isplayingplaylist ? <Pause className={iconclassname} /> : <Play  className={iconclassname} />}
    </button>
  );
}
