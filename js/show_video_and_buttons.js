AFRAME.registerComponent('show-video-and-buttons', {
  init: function () {
      const el = this.el;

      el.addEventListener("mouseenter", function () {
          el.setAttribute("visible", "false");
          document.querySelector("#my-video-agriculture").setAttribute("visible", "true");
          document.querySelector("#button-play-pause").setAttribute("visible", "true");
          document.querySelector("#button-hide").setAttribute("visible", "true");
      });
  }
});