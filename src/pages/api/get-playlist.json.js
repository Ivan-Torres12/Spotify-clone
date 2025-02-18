import { allPlaylists, songs } from "../../lib/data";

export async function GET(request) {
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
