import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
// console.log(iframe);

const player = new Vimeo(iframe);
// console.log(player)

const CURRENT_TIME = "videoplayer-current-time";

player.on('timeupdate', throttle(currentTime, 1000))

function currentTime(data) {
    localStorage.setItem(CURRENT_TIME, data.seconds)
}

const paused = localStorage.getItem(CURRENT_TIME);

let parsedTime;

function timeSet(paused) {
    if (paused) {
        parsedTime = JSON.parse(paused)
    } else {
        parsedTime = 0;
    }
}

timeSet(paused);

player.setCurrentTime(parsedTime);