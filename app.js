const pianoKeys = document.querySelectorAll('.key')

const playSound = (url) => {
    new Audio(url).play();
    console.log(url);
};

pianoKeys.forEach((pianoKey) => {
    const pianoKeyId = pianoKey.id;
    const location = `keys/${pianoKeyId}.mp3`;
    pianoKey.addEventListener('click', () => playSound(location));
});