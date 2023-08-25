const video = document.getElementById('video')
const play = document.getElementById('play')

 
 
 
play.addEventListener('click', ()=>{
    console.log('kei')
    video.style.opacity = "1";
    video.play();
})
