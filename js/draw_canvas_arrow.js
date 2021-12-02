AFRAME.registerComponent('draw-canvas-arrow', {
  schema: {
    image: { type: 'string' },
    imageStrong: { type: 'string' },
    canvas: { type: 'string' }
  },
  init: function () {
    const el = this.el;
    const image = this.data.image;
    const imageStrong = this.data.imageStrong;
    const canvas = this.data.canvas;

    this.imageElement = document.querySelector(image);
    this.imageStrongElement = document.querySelector(imageStrong);
    this.canvasElement = document.querySelector(canvas);

    // we'll update this manually
    this.texture = null;
    // let canvas = document.getElementById("source-canvas");
    // wait until the element is ready
    this.el.addEventListener('loaded', e => {
      // create the texture
      this.texture = new THREE.CanvasTexture(this.canvasElement);

      // get the references neccesary to swap the texture
      let mesh = this.el.getObject3D('mesh');
      mesh.material.map = this.texture;
      // if there was a map before, you should dispose it
    });

    this.ctx = this.canvasElement.getContext("2d");

    this.ctx.drawImage(this.imageElement, 0, 0, 100, 100);

    el.addEventListener("mouseenter", e => {
      this.ctx.drawImage(this.imageStrongElement, 0, 0, 100, 100);
    });

    el.addEventListener("mouseleave", e => {
      console.log("salió")
      this.ctx.clearRect(0, 0, 100, 100);
      this.ctx.drawImage(this.imageElement, 0, 0, 100, 100);
    });
  },
  tick: function () {
    // if the texture is created - update it
    if (this.texture) this.texture.needsUpdate = true;
  }
});