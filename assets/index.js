import MediaPlayer from './MediaPlayer.js';
import AutoPlay from '../plugins/AutoPlay.js';


const video = document.querySelector('video');
const button = document.querySelector('button');
const muteButton = document.querySelector(`.mute`);

const player = new MediaPlayer({ el: video, plugins: [ new AutoPlay()] });
button.onclick = () => player.playAndPause();
muteButton.onclick = () => player.toggleMute();

