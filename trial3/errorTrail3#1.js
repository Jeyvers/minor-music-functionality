
const showcaseContainer = document.getElementById('showcase-container');

const musicList = [
    {
        identity : 'HIP-HOP',
        img_src : 'img/Cover+of+NF+THE+SEARCH.png',
        artist_name : 'NF -',
        music_title : 'The Search',
        music_src: 'mp3/01 The Search.mp3'
    }
]
console.log(musicList);
musicList.forEach( function(music){
    let output = '';
    showcaseDiv = document.createElement('div');
    showcaseDiv.classList = 'showcase grid';
    showcaseDiv.innerHTML = `
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

    `
    showcaseBtnDiv = document.createElement('div');
    showcaseBtnDiv.classList = 'buttons'
    showcaseBtnDiv.innerHTML = `
        <button  class="btn" id="theSearchIcon">
            <i class="uil uil-play-circle icon"></i> Play
        </button>
        <button  class="btn hidden" id="searchPause">
            <i class="uil uil-pause-circle"></i> Pause
        </button>

        <button class="btn">
            <a download="" href="${music.music_src}">  <i class="uil uil-download-alt"></i> Download </a>  
        </button>
    `
    showcaseDiv.appendChild(showcaseBtnDiv);
    // output += showcaseDiv;
    document.getElementById('showcase-container').outerHTML = showcaseDiv;
    
    console.log(showcaseDiv);
    
});
