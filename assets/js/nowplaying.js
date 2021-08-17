(async function updateNowPlaying() {
    // Thanks tom for hosting this :)
    const res = await fetch('https://api.tomthegeek.ml/ash/music');
    if (!res.ok) {
        console.log('Failed to fetch now playing');
        setError('Failed');
        return;
    }
    const data = await res.json();
    switch (data.state) {
        case "now_playing":
            setNowPlaying(data.track);
            break;
        case "recently_listened":
            setRecentlyPlayed(data.track);
            break;
        default:
            setError('Unknown state');
            break;
    }
})();

function setRecentlyPlayed(track) {
    setTrack(track);
}

function setNowPlaying(track) {
    setTrack(track);
    document.getElementById('now-playing').removeChild(document.getElementById('recent'));
    const bars = document.createElement('div');
    bars.classList.add('music-bars');
    bars.title = 'Now playing'; // set the tooltip
    for (let i = 0; i < 3; i++) {
        const bar = document.createElement('span');
        bar.classList.add(`bar-${i}`);
        bars.appendChild(bar);
    }
    document.getElementById('now-playing').appendChild(bars);
}

function setTrack(track) {
    const title = track.title.toLowerCase();
    const album = track.album.toLowerCase();
    const artist = track.artist.toLowerCase();
    document.getElementById('track').innerText = title;
    if (title !== album) {
        document.getElementById('album').innerText = 'on ';
        const e = document.createElement('b');
        e.innerText = album;
        document.getElementById('album').appendChild(e);
    }
    document.getElementById('artist').innerText = artist;
}

function setError(message) {
    document.getElementById('track').innerText = message;
}
