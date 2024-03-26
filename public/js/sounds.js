import { showSettings } from './settingswindow.js';

let musicIsOn = localStorage.getItem('musicPreference') === 'on'; // Retrieve from local storage
let sfxIsOn = localStorage.getItem('sfxPreference') === 'on';     // Retrieve from local storage
let userIsActive = false;


const buttonPressElement = document.getElementById('sfxSoundButton');
const tilePressElement = document.getElementById('sfxSoundTile');
const tileSuccessElement = document.getElementById('sfxSuccess');
const gameSuccessElement = document.getElementById('sfxComplete');
const tileFailureElement = document.getElementById('sfxFailure');
const waterSoundElement = document.getElementById('water');
const settingsElement = document.getElementById('settings');

tileSuccessElement.volume = 0.25;
buttonPressElement.volume = 0.25;
waterSoundElement.volume = 0.1;
tileFailureElement.volume = 0.25;
tilePressElement.volume = 0.25;
export function setupSound(){
    const musicButton = document.getElementById('musicButton');
    const sfxButton = document.getElementById('sfxButton');
    const backgroundMusic = document.getElementById('backgroundMusic');
    createMusicIcon(musicButton);
    createSFXIcon(sfxButton);
    musicButton.addEventListener('click', function () {
        musicIsOn = !musicIsOn;
        updateIconState(musicButton, musicIsOn, 'music');
        localStorage.setItem('musicPreference', musicIsOn ? 'on' : 'off'); // Save to local storage
        if (musicIsOn){
            backgroundMusic.play();
        } else if (!musicIsOn){
            backgroundMusic.pause();
        }
    });

    sfxButton.addEventListener('click', function () {
        sfxIsOn = !sfxIsOn;
        updateIconState(sfxButton, sfxIsOn, 'sfx');
        localStorage.setItem('sfxPreference', sfxIsOn ? 'on' : 'off');
    });
    setupSettings();
    if (musicIsOn) {
        document.addEventListener('mousedown', playBackgroundMusic);
        document.addEventListener('keydown', playBackgroundMusic);
    }

    function playBackgroundMusic () {
        if (musicIsOn){
            backgroundMusic.play();
        } else {
            backgroundMusic.pause();
        }
        document.addEventListener('keydown', playBackgroundMusic);
        document.removeEventListener('mousemove', playBackgroundMusic);
    }
}
function createMusicIcon(button) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('class', 'music-icon');
    svg.setAttribute('id', 'musicsvg');
    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute('class', 'centered-icon');
    svg.appendChild(use);
    button.appendChild(svg);
    updateIconState(button, musicIsOn, 'music'); // Set the initial state
}
function createSFXIcon(button) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('class', 'music-icon');
    svg.setAttribute('id', 'sfxsvg');

    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute('class', 'centered-icon');

    svg.appendChild(use);

    button.appendChild(svg);
    updateIconState(button, sfxIsOn, 'sfx'); // Set the initial state
}

function setupSettings(){
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('class', 'music-icon');
    svg.setAttribute('id', 'settingssvg');
    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute('class', 'centered-icon');
    use.setAttribute('href', '#settingsicon');
    svg.appendChild(use);
    settingsElement.appendChild(svg);
    settingsElement.addEventListener('click', () => {
        showSettings();
    });
}
function updateIconState(button, isOn, iconName) {
  const svg = button.querySelector('svg');
  const use = svg.querySelector('use');
  
  const iconId = isOn ? `${iconName}on` : `${iconName}off`;
  use.setAttribute('href', `#${iconId}`);
}

export function buttonPressSound(){
    buttonPressElement.currentTime = 0;  
if(sfxIsOn){
        buttonPressElement.play();
    }
}
export function tilePressSound(){
    if(sfxIsOn){
        tilePressElement.play();
    }
}
export function tileSuccessSound(){
    tileSuccessElement.currentTime = 0;
    if(sfxIsOn){
        tileSuccessElement.play();
    }
}
export function gameCompleteSound(){
    if(sfxIsOn){
        gameSuccessElement.play();
    }
}
export function tileFailureSound(){
    if(sfxIsOn){
        tileFailureElement.play();
    }
}
export function waterSound(){
    waterSoundElement.currentTime = 0;
    if(sfxIsOn){
        waterSoundElement.play();
    }
}