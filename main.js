let current_clip_slug = "";
let current_clip_slug_index = -1;
let clips = [];

document.addEventListener('DOMContentLoaded', (e) => {
    fetch('./clips.json').then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    }).then((data) => {
        let date = new Date();
        let day = date.getUTCDate();
        let month = date.getUTCMonth();
        let year = date.getUTCFullYear();
        let date_str = day + '-' + month + '-' + year;
        console.log(date_str);

        let data_json = JSON.parse(data);
        clips = data_json[date_str];
        
        console.log(data_json);
        console.log(clips);
        nextClip();
    }).catch((error) => {
        console.error("Unable to fetch data:", error);
    });
});

function nextClip() {
    if (current_clip_slug_index >= clips.length) return;

    current_clip_slug_index += 1;
    current_clip_slug = clips[current_clip_slug_index];

    document.querySelector('.clip').setAttribute('src', "https://clips.twitch.tv/embed?clip=" + current_clip_slug + "&parent=shadiy.github.io");
    //document.querySelector('.clip').setAttribute('src', "https://clips.twitch.tv/embed?clip=" + current_clip_slug + "&parent=127.0.0.1");
}

function prevClip() {
    if (current_clip_slug_index <= 0) return;
    
    current_clip_slug_index -= 1;
    current_clip_slug = clips[current_clip_slug_index];

    document.querySelector('.clip').setAttribute('src', "https://clips.twitch.tv/embed?clip=" + current_clip_slug + "&parent=shadiy.github.io");
    //document.querySelector('.clip').setAttribute('src', "https://clips.twitch.tv/embed?clip=" + current_clip_slug + "&parent=127.0.0.1");
}
