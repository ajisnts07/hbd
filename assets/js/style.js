// Audio
let audio = document.getElementById('mp3');
audio.loop = true;
audio.hidden = true;
audio.play();
let button = document.getElementById('play');

function play() {
  if (audio.paused) {
    button.style.background = 'url(assets/img/pause.png)';
    audio.play();
  } else {
    button.style.background = 'url(assets/img/play.png)';
    audio.pause();
  }
}
