const theSearchSong = document.getElementById("theSearchSong");
const theSearchIcon = document.getElementById("theSearchIcon");
const sinnerSong = document.getElementById("sinnerSong");
const sinnerIcon = document.getElementById("sinnerIcon");
const tennesseSong = document.getElementById("tennesseSong");
const tennesseIcon = document.getElementById("tennesseIcon");
const cityLightsSong = document.getElementById("cityLightsSong");
const cityLightsIcon = document.getElementById("cityLightsIcon");

const searchPause = document.querySelector("#searchPause");
const sinnerPause = document.querySelector("#sinnerPause");
const tennessePause = document.querySelector("#tennessePause");
const cityLightsPause = document.querySelector("#cityLightsPause");

// nfIcon.onclick =  () => nfSong.play();

// NFFFFFFFFFFFFFFFFF
theSearchIcon.onclick =  () => {
   if(theSearchSong.paused){
        theSearchSong.play();
        theSearchIcon.classList.add('hidden');
        searchPause.classList.add('active');
        
   }
    else {
    theSearchSong.pause();
   
   }
}

searchPause.onclick = () => {
    theSearchSong.pause();
    theSearchIcon.classList.remove('hidden')
    searchPause.classList.remove('active')
}

// ADEKUNLE GOLD
sinnerIcon.onclick =  () => {
   if(sinnerSong.paused){
        sinnerSong.play();
        sinnerIcon.classList.add('hidden');
        sinnerPause.classList.add('active');
        
   }
    else {
    sinnerSong.pause();
   
   }
}

sinnerPause.onclick = () => {
    sinnerSong.pause();
    sinnerIcon.classList.remove('hidden')
    sinnerPause.classList.remove('active')
}



// KIIARA TENNESSEE
tennesseIcon.onclick =  () => {
   if(tennesseSong.paused){
        tennesseSong.play();
        tennesseIcon.classList.add('hidden');
        tennessePause.classList.add('active');
        
   }
    else {
    tennesseSong.pause();
   
   }
}

tennessePause.onclick = () => {
    tennesseSong.pause();
    tennesseIcon.classList.remove('hidden')
    tennessePause.classList.remove('active')
}




// KIIARA TENNESSEE
cityLightsIcon.onclick =  () => {
   if(cityLightsSong.paused){
        cityLightsSong.play();
        cityLightsIcon.classList.add('hidden');
        cityLightsPause.classList.add('active');
        
   }
    else {
    cityLightsSong.pause();
   
   }
}

cityLightsPause.onclick = () => {
    cityLightsSong.pause();
    cityLightsIcon.classList.remove('hidden')
    cityLightsPause.classList.remove('active')
}


     

