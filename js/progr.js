const $videoPlayer = document.getElementById('vid-player');
const $btnBackwrd = document.getElementById('btn-backwrd');
const $btnPlay = document.getElementById('btn-play');
const $btnPause = document.getElementById('btn-pause');
const $btnForwrd = document.getElementById('btn-forwrd');
const $progress = document.getElementById('player-range'); 

$btnBackwrd.addEventListener('click', () => {
    $videoPlayer.currentTime -= 10;
});

$btnPlay.addEventListener('click', () => {
    $videoPlayer.play();
    $btnBackwrd.hidden = false;
    $btnPlay.hidden = true;
    $btnPause.hidden = false;
    $btnForwrd.hidden = false;

}); 

$btnPause.addEventListener('click', () => {
    $videoPlayer.pause();
    $btnPlay.hidden = false;
    $btnPause.hidden = true;
});

$btnForwrd.addEventListener('click', () => {
    $videoPlayer.currentTime += 10;
});

$videoPlayer.addEventListener('loadedmetadata', () => {
    $progress.max = $videoPlayer.duration;
})

$videoPlayer.addEventListener('timeupdate', () => {
    $progress.value = $videoPlayer.currentTime;
})

$progress.addEventListener('input', () => {
    $videoPlayer.currentTime = $progress.value;
})