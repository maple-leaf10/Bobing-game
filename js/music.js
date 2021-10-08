var audio = document.getElementById("music");
$("#btn").bind("touchstart",function bf() {
    if (audio != null) {
        if (audio.paused) {
            audio.play();
            $("#btn").addClass("active")
        } else {
            audio.pause();
            $("#btn").removeClass("active")
        }
    }
})