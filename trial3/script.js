let showcaseContainer = document.getElementById('showcase-container');
let audioList = document.getElementById('audio-list');
document.addEventListener('DOMContentLoaded', loadMusicList)
document.addEventListener('click', playMusic)


function loadMusicList(){
    fetch('music.json')
    .then((res) => res.json())
    .then((data) => {
        let output = '';

        data.forEach(function(music){
        output += `
        
        <div class="showcase grid">
        <div class="showcase-identity-container">
        <div>
        <div class="showcase-identity">
            ${music.identity}
        </div>
    </div>
    </div>

    <div class="showcase-img-container">
    <img src="${music.img_src}" alt="" class="showcase-img">
    </div>

    <div class="showcase-text">
    <div class="showcase-header">
    <span class="showcase-header-name"> ${music.artist_name}
    </span>
    <span class="showcase-header-title"> ${music.music_title}
    </span>
    </div>
    </div>
   
    <div class="buttons">
    <button class="btn playIcon" id="playIcon">
    <i class="uil uil-play-circle icon"></i> Play
</button>
<button  class="btn hidden pauseIcon" id="pauseIcon">
    <i class="uil uil-pause-circle"></i> Pause
</button>

<button class="btn">
    <a download="" href="${music.music_src}">  <i class="uil uil-download-alt"></i> Download </a>  
</button>
    </div>
    </div>
        `
    });

    showcaseContainer.innerHTML = output;

    let audio = '';
    audio += ` <audio id="theSong">
    <source src="${data.music_src}" type="audio/mp3">
    </audio>`
    audioList.innerHTML = audio;
    console.log(audioList);
    })

}

function playMusic(e){
    
    if(e.target.classList.contains('playIcon')){
    console.log(data)
    }
}