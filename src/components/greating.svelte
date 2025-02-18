<script lang="ts">
    import { onDestroy } from 'svelte';
    import { onMount } from 'svelte';

    let currenttime = new Date();
    let currenthours = currenttime.getHours();
    let currentmin = currenttime.getMinutes();
    let currentsec = currenttime.getSeconds();
    let period = "AM";
    let saludo = "";

    // Función para actualizar la hora
    function updateTime() {
        const now = new Date();
        currenttime = now;
        currenthours = now.getHours();
        currentmin = now.getMinutes();
        currentsec = now.getSeconds();

        // Convertir a formato de 12 horas
        period = currenthours >= 12 ? "PM" : "AM";
        if (currenthours > 12) {
            currenthours = currenthours - 12;
        } else if (currenthours === 0) {
            currenthours = 12; // 12 AM
        }

        // Cambiar el saludo según la hora
        if (currenthours < 12 && period === "AM") {
            saludo = "Buenos días 🌅";
        } else if (currenthours < 6 && period === "PM") {
            saludo = "Buenas tardes 🌞";
        } else {
            saludo = "Buenas noches 🌙";
        }
    }

    onMount(() => {
        // Inicializar el saludo y la hora al cargar
        updateTime();

        // Llamar a la función cada segundo para actualizar la hora
        const interval = setInterval(updateTime, 1000);

        // Limpiar el intervalo cuando el componente se destruye
        onDestroy(() => {
            clearInterval(interval);
        });
    });

    // Formatear los minutos para que siempre tengan dos dígitos
    function formatMinutes(minutes: number): string {
        return minutes < 10 ? `0${minutes}` : `${minutes}`
    }
</script>

<h1 class="text-4xl font-bold text-white">{saludo}</h1>
<h3 class="text-4xl font-bold text-white">{currenthours}:{formatMinutes(currentmin)} {period} {currentsec}</h3>
