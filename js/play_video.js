AFRAME.registerComponent('play-video', {
    schema: {
        video: { type: 'string' }
    },
    init: function () {
        const el = this.el;
        const video = this.data.video;
        let buttonPlay = false;
        let justEntered = false;

        document.querySelector(video).play();

        el.addEventListener("mouseenter", function () {
            if (justEntered) return;

            if (buttonPlay) {
                document.querySelector(video).play();
                el.setAttribute("material", "src", "#img-button-pause");
                buttonPlay = false;
            } else {
                document.querySelector(video).pause();
                el.setAttribute("material", "src", "#img-button-play");
                buttonPlay = true;
            }
            justEntered = true;
        });

        el.addEventListener("mouseleave", function () {
            justEntered = false;
        });
    }
});