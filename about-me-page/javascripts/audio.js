AFRAME.registerComponent('start-audio-on-click', {
  init: function () {
    const el = this.el;

    const startAudio = () => {
      const audioContext = AFRAME.audioContext;

      if (audioContext && audioContext.state === 'suspended') {
        audioContext.resume();
      }

      const sound = el.components.sound;
      if (sound) {
        sound.playSound();
      }

      window.removeEventListener('click', startAudio);
    };

    window.addEventListener('click', startAudio);
  }
});
