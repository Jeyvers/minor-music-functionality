const theSearchSong = document.getElementById("theSearchSong");
const theSearchIcon = document.getElementById("theSearchIcon");
const olderSong = document.getElementById("olderSong");
const olderIcon = document.getElementById("olderIcon");
const promisesSong = document.getElementById("promisesSong");
const promisesIcon = document.getElementById("promisesIcon");
const tennesseSong = document.getElementById("tennesseSong");
const tennesseIcon = document.getElementById("tennesseIcon");
const billieSong = document.getElementById("billieSong");
const billieIcon = document.getElementById("billieIcon");
const cityLightsSong = document.getElementById("cityLightsSong");
const cityLightsIcon = document.getElementById("cityLightsIcon");

const searchPause = document.querySelector("#searchPause");
const olderPause = document.querySelector("#olderPause");
const promisesPause = document.querySelector("#promisesPause");
const tennessePause = document.querySelector("#tennessePause");
const billiePause = document.querySelector("#billiePause");
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


// SASHA OLDER
olderIcon.onclick =  () => {
   if(olderSong.paused){
        olderSong.play();
        olderIcon.classList.add('hidden');
        olderPause.classList.add('active');
        
   }
    else {
    olderSong.pause();
   
   }
}

olderPause.onclick = () => {
    olderSong.pause();
    olderIcon.classList.remove('hidden')
    olderPause.classList.remove('active')
}

// SASHA OLDER
promisesIcon.onclick =  () => {
   if(promisesSong.paused){
        promisesSong.play();
        promisesIcon.classList.add('hidden');
        promisesPause.classList.add('active');
        
   }
    else {
    promisesSong.pause();
   
   }
}

promisesPause.onclick = () => {
    promisesSong.pause();
    promisesIcon.classList.remove('hidden')
    promisesPause.classList.remove('active')
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
billieIcon.onclick =  () => {
   if(billieSong.paused){
        billieSong.play();
        billieIcon.classList.add('hidden');
        billiePause.classList.add('active');
        
   }
    else {
    billieSong.pause();
   
   }
}

billiePause.onclick = () => {
    billieSong.pause();
    billieIcon.classList.remove('hidden')
    billiePause.classList.remove('active')
}




// CITY LIGHTS
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


     

