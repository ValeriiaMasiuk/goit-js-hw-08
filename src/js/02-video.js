import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
// console.log(iframe);

const player = new Player(iframe);
// console.log(player)

const CURRENT_TIME = "videoplayer-current-time";

player.on('timeupdate', throttle(currentTime, 1000))

let parsedTime = 0;

function currentTime(evt) {
    localStorage.setItem(CURRENT_TIME, evt.seconds)
}

const paused = localStorage.getItem(CURRENT_TIME);

function timeSet(paused) {
    if (paused) {
        parsedTime = JSON.parse(paused);
    } else {
        parsedTime = 0;
    }
}

timeSet(paused);

player.setCurrentTime(parsedTime);