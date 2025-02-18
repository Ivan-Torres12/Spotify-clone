import { useRef, useState } from "react";
import { Slider } from "../components/slider";
import { usePlayerstore } from "../store/playerstore";
import { useEffect } from "react";

export const Pause = ({className}) => (
  <svg className={className} width="16px" height="16px" fill="currentColor" viewBox="0 0 16 16">
    <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
  </svg>
);

export const Play = ({className}) => (
  <svg className={className} width="16px" height="16px" viewBox="0 0 24 24" fill="currentColor" >
    <path d="M16.6582 9.28638C18.098 10.1862 18.8178 10.6361 19.0647 11.2122C19.2803 11.7152 19.2803 12.2847 19.0647 12.7878C18.8178 13.3638 18.098 13.8137 16.6582 14.7136L9.896 18.94C8.29805 19.9387 7.49907 20.4381 6.83973 20.385C6.26501 20.3388 5.73818 20.0469 5.3944 19.584C5 19.053 5 18.1108 5 16.2264V7.77357C5 5.88919 5 4.94701 5.3944 4.41598C5.73818 3.9531 6.26501 3.66111 6.83973 3.6149C7.49907 3.5619 8.29805 4.06126 9.896 5.05998L16.6582 9.28638Z" stroke="#000000" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const SiguienteIcon = () =>(
  <svg  width="16" height="16" fill="currentColor" class="bi bi-rewind-fill" viewBox="0 0 16 16">
  <path d="M8.404 7.304a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696z"/>
  <path d="M.404 7.304a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696z"/>
</svg>
)
const AnteriorIcon =()=>(
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-forward-fill" viewBox="0 0 16 16">
  <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5"/>
</svg>

)
  
const Volumensilence = () =>(
  <svg  width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06m7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0"/>
</svg>
)
const Volumenmin = () => (
  <svg  width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12zm3.025 4a4.5 4.5 0 0 1-1.318 3.182L10 10.475A3.5 3.5 0 0 0 11.025 8 3.5 3.5 0 0 0 10 5.525l.707-.707A4.5 4.5 0 0 1 12.025 8"/>
</svg>
)
const Volumenmid = () =>(
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
  <path d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06"/>
</svg>


)
const Volumenmax = () => (
  <svg  width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
  <path d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06"/>
</svg>
)
const Currentsong = ({title, image,artists}) => {
  
  return(
    <div className="flex items-center gap-5 relative overflow-hidden">
      <picture>
        <img className="w-10 h-10 rounded-md bg-zinc-800 shadow-lg overflow-hidden" src={image}/>
      </picture>
      <div className="flex flex-col">
        <h3 className="font-semibold text-sm block text-white">{title}</h3>
        <span className="text-gray-400 text-xs ">{artists?.join(",")}</span>
      </div>
    </div>
  );
}

const Songcontrol = ({ audio }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0); // Estado para la duración
  const { isPlaying, setIsPlaying, currentMusic, setCurrentmusic, volumen } = usePlayerstore((state) => state);

  useEffect(() => {
    // Recuperamos la canción, el tiempo y la duración del localStorage
    const savedMusic = localStorage.getItem('currentMusic');
    const savedTime = localStorage.getItem('currentTime');
    const savedDuration = localStorage.getItem('duration'); // Recuperar la duración

    if (savedMusic) {
      const parsedMusic = JSON.parse(savedMusic);
      setCurrentmusic(parsedMusic);
    }

    if (savedTime) {
      setCurrentTime(parseFloat(savedTime));
    }

    if (savedDuration) {
      setDuration(parseFloat(savedDuration)); // Usar la duración guardada
    }

    // Actualizamos el audio con el tiempo guardado
    if (audio.current) {
      audio.current.currentTime = savedTime ? parseFloat(savedTime) : 0;
    }

    audio.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  // Función para manejar el tiempo actual de la canción
  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime);
    // Guardar el tiempo actual en localStorage
    localStorage.setItem('currentTime', audio.current.currentTime);
  };

  // Guardar la canción y la duración actual en localStorage
  useEffect(() => {
    if (currentMusic) {
      localStorage.setItem('currentMusic', JSON.stringify(currentMusic));
    }

    // Guardar la duración en localStorage cuando esté disponible
    if (audio.current?.duration) {
      setDuration(audio.current.duration);
      localStorage.setItem('duration', audio.current.duration); // Guardar duración
    }
  }, [currentMusic, audio.current?.duration]);

  // Formatear el tiempo (minutos:segundos)
  const formatTime = (time) => {
    if (time == null) return '0:00';

    const segundos = Math.floor(time % 60);
    const minutos = Math.floor(time / 60);

    return `${minutos}:${segundos.toString().padStart(2, '0')}`;
  };

  // Función que se llamará cuando la canción termine
  const handleSongEnd = () => {
    const currentIndex = currentMusic?.songs?.findIndex(song => song.id === currentMusic.song.id);
    const nextSong = currentMusic?.songs?.[currentIndex + 1]; // Siguiente canción

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

  return (
    <div className="flex gap-x-3">
      <span className="text-white">{formatTime(currentTime)}</span>
      <Slider
        defaultValue={currentTime}
        max={duration} // Usar la duración del estado (guardada en localStorage)
        min={0}
        value={[currentTime]}
        className="w-[400px] cursor-pointer"
        onValueChange={(value) => {
          audio.current.currentTime = value;
          setCurrentTime(value);  // Actualizamos el tiempo
          localStorage.setItem('currentTime', value);  // Guardar en localStorage
        }}
      />
      <span className="text-white">{duration ? formatTime(duration) : '0:00'}</span>
    </div>
  );
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

  return (
    <div className="flex justify-center gap-x-2 text-white">
      <button className="opacity-70 hover:opacity-100 transition" onClick={clickvolumen}>
        {volumen === 0 && <Volumensilence />} 
        {volumen > 0 && volumen <= 0.3 && <Volumenmin />} 
        {volumen > 0.3 && volumen <= 0.7 && <Volumenmid />} 
        {volumen > 0.7 && <Volumenmax />} 
      </button>

      <Slider
        defaultValue={[volumen * 100]} 
        max={100}
        min={0}
        value={[volumen * 100]} 
        className="w-[95px] cursor-pointer"
        onValueChange={(value) => {
          const [newVolume] = value;
          const volumenValue = newVolume / 100; 
          setVolume(volumenValue);
        }}
      />
    </div>
  );
};



export function Player() {
  const {isPlaying ,setIsPlaying,currentMusic,volumen,setCurrentmusic} = usePlayerstore(state => state)
  const audioRef = useRef(null);
  

  useEffect(() => {
    isPlaying
      ?audioRef.current.play()
      : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.volume = volumen
   }, [volumen]);

  useEffect(() => {
    const {song,playlist,songs} = currentMusic
    if (song) {
      const src = `/music/${playlist?.id}/${song.id}.mp3`
      audioRef.current.src = src;
      audioRef.current.volume = volumen
      audioRef.current.play()
    }
  }, [currentMusic]);

  const siguientesong = () => {
    const currentIndex = currentMusic?.songs?.findIndex(song => song.id === currentMusic.song.id);
    const nextSong = currentMusic?.songs?.[currentIndex + 1]; // Siguiente canción
  
    if (nextSong) {
      // Si existe una siguiente canción, la reproducimos
      setCurrentmusic({ ...currentMusic, song: nextSong });
      setIsPlaying(true); // Reproduce la siguiente canción
      audioRef.current.play(); // Asegura que comience la reproducción
    } else {
      // Si no hay más canciones, volvemos a la primera
      const firstSong = currentMusic?.songs?.[0]; // Primera canción en la lista
  
      if (firstSong) {
        setCurrentmusic({ ...currentMusic, song: firstSong }); // Actualiza a la primera canción
        setIsPlaying(true); // Reproduce la primera canción
        audiorRef.current.play(); // Asegura que comience la reproducción
      } else {
        // Si no hay canciones en la lista, pausa la reproducción
        setIsPlaying(false);
      }
    }
  }

  const Anteriorsong = () => {
    const currentIndex = currentMusic?.songs?.findIndex(song => song.id === currentMusic.song.id);
    const anteriorsong = currentMusic?.songs?.[currentIndex - 1]; // Canción anterior
  
    if (anteriorsong) {
      // Si existe una canción anterior, la reproducimos
      setCurrentmusic({ ...currentMusic, song: anteriorsong });
      setIsPlaying(true); // Reproduce la canción anterior
      audioRef.current.play(); // Asegura que comience la reproducción
    } else {
      // Si no hay canción anterior (estamos en la primera), vamos a la última canción
      const lastSong = currentMusic?.songs?.[currentMusic.songs.length - 1]; // Última canción
  
      if (lastSong) {
        setCurrentmusic({ ...currentMusic, song: lastSong }); // Actualiza a la última canción
        setIsPlaying(true); // Reproduce la última canción
        audioRef.current.play(); // Asegura que comience la reproducción
      }
    }
  };
  


  const clickmusic = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="flex flex-row justify-between w-full px-4 z-50">
      <div className="w-[200px]">
        <Currentsong {...currentMusic.song} />
      </div>
  
      {/* Contenedor para los controles principales */}
      <div className="grid place-content-center gap-4 flex-1">
        <div className="flex justify-center flex-row items-center">
          
          {/* Botón de canción anterior con rotación */}
          <button className="bg-white text-black rounded-full p-2 hover:scale-105  duration-300" onClick={Anteriorsong}>
          <SiguienteIcon   /> {/* Rotación para "Anterior" */}
          </button>
          
          {/* Botón de Play/Pausa */}
          <button className="bg-white text-black rounded-full p-2 mx-4 hover:scale-105  duration-300" onClick={clickmusic}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
          
          {/* Botón de siguiente canción */}
          <button className="bg-white text-black rounded-full p-2 hover:scale-105 duration-300" onClick={siguientesong}>
             {/* Aquí colocas tu icono de "Siguiente" */}
            <AnteriorIcon />
          </button>
  
        </div>
        {/* Contenedor para la barra de progreso de la canción */}
        <div className="flex justify-center flex-col items-center">
          <Songcontrol audio={audioRef} />
        </div>
      </div>
  
      {/* Control de volumen */}
      <div className="grid place-content-center">
        <Volumecontrol />
      </div>
  
      <audio ref={audioRef} />
    </div>
  );
  
  
}
