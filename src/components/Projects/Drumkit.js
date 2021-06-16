
export function Drumkit() {
    window.addEventListener('keydown', function(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
        if (!audio) return; //if no audio, then it returns which means execution of the function is stopped
        audio.currentTime = 0;
        audio.play();
        console.log(key);
        key.classList.add('playing');
    });
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitioned', removeTransition));