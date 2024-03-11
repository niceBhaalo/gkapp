import { showSettings } from './settingswindow.js';

let musicIsOn = 'off'; // Retrieve from local storage
let sfxIsOn = localStorage.getItem('sfxPreference') === 'on';     // Retrieve from local storage

const buttonPressElement = document.getElementById('sfxSoundButton');
const tilePressElement = document.getElementById('sfxSoundTile');
const tileSuccessElement = document.getElementById('sfxSuccess');
const gameSuccessElement = document.getElementById('sfxComplete');
const tileFailureElement = document.getElementById('sfxFailure');
const settingsElement = document.getElementById('settings');

export function setupSound(){
    const musicButton = document.getElementById('musicButton');
    const sfxButton = document.getElementById('sfxButton');
    const backgroundMusic = document.getElementById('backgroundMusic');
    createMusicIcon(musicButton);
    createSFXIcon(sfxButton);

    musicButton.addEventListener('click', function () {
        musicIsOn = !musicIsOn; // Toggle the state
        updateIconState(musicButton, musicIsOn, 'music');
        localStorage.setItem('musicPreference', musicIsOn ? 'on' : 'off'); // Save to local storage
        if (musicIsOn){
            backgroundMusic.play();
        } else if (!musicIsOn){
            backgroundMusic.pause();
        }
    });

    sfxButton.addEventListener('click', function () {
        sfxIsOn = !sfxIsOn; // Toggle the state
        updateIconState(sfxButton, sfxIsOn, 'sfx');
        localStorage.setItem('sfxPreference', sfxIsOn ? 'on' : 'off'); // Save to local storage
    });
    setupSettings();
}
function createMusicIcon(button) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('class', 'music-icon');
    svg.setAttribute('id', 'musicsvg');

    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute('class', 'centered-icon');

    svg.appendChild(use);

    button.appendChild(svg);
    updateIconState(button, false, 'music'); // Set the initial state
}
function createSFXIcon(button) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('class', 'music-icon');
    svg.setAttribute('id', 'sfxsvg');

    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute('class', 'centered-icon');

    svg.appendChild(use);

    button.appendChild(svg);
    updateIconState(button, true, 'sfx'); // Set the initial state
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
