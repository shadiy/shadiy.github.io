let current_clip_slug = "";
let current_clip_slug_index = -1;
let clips = "";

document.addEventListener('DOMContentLoaded', (e) => {
    fetch('./clips.json').then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    }).then((data) => {
        clips = data['clips'];
        nextClip();
    }).catch((error) => {
        console.error("Unable to fetch data:", error);
    });
});

function nextClip() {
    current_clip_slug_index += 1;
    current_clip_slug = clips[current_clip_slug_index];

    document.querySelector('.clip').setAttribute('src', "https://clips.twitch.tv/embed?clip=" + current_clip_slug + "&parent=shadiy.github.io");
}
