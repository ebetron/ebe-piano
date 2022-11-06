const pianoKeys = document.querySelectorAll('.key')

const playSound = (url) => {
    new Audio(url).play();
    console.log(url);
};

pianoKeys.forEach((pianoKey, i) => {
    const keynumber = i < 9 ? `0${i + 1}` : (i + 1);
    const location = `keys/key${keynumber}.mp3`;
    pianoKey.addEventListener('click', () => playSound(location));
});