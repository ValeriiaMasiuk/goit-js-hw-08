import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
// console.log(iframe);

const player = new Vimeo(iframe);
// console.log(player)

const CURRENT_TIME = "videoplayer-current-time";

player.on('timeupdate', throttle(currentTime, 1000))

function currentTime({seconds}) {
    localStorage.setItem(CURRENT_TIME, seconds)
}

player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME)));

