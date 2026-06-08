const bg = new Audio('xmebi/bg_music.mp3');
bg.loop = true;
var sound_foto = document.getElementById('xmis_chartva_gamortvaa');




bg.play();
bg.volume = 0.2;



function xma_gamortva_an(){
    if (bg.paused) {
        bg.play();
        bg.volume = 0.2;
        bg.loop = true;
        sound_foto.style.backgroundImage = 'url("fotoebi/xma_chartuli.svg")';
      } else {
        bg.pause();
        sound_foto.style.backgroundImage = 'url("fotoebi/xma_gamortuli.svg")';
      }
}



document.getElementById('chasatvirti_ekrani').style.display = "none"; 
