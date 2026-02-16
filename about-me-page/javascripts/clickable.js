AFRAME.registerComponent('clickable', {
  schema: { url: { type: 'string' } },

  init() {
    this.el.addEventListener('click', () => {
      if (this.data.url.startsWith('mailto:')) {
        window.location.href = this.data.url; // triggers mail client
      } else {
        window.open(this.data.url, '_blank'); // opens in new tab
      }
    });
  }
});
