const video = document.getElementById("video");
const play = document.getElementById("play");
const Sec1 = document.getElementById("Sec1");
const miImagen = document.getElementById("miImagen");

if (screen.width > 600) {
  console.log(screen.width);
  miImagen.style.width = "7pc";
  miImagen.src =
    "https://firebasestorage.googleapis.com/v0/b/fb-react-e2e7c.appspot.com/o/netflix%20grande.png?alt=media&token=c66d5fc0-5d93-456d-8544-e492b8453899";
}

play.addEventListener("click", () => {
  console.log("kei");
  video.style.opacity = "1";
  video.play();
  Sec1.style.background = "#181818";
});
