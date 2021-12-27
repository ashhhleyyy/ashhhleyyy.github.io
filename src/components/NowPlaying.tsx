import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "preact/hooks";
import H from "./Highlight";

import './nowplaying.css';

interface Status {
    state: 'none' | 'now_playing' | 'recently_listened'
    track: Track | undefined
}

interface Track {
    title: string
    album: string
    artist: string
}

async function fetchStatus(): Promise<Status> {
    return fetch('https://api.tomthegeek.ml/ash/music').then(res => res.json()).catch(console.error);
}

export default function NowPlaying() {
    const [status, setStatus] = useState({
        state: 'recently_listened',
        track: {
            title: 'Beep boop',
            album: 'Beep bop',
            artist: 'The Server',
        }
    } as Status);

    useEffect(() => {
        fetchStatus().then(setStatus);
    }, []);

    const title = status.track?.title.toLowerCase();
    const album = status.track?.album.toLowerCase();
    const artist = status.track?.artist.toLowerCase();

    return <div class="now-playing" id="now-playing">
        <div class="track-info">
            <div>
                <H>{title}</H>
                { title !== album && <> on <H>{album}</H></> }
            </div>
            <div class="smol">
                by <H>{artist}</H>
            </div>
        </div>
        {status.state === 'recently_listened' && <FontAwesomeIcon icon={faClock} title="Recently listened to" className="recently-played" />}
        {
            status.state === 'now_playing' &&
                <div class="music-bars" title="Currently listening to">
                    { [1, 2, 3].map(i => <span class={`bar-${i}`} />) }
                </div>
        }
    </div>
}
