import { removeAllChildren } from './utils.js';
import SceneManager from './scenemanager.js';

const canvas = document.getElementById('canvas');

class MainMenuScene{
	constructor(){
		this.noteElement = null;
	}
	init(){
		this.buttonContainer = document.createElement('div');
		this.buttonContainer.classList.add('buttonContainer');
		canvas.appendChild(this.buttonContainer);

		this.startButton = document.createElement('button');
		this.startButton.classList.add('startButton');
		this.startButton.textContent = 'Start';
		
		this.mode1Button = document.createElement('button');
		this.mode1Button.classList.add('modeButton');
		this.mode1Button.style.left = 40 + 'vw';
		this.mode1Button.textContent = 'Classic Mode';

		this.mode2Button = document.createElement('button');
		this.mode2Button.classList.add('modeButton');
		this.mode2Button.style.left = 60 + 'vw';
		this.mode2Button.textContent = 'Mode 2'
		this.mode2Button.style.outline = '2px solid black';

		this.loginButton = document.createElement('button');
		this.loginButton.classList.add('modeButton');
		this.loginButton.style.left = 1 + 'vw';
		this.loginButton.style.top = 1 + 'vw';
		this.loginButton.textContent = 'Log In';
		
		this.loginButton.addEventListener('click', signInCall);
		
		function signInCall (){
			window.location.href = '/auth/google';
		}
 		let targetMode = 'classicMode';
		this.buttonContainer.appendChild(this.startButton);
		this.buttonContainer.appendChild(this.mode1Button);
		this.buttonContainer.appendChild(this.mode2Button);
		this.buttonContainer.appendChild(this.loginButton);
		
		this.startButton.addEventListener('click', () => {
			SceneManager.goToScene(targetMode);
		});
		this.mode1Button.addEventListener('click', () => {
			this.mode1Button.style.outline = '2px solid white';
			this.mode2Button.style.outline = '2px solid black';
			targetMode = 'classicMode';
		});
		this.mode2Button.addEventListener('click', () => {
			this.mode1Button.style.outline = '2px solid black';
			this.mode2Button.style.outline = '2px solid white';
			targetMode = 'classicMode';
		});
	}
	exit(){
		removeAllChildren(canvas);
	}
}

export default MainMenuScene;