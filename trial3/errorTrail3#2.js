let showcaseContainer = document.getElementById('showcase-container');
document.querySelector('body').addEventListener('click', playMusic);
let audioList = document.getElementById('audio-list');
const musicList = [
    {
        identity : 'HIP-HOP',
        img_src : 'img/Cover+of+NF+THE+SEARCH.png',
        artist_name : 'NF -',
        music_title : 'The Search',
        music_src: 'mp3/01 The Search.mp3'
    },
    {
        identity : 'RNB',
        img_src : 'img/sasha-older.jpg',
        artist_name : 'Sasha Sloan - ',
        music_title : 'Older',
        music_src: 'mp3/Sasha Sloan - Older.mp3'
    }

]


musicList.forEach(function(music){

    showcaseDiv = document.createElement('div');
    // let output = '';
   
    showcaseDiv += `

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
    console.log(showcaseDiv)
    // showcaseContainer.appendChild(output);

    let audio = '';
    audio += ` <audio id="theSong">
    <source src="${music.music_src}" type="audio/mp3">
    </audio>`
    audioList.innerHTML = audio;
    
    
    
    
});


function playMusic(e){
    musicList.forEach( function(music){
      
        
       if(e.target.classList.contains('playIcon')){
       let theSong = document.getElementById('theSong');
       let playIcon = document.getElementById('playIcon');
       let pauseIcon = document.getElementById('pauseIcon');

        if(theSong.paused){
            theSong.play();
            playIcon.classList.add('hidden');
            pauseIcon.classList.add('active');
        } else {
            theSong.pause();
        }

        pauseIcon.onclick = () => {
            theSong.pause();
            playIcon.classList.remove('hidden')
            pauseIcon.classList.remove('active')
        }
       }
        


    })
   
}


