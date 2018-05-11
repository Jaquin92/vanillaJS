window.addEventListener("keydown", function (e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`.button[data-key="${e.keyCode}"]`);
    if (!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing");
});

function removeTransition(e) {
    if (e.propertyName != 'border-bottom-width') { return; }
    this.classList.remove("playing")
}

const keys = document.querySelectorAll(".button");
keys.forEach(item => item.addEventListener('transitionend', removeTransition));