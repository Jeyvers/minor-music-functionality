let showcaseContainer = document.getElementById('showcase-container');
let audioList = document.getElementById('audio-list');
document.addEventListener('DOMContentLoaded', loadMusicList);
document.querySelector('body').addEventListener('click', playMusic);


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
    <button class="btn playIcon" id="playIcon${music.id}">
    <i class="uil uil-play-circle icon"></i> Play
    </button>
    <button  class="btn hidden pauseIcon" id="pauseIcon${music.id}">
        <i class="uil uil-pause-circle"></i> Pause
    </button>

    <button class="btn">
        <a download="" href="${music.music_src}">  <i class="uil uil-download-alt"></i> Download </a>  
    </button>
        </div>

    <audio id="theSong${music.id}">
    <source src="${music.music_src}" type="audio/mp3">
    </audio>
    </div>   
        `        
        
    });

    showcaseContainer.innerHTML = output;
    
    })
   
    
}

// Fifth trial of music play functionality
// Added ${music.id} to above code. 
// Added the return data - didn't work.
// Achieved so far : Less HTML code. 
// Previous trials = created seperate audio element, added it to the audioList in HTML document. 

function playMusic(e){

        fetch('music.json')
        .then((res) => res.json())
        .then((data) => {
            data.forEach(function(music){
                if(e.target.classList.contains(`playIcon${music.id}`)) {
                    let theSong = document.getElementById(`theSong${music.id}`);
                    let playIcon = document.getElementById(`playIcon${music.id}`);
                    let pauseIcon = document.getElementById(`pauseIcon${music.id}`);
       
                    if(theSong.paused){
                        theSong.play();
                        playIcon.classList.add('hidden');
                        pauseIcon.classList.add('active');
                        } 
            
                    pauseIcon.onclick = () => {
                        theSong.pause();
                        playIcon.classList.remove('hidden')
                        pauseIcon.classList.remove('active')
                        }  
                }
            })
        })
        .catch( (err) => console.log(err))
       
}
