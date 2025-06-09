let currfolder;
let songs;
async function getSongs(folder) {
    currfolder = folder;
    let a = await fetch(`http://127.0.0.1:5500/Project-SpotifyClone/${folder}/`);
    let response = await a.text();
    //console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response
    let as = div.getElementsByTagName('a');
    songs = [];
    for (const element of as) {
        if(element.href.endsWith('.mp3')){
           // console.log(element.href);
            songs.push(element.href.split(`/${folder}/`)[1]);
        }
       // console.log(element);
    }


    //Adding all the songs name in the Your Library section:-
    let songUl = document.querySelector(".songList").getElementsByTagName("ul")[0];
    songUl.innerHTML = "";
    
    for (const song of songs) {
       
       // songUl.innerHTML = songUl.innerHTML+`<li> ${song.replaceAll("%20"," ").split(".mp3")[0]}</li>`;
        songUl.innerHTML = songUl.innerHTML+`<li  data-file="${song}">
                <img class="invert" src="music.svg" alt="">
                <div class="song-info">
                  <div>${song.replaceAll("%20"," ").split(".mp3")[0].split("-")[0]}</div>
                  <div>${song.replaceAll("%20"," ").split(".mp3")[0].split("-")[1]}</div>

                </div>
                <div class="playNow">
                  <img class="invert" src="play.svg" alt="">Play Now
                </div>
                
              </li>`;
            //   data-file attribute ka reason pdhna h
        
    }

     //Attach event listener to each song or li item in the song list
    let arr = document.querySelector(".songList").getElementsByTagName("li");
    Array.from(arr).forEach(e=> {
        e.addEventListener("click",element=>{
            // console.log(e.querySelector(".song-info").firstElementChild.innerHTML);
            // playMusic(e.querySelector(".song-info").firstElementChild.innerHTML.trim());
            const filename = e.getAttribute("data-file");
            console.log("Playing:", filename);
            playMusic(filename);
        })
        
        
    });
    return songs;
    //console.log(songs);
    
 }
let currentSong = new Audio();
const playMusic =(song)=>{
   // var audio = new Audio("http://127.0.0.1:5500/Project-SpotifyClone/songs/"+song);
    currentSong.src = `http://127.0.0.1:5500/Project-SpotifyClone/${currfolder}/`+song
    currentSong.play();
    play.src = "pause.svg";
    //Changing the song name and duration time
     document.querySelector(".song-name").innerHTML = song.replaceAll("%20"," ").split(".mp3")[0].split("-")[0];
     //console.log(document.querySelector(".song-Time")); // Should NOT be null

     document.querySelector(".song-Time").innerHTML = "00:00/00:00";

}
//seconds to minutes:seconds conversion function:-
function formatTime(totalSeconds) {
  const seconds = Math.floor(totalSeconds); // Ensure whole number
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}




//Display Albums Function
async function displayAlbums(){
    let a = await fetch(`http://127.0.0.1:5500/Project-SpotifyClone/songs/`);
    let response = await a.text();
    console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a");
    let array = Array.from(anchors);
    for(let index=0; index<array.length;index++){
        let e = array[index];
        if(e.href.includes("/songs/")){
            //console.log(e.href);
            let folder = e.href.split("/").slice(-1)[0];
            console.log(folder)
            //Folder selected, now get its metadata
            let a = await fetch(`http://127.0.0.1:5500/Project-SpotifyClone/songs/${folder}/info.json`);
            let res = await a.json();
            cardParent = document.querySelector(".cardParent");
            cardParent.innerHTML += `<div data-folder="${folder}" style="font-weight: 10; font-size: 12px" class="cardContainer">
              <!-- Play button with transition -->
              <div class="play">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <circle cx="24" cy="24" r="24" fill="#90ee90" />
                  <path
                    d="M30.8906 24.846C30.5371 26.189 28.8667 27.138 25.5257 29.0361C22.296 30.8709 20.6812 31.7884 19.3798 31.4196C18.8418 31.2671 18.3516 30.9776 17.9562 30.5787C17 29.6139 17 27.7426 17 24C17 20.2574 17 18.3861 17.9562 17.4213C18.3516 17.0224 18.8418 16.7329 19.3798 16.5804C20.6812 16.2116 22.296 17.1291 25.5257 18.9639C28.8667 20.862 30.5371 21.811 30.8906 23.154C31.0365 23.7084 31.0365 24.2916 30.8906 24.846Z"
                    fill="#000000"
                  />
                </svg>
              </div>
              <div class="cardimage">
                <img
                  src="http://127.0.0.1:5500/Project-SpotifyClone/songs/${folder}/cover.jpg"
                  alt=""
                />
              </div>
              <h2 class="song-title">${res.title}</h2>
              <p class="para">${res.description}</p>
            </div>`
        }
    }
    
}


async function main(){
    songs = await getSongs("songs/Masoom%20Sharma"); //We get all the songs we stored at API address.
    await displayAlbums();



    









    //Shuru me by default currentsong ka ek src set krdo jisse ki play click krne pe
    //wo song play hojaye
    let defaultSong = document.querySelector(".songList").getElementsByTagName("li")[0];
    const defaultSongname = defaultSong.getAttribute("data-file");
    console.log(defaultSongname);
    currentSong.src = `http://127.0.0.1:5500/Project-SpotifyClone/${currfolder}/${defaultSongname}`;
    document.querySelector(".song-name").innerHTML = defaultSongname.replaceAll("%20"," ").split(".mp3")[0].split("-")[0];






   
    //console.log(songs);
    //var audio = new Audio(songs[0]);
    // audio.play();






    //Add event listener to previous,play and next buttons.
    play.addEventListener("click",()=>{
        if(currentSong.paused){
            currentSong.play();
            play.src = "pause.svg";
        }
        else{
            currentSong.pause();
            play.src = "play.svg";
        }
    })
    



    //Update the time of current song
    currentSong.addEventListener("timeupdate",()=>{
       // console.log(currentSong.currentTime,currentSong.duration);
        document.querySelector(".song-Time").innerHTML = `${formatTime(currentSong.currentTime)}/${formatTime(currentSong.duration)}`;
        document.querySelector(".circle").style.left = (currentSong.currentTime/currentSong.duration)*100+"%";
    })



    //Changing the circle's left in the seekbar if clicked
    document.querySelector(".seekbar").addEventListener("click",e=>{
        let percent = (e.offsetX / e.target.getBoundingClientRect().width)*100
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = (currentSong.duration*percent)/100;
    })



    //Adding event listener to the hamburger
    document.querySelector(".hamburger").addEventListener("click",()=>{
        document.querySelector(".left").style.left = "0%";
        // document.querySelector(".hamburger-close").style.display = block;
    })

    //Adding event listener to the hamburger closing image
    document.querySelector(".close-img").addEventListener("click",()=>{
        document.querySelector(".left").style.left = "-120%";
    })




    //Adding event listener to the previous and next buttons
    prev.addEventListener("click",()=>{
        currentSong.pause();
       // console.log(currentSong.src.split(`/${currfolder}/`)[1]);
       // console.log(songs);
        let indx = songs.indexOf(currentSong.src.split(`/${currfolder}/`)[1]);
        if(indx-1 >= 0){
        playMusic(songs[indx-1]);
        }
    })

    next.addEventListener("click",()=>{
        currentSong.pause();
        //console.log(currentSong.src.split(`/${currfolder}/`)[1]);
        //console.log(songs);
        let indx = songs.indexOf(currentSong.src.split(`/${currfolder}/`)[1]);
        if(indx+1 < songs.length){
        playMusic(songs[indx+1]);
        }
    })


    //Add event listener to volume
    document.querySelector(".rangeInput").addEventListener("change",(e)=>{
        
        currentSong.volume = parseInt(e.target.value)/100;
    })

    let lastVolume;
    //Add event listener on volume image to mute/unmute
    document.querySelector(".vol img").addEventListener("click",(e)=>{
        if(currentSong.volume == 0){
            currentSong.volume = lastVolume;
            console.log(e.target.src);
            //Change the svg to volume.svg
            e.target.src = e.target.src.replace("mute.svg","volume.svg");
            document.querySelector(".rangeInput").value = lastVolume*100;
        }
        else{
            lastVolume = currentSong.volume;
            currentSong.volume = 0;
             console.log(e.target.src);
            //Change the svg to mute.svg
            e.target.src = e.target.src.replace("volume.svg","mute.svg");
            document.querySelector(".rangeInput").value = 0;
        }
    })

    //Load the playlist whenever the card is clicked.
    Array.from(document.getElementsByClassName("cardContainer")).forEach(e=>{
        e.addEventListener("click", async item=>{
            console.log(item.currentTarget.dataset.folder);
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`);
            playMusic(songs[0]);
        })
    })

}
main()







