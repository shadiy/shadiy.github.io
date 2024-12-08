document.addEventListener('DOMContentLoaded', (e) => {
    fetch('./clips.json').then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    }).then((data) => {
        let div = document.querySelector('.clips');
        let dates = Object.getOwnPropertyNames(data);
        for (i = 0; i < length; i++) {
            let clips = data[dates[i]];
            div.innerHTML += dates[i];
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
