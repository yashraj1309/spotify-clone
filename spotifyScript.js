let songIndex = 1;
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let audioElement = new Audio("1.mp3");
let bottomBannerName = document.getElementById('bottom-banner-name');
let bottomBanner = document.getElementById('bottom-banner');
let songs = [
    {songName: "Excuses - AP Dhillon", filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "Let Me Love You", filePath: "2.mp3", coverPath: "2.jpg"},
    {songName: "Closer", filePath: "3.mp3", coverPath: "3.jpg"},
    {songName: "Siddhat - Title trake", filePath: "4.mp3", coverPath: "4.jpg"},
    {songName: "Blue Eyes", filePath: "5.mp3", coverPath: "5.jpg"},
    {songName: "Na Na Na Na", filePath: "6.mp3", coverPath: "6.jpg"},
    {songName: "No Lie - Dua lipa", filePath: "7.mp3", coverPath: "7.png"},
    {songName: "Shape of You", filePath: "8.mp3", coverPath: "8.jpg"},
    {songName: "Tu Ake Dekhle", filePath: "9.mp3", coverPath: "9.jpg"},
    {songName: "Dil Diyan Gallan", filePath: "10.mp3", coverPath: "10.jpg"},
    {songName: "Dekhte Dekhte", filePath: "11.mp3", coverPath: "11.jpg"},
    {songName: "Saami Saami", filePath: "12.mp3", coverPath: "12.jpg"},
]
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.setAttribute("name","pause");
        var b = songIndex;
        let gif = document.getElementById(`${b+10}`);
        gif.style.opacity = '1';
        let a = document.getElementById(`${songIndex}`);
        a.classList.remove('fa-play-circle');
        a.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.setAttribute("name","play-circle");
        var b = songIndex;
        let gif = document.getElementById(`${b+10}`);
        gif.style.opacity = '0';
        let a = document.getElementById(`${songIndex}`);
        a.classList.remove('fa-pause-circle');
        a.classList.add('fa-play-circle');
    }
})
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.setAttribute("name","pause");

    })
})

document.getElementById('next').addEventListener('click',()=> {
    if(songIndex>12) {
        songIndex = 1;
    }
    else {
        songIndex = songIndex+1;
    }
    audioElement.src = `${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.setAttribute("name","pause");
    makeAllPlays();
    document.getElementById(songIndex).setAttribute("name","pause");
    let a = document.getElementById(`${songIndex}`);
    a.classList.remove('fa-play-circle');
    a.classList.add('fa-pause-circle');
    let f = document.getElementById(`${songIndex+10}`);
    f.style.opacity = '1';
    let k = document.getElementById(`${songIndex+10}`);
    k.style.opacity = '0';
})

document.getElementById('previous').addEventListener('click',()=> {
    if(songIndex<1) {
        songIndex = 12;
    }
    else {
        songIndex = songIndex-1;
    }
    audioElement.src = `${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.setAttribute("name","pause");
    makeAllPlays();
    let a = document.getElementById(`${songIndex}`);
    a.classList.remove('fa-play-circle');
    a.classList.add('fa-pause-circle');
    let c = document.getElementById(`${songIndex+10}`);
    c.style.opacity = '1';
    let l = document.getElementById(`${songIndex+11}`);
    l.style.opacity = '0';
})