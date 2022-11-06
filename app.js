/* Display Mapping - show the note of the key played using the id */
const displayMapping = {
    'c-1' : 'C',
    'cs-1': 'C#',
    'd-1': 'D',
    'ds-1': 'D#',
    'e-1': 'E',
    'f-1': 'F',
    'fs-1': 'F#',
    'g-1': 'G',
    'gs-1': 'G#',
    'a-1': 'A',
    'as-1': 'A#',
    'b-1': 'B',
    'c-2' : 'C',
    'cs-2': 'C#',
    'd-2': 'D',
    'ds-2': 'D#',
    'e-2': 'E',
    'f-2': 'F',
    'fs-2': 'F#',
    'g-2': 'G',
    'gs-2': 'G#',
    'a-2': 'A',
    'as-2': 'A#',
    'b-2': 'B',
};

/* Grab all the keys */
const pianoKeys = document.querySelectorAll('.key')

/* Plays Sample and Displays Note Played */
const playSound = (note, url) => {
    //Play Sound
    new Audio(url).play();
    //Get note name to display
    document.getElementById('note').innerHTML = displayMapping[note];
};

/* Wire Event Listener to each key - use Id to play correct key */
pianoKeys.forEach((pianoKey) => {
    //Get the note played using the element id
    const pianoKeyId = pianoKey.id;
    //Generate the filename for the sample so we can play it
    const location = `keys/${pianoKeyId}.mp3`;
    //Bind the event to the specified key
    pianoKey.addEventListener('click', () => playSound(pianoKeyId, location));
});