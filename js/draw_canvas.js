AFRAME.registerComponent('draw-canvas', {
  schema: {
    image: { type: 'string' },
    canvas: { type: 'string' }
  },
  init: function () {
    this.canvas = document.querySelector(this.data.image);
    // we'll update this manually
    this.texture = null;
    // let canvas = document.getElementById("source-canvas");
    // wait until the element is ready
    this.el.addEventListener('loaded', e => {
      // create the texture
      this.texture = new THREE.CanvasTexture(this.canvas);

      // get the references neccesary to swap the texture
      let mesh = this.el.getObject3D('mesh');
      mesh.material.map = this.texture;
      // if there was a map before, you should dispose it
    });

    const image = this.data.image;
    const canvas = this.data.canvas;

    let imageElement = document.querySelector(image);
    let canvasElement = document.querySelector(canvas);
    let ctx = canvasElement.getContext("2d");

    ctx.drawImage(imageElement, 0, 0, 100, 100);
  },
  tick: function () {
    // if the texture is created - update it
    if (this.texture) this.texture.needsUpdate = true;
  }
});