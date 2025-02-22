import { a as allPlaylists, s as songs } from '../../chunks/data_wVF740hw.mjs';
export { renderers } from '../../renderers.mjs';

async function GET(request) {
    const { url } = request;
    const urlObject = new URL(url);
    const id = urlObject.searchParams.get('id');

    const playlist = allPlaylists.find((playlist) => playlist.id === id);
    const songsInPlaylist = songs.filter((song) => song.albumId === playlist?.albumId);

    if (!playlist) {
        return new Response(JSON.stringify({ error: "Playlist not found" }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    return new Response(JSON.stringify({ playlist, songs: songsInPlaylist }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
