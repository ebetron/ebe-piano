/* Grab all the keys */
const pianoKeys = document.querySelectorAll('.key')

/* Initialize Web Audio API to play selected sample */
const playSound = (url) => {
    new Audio(url).play();
    console.log(url);
};

/* Wire Event Listener to each key - use Id to play correct key */
pianoKeys.forEach((pianoKey) => {
    const pianoKeyId = pianoKey.id;
    const location = `keys/${pianoKeyId}.mp3`;
    pianoKey.addEventListener('click', () => playSound(location));
});