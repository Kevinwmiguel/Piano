const keyStatus = {
    q: false,
    2: false,
    w: false,
    3: false,
    e: false,
    r: false,
    5: false,
    t: false,
    6: false,
    y: false,
    7: false,
    u: false,
    b: false,
    c: false,
    d: false,
    g: false,
    h: false,
    j: false,
    m: false,
    n: false,
    s: false,
    v: false,
    x: false,
    z: false,
};

const audioStatus = {};


function playSound(key) {
    if (keyStatus[key]) {
        if (!audioStatus[key]) {
            audioStatus[key] = new Audio(`assets/audio/${key}.mp3`);
        }
        audioStatus[key].play();
    } else if (!keyStatus[key] && audioStatus[key]) {
        if (!audioStatus[key].paused) {
            audioStatus[key].pause();
            audioStatus[key].currentTime = 0;
        }
    }
}

document.addEventListener('keydown', (event) => {
    if (keyStatus.hasOwnProperty(event.key)) {
        keyStatus[event.key] = true;
        const key = event.key.toLowerCase();
        const keyElement = document.querySelector(`.white[data-key="${key}"]`);
        if (keyElement) {
            keyElement.classList.add('key-pressed');
        }
        const keyElementb = document.querySelector(`.black[data-key="${key}"]`);
        if (keyElementb) {
            keyElementb.classList.add('key-pressedb');
        }
        playSound(event.key);

    }

});

document.addEventListener('keyup', (event) => {
    if (keyStatus.hasOwnProperty(event.key)) {
        keyStatus[event.key] = false;
        const key = event.key.toLowerCase();
        const keyElement = document.querySelector(`.white[data-key="${key}"]`);
        if (keyElement) {
            keyElement.classList.remove('key-pressed');
        }
        const keyElementb = document.querySelector(`.black[data-key="${key}"]`);
        if (keyElementb) {
            keyElementb.classList.remove('key-pressedb');
        }
        playSound(event.key);
    }

});
