AFRAME.registerComponent('hide-video-and-buttons', {
  init: function () {
    const el = this.el;

    el.addEventListener("mouseenter", function () {
      document.querySelector("#my-video-agriculture").setAttribute("visible", "false");
      document.querySelector("#button-play-pause").setAttribute("visible", "false");
      document.querySelector("#button-hide").setAttribute("visible", "false");
      document.querySelector("#plane-canvas-video").setAttribute("visible", "true");
    });
  }
});