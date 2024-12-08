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

    for (i = 0; i < 3; i++) {
        let clip_slug = clips[i];

        let src = "https://clips.twitch.tv/embed?clip=" + clip_slug + "&parent=shadiy.github.io";
        //let src = "https://clips.twitch.tv/embed?clip=" + clip_slug + "&parent=127.0.0.1";

        let elemet = "<a href=" + src + ">" + clip_slug + "</a>";

        document.querySelector('.clips').innerHTML += elemet;
    }
});
