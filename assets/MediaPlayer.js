function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || []; //agregamos al plugin

  this.initPlugins(); //inicializar los plugins
}

MediaPlayer.prototype.initPlugins = function () {
  this.plugins.forEach(plugin => {
    plugin.run(this);
  });
}

MediaPlayer.prototype.playAndPause = function () {
  (this.media.paused)
    ? this.media.play()
    : this.media.pause()
};

MediaPlayer.prototype.toggleMute = function () {
  (this.media.muted === false)
    ? this.media.muted = true
    : this.media.muted = false
}
//puedes agregar el nombre que quieras al final
// MediaPlayer.prototype.play = function() {
//   this.media.play();
// };

// MediaPlayer.prototype.pause = function() {
//   this.media.pause();
// };


// MediaPlayer.prototype.mute =  function () {
  //   this.media.muted = true;
  // }
  
  // MediaPlayer.prototype.unmute = function () {
    //   this.media.muted = false
    // }

export default MediaPlayer;
