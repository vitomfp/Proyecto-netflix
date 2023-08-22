const miImagen = document.getElementById("miImagen");

if (screen.width > 600) {
  console.log(screen.width);
  miImagen.style.width = "7pc";
  miImagen.src =
    "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2Fnetflux.png?alt=media&token=76c0c8b4-f3c3-495f-911f-ae13c0370dfc";
}
const init = document.getElementById("init")

init.addEventListener('click', ()=>{
    console.log('helo')
    window.location.href = "./Login.html"
})
