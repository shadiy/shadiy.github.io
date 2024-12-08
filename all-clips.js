document.addEventListener('DOMContentLoaded', (e) => {
    fetch('./clips.json').then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    }).then((data) => {
        let div = document.querySelector('.clips');
        for (i = 0; i < data.length; i++) {
            let clips = days[i];
            div.innerHTML += Object.getOwnPropertyNames(clips)[0];
            for (x = 0; x < clips.length; x++) {
                let clip_slug = clips[x];
    
                let src = "https://clips.twitch.tv/embed?clip=" + clip_slug + "&parent=shadiy.github.io";
                //let src = "https://clips.twitch.tv/embed?clip=" + clip_slug + "&parent=127.0.0.1";
    
                let elemet = "<a href=" + src + ">" + clip_slug + "</a>";
    
                div.innerHTML += elemet;
            }
        }
    }).catch((error) => {
        console.error("Unable to fetch data:", error);
    });

});
