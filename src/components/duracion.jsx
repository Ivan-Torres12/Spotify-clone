import { useState, useEffect, useRef } from "react";
import { usePlayerstore } from "../store/playerstore.js";

export const Songcontrol = ({ id, audioSrc }) => {
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleLoadedMetadata = () => {
      if (audioRef.current) {
        setDuration(audioRef.current.duration);
      }
    };

    if (audioRef.current) {
      // Escuchar cuando los metadatos del audio están cargados
      audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    return () => {
      // Limpiar el evento cuando se desmonte el componente
      if (audioRef.current) {
        audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
      }
    };
  }, [audioSrc]);

  return (
    <td>
      {`${Math.floor(duration / 60)}:${Math.floor(duration % 60 - 1 )}`}
      <audio ref={audioRef} src={audioSrc} />
    </td>
  );
};
