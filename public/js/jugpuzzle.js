import SceneManager from './scenemanager.js';
const canvas = document.getElementById('canvas');
import { showInstruction } from './instructionwindow.js';
import { buttonPressSound } from './sounds.js';
import { removeAllChildren} from './utils.js';
const levelid = 15;
import { getJugSolution } from './jugsolution.js';
const instructionHeading = 'Water Jug Puzzles';
const instructionText = `
		<p>Your Goal is to get the exact amount of required water in a jug.</p>
		<p>Use the Fill and Empty Button to Empty or Fill the Corresponding Jug.</p>
		<p>Drag and release one jug over the other to transfer its content.</p>
	`;

class JugPuzzle{
	async init(){
		const responseTemplate = await fetch('templates/waterjugtemplate.html');
		const templateHtml = await responseTemplate.text();
		const templateContainer = document.createElement('div');
		templateContainer.innerHTML = templateHtml;
		canvas.appendChild(templateContainer);

		if (!localStorage.getItem('showInstruction'+ levelid)){
			showInstruction(false, instructionHeading, instructionText, levelid);
		}
		var levelSelect = document.getElementById("levelSelect");

		var levels = [
			{
				name: "Level 1",
				difficulty: 1,
				jsonData: { 'jugs': [10, 5, 3], 'steps': '4', 'target': '1'}
			},
			{
				name: "Level 2",
				difficulty: 1,
				jsonData: { 'jugs': [10, 5, 3], 'steps': '4', 'target': '1'}
			},			
			{
				name: "Level 3",
				difficulty: 1,
				jsonData: { 'jugs': [10, 5, 3], 'steps': '4', 'target': '1'}
			},			
			{
				name: "Level 4",
				difficulty: 1,
				jsonData: { 'jugs': [10, 5, 3], 'steps': '4', 'target': '1'}
			}			
			];
		for (var i = 0; i < levels.length; i++) {
			var option = document.createElement("option");
    		option.textContent = levels[i].name;
    		option.value = i;
    		levelSelect.appendChild(option);

		    var levelCompleted = localStorage.getItem(levels[i].name);
			console.log(levels[i].name);
			console.log(levelCompleted);
			if (levelCompleted === 'true') {
				option.textContent += " ✓";
			} else {
				option.textContent += "  ";
			}
		}
		const helpButton = document.getElementById('helpButton');
		helpButton.addEventListener('click', function() {
			showInstruction(true, instructionHeading, instructionText);
		});	
		const resetButton = document.getElementById('resetButton');
		resetButton.addEventListener('click', function() {
			for (var i=0; i < levels.length; i++) {
				localStorage.setItem(levels[i].name, false);
			}
		});
		this.setupPuzzle(levels[0]);
	}
	setupPuzzle(level){
		const jugContainer = document.getElementById('jugContainer');
		removeAllChildren(jugContainer);
		this.level = level;
		this.config = this.level.jsonData
		getJugSolution(this.config.jugs);

		this.stepCount = document.getElementById('steps');
		this.stepCount.innerText = 0;
		console.log(this.config);
		for (var i=0; i < this.config.jugs.length; i++){
			var jugCapacity = this.config.jugs[i];
			const jugSpace = document.createElement('div');
			jugSpace.classList.add('jugSpace');
			
			const jug = document.createElement('div');
			jug.classList.add('jug');

			const jugIcon = document.createElement('div');
			jugIcon.classList.add('jugIconSpace');
			jugIcon.classList.add('target');
			jugIcon.dataset.capacity = this.config.jugs[i];
			jugIcon.dataset.currentlevel = '0';
			
			jugIcon.style.height = parseInt(jugIcon.dataset.capacity)*2 + 'vw';
			jug.appendChild(jugSpace);
			jugSpace.appendChild(jugIcon);
			jugContainer.appendChild(jug);

			const jugMove = document.createElement('div');
			jugMove.classList.add('jugIcon');
			const iconRect = jugIcon.getBoundingClientRect();
			const vw = window.innerWidth;
			const vh = window.innerHeight;
			const leftVW = (iconRect.left / vw) * 100 + 'vw';
			const topVW = (iconRect.top / vh) * 100 + 'vh';

			jugIcon.appendChild(jugMove);
			
			const water = document.createElement('div');
			water.classList.add('waterFill');
			jugMove.appendChild(water);

			const jugText = document.createElement('div');
			jugText.classList.add('jugText');
			jugText.innerText = jugIcon.dataset.currentlevel;

			jugMove.appendChild(jugText);

			const waterLevel = document.createElement('div');
			waterLevel.classList.add('stepText');
			waterLevel.innerText = jugIcon.dataset.capacity + ' litres';

			jug.appendChild(waterLevel);

			const fillButton = document.createElement('button');
			const emptyButton = document.createElement('button');
			fillButton.classList.add('jugButton');
			emptyButton.classList.add('jugButton');

			fillButton.innerText = "Fill";
			emptyButton.innerText = "Empty";
			jug.appendChild(fillButton);
			jug.appendChild(emptyButton);
			this.dragElement(jugMove);

			fillButton.addEventListener('click', () => {
				buttonPressSound();
				if (jugIcon.dataset.capacity !== jugIcon.dataset.currentlevel) {
					jugIcon.dataset.currentlevel = jugIcon.dataset.capacity;
					animateHeightTransition(water, 100);
					jugText.innerText = jugIcon.dataset.currentlevel;
					this.stepIncrement();
				}
			});
			emptyButton.addEventListener('click', () => {
				buttonPressSound();
				if (jugIcon.dataset.currentlevel !== '0') {
					jugIcon.dataset.currentlevel = '0';
					animateHeightTransition(water, 0);
					jugText.innerText = jugIcon.dataset.currentlevel;
					this.stepIncrement();
				}
			});
		}
	}
	exit(){
		removeAllChildren(canvas);
	}
	dragElement(elmnt) {
		this.pos1 = 0, this.pos2 = 0, this.pos3 = 0, this.pos4 = 0;
		elmnt.style.cursor = 'grab';

		const self = this; 
		elmnt.onmousedown = function(e) {
			self.dragMouseDown(elmnt, e);
		};
	}

	dragMouseDown(elmnt, e) {
		this.initialRect = elmnt.getBoundingClientRect();

		elmnt.style.cursor = 'grabbing';
		e = e || window.event;
		e.preventDefault();
		this.pos3 = e.clientX;
		this.pos4 = e.clientY;
		const self = this;
		elmnt.style.zIndex = '9999';
		document.onmouseup = function() {
			self.closeDragElement(elmnt);
		};
		document.onmousemove = function(e) {
			self.elementDrag(elmnt, e);
		};
	}

	elementDrag(elmnt, e) {
		e = e || window.event;
		e.preventDefault();
		const vw = window.innerWidth;
		const vh = window.innerHeight;
		this.pos1 = this.pos3 - e.clientX;
		this.pos2 = this.pos4 - e.clientY;
		this.pos3 = e.clientX;
		this.pos4 = e.clientY;
		elmnt.style.left = ((elmnt.offsetLeft - this.pos1) / vw ) * 100 + "vw";
		elmnt.style.top = ((elmnt.offsetTop - this.pos2) / vw ) * 100 + "vw";
	}
	closeDragElement(elmnt) {
	    elmnt.style.cursor = 'grab';
	    const elmntBounds = elmnt.getBoundingClientRect();
	    const mouseX = event.clientX;
		const mouseY = event.clientY;
		const targetElements = document.getElementsByClassName('target');
		for (const targetElement of targetElements) {
			const targetBounds = targetElement.getBoundingClientRect();
			if (
				mouseX >= targetBounds.left &&
				mouseX <= targetBounds.right &&
				mouseY >= targetBounds.top &&
				mouseY <= targetBounds.bottom
			) {
				if (!targetElement.contains(elmnt)) {
					this.transferWater(elmnt, targetElement);
				}
				break; 
			}
		}
		const leftRect = this.initialRect.left;
		const topRect = this.initialRect.top;
		elmnt.style.transition = 'all 0.5s';
        const dx = this.initialRect.left - elmnt.getBoundingClientRect().left;
        const dy = this.initialRect.top - elmnt.getBoundingClientRect().top;

        elmnt.style.transform = `translate(${dx}px, ${dy}px)`;
		elmnt.addEventListener('transitionend', function() {
            elmnt.style.transition = '';
            elmnt.style.transform = '';
			elmnt.style.removeProperty('left');
			elmnt.style.removeProperty('top');
        }.bind(this), { once: true });
		document.onmouseup = null;
		document.onmousemove = null;
		elmnt.style.zIndex = '1000';
	}
	transferWater(elmnt, targetElement){

		const parentElement = elmnt.parentNode;
		const parentWater = parseInt(parentElement.dataset.currentlevel);
	
		const targetSpace = parseInt(targetElement.dataset.capacity) - parseInt(targetElement.dataset.currentlevel);

		if (parentWater !== 0 && targetSpace !== 0){
			if (parentWater > targetSpace){
				targetElement.dataset.currentlevel = targetElement.dataset.capacity;
				parentElement.dataset.currentlevel = parseInt(parentElement.dataset.currentlevel) - targetSpace;
			}
			else {
				targetElement.dataset.currentlevel = parseInt(targetElement.dataset.currentlevel) + parentWater;
				parentElement.dataset.currentlevel = 0;
			}
	
			const parentJugText = parentElement.querySelector('.jugText');
			parentJugText.innerText = parentElement.dataset.currentlevel;

			const targetJugText = targetElement.querySelector('.jugText');
			targetJugText.innerText = targetElement.dataset.currentlevel;

			const parentWaterFill = parentElement.querySelector('.waterFill');
			const parentWaterLevel = Math.round(parseInt(parentElement.dataset.currentlevel)/parseInt(parentElement.dataset.capacity) * 100);
			console.log(parentWaterLevel);
			animateHeightTransition(parentWaterFill, parentWaterLevel);
			const targetWaterFill = targetElement.querySelector('.waterFill');
			const targetWaterLevel = Math.round(parseInt(targetElement.dataset.currentlevel)/parseInt(targetElement.dataset.capacity) * 100);

			animateHeightTransition(targetWaterFill , targetWaterLevel);
			this.checkWinCondition();
			this.stepIncrement();
		}
	}
	checkWinCondition(){
		const jugContainer = document.getElementById('jugContainer');
		const jugsList = jugContainer.querySelectorAll('.jugIconSpace');
		jugsList.forEach(jug => {
			if (jug.dataset.currentlevel === this.config.target){
				console.log("Victory");
				localStorage.setItem(this.level.name, true);
			}
		});
	}
	stepIncrement(){
		this.stepCount.innerText = parseInt(this.stepCount.innerText) + 1;
	}
}

function animateHeightTransition(element, targetHeight) {
	const parentHeight = element.parentElement.clientHeight;
	const currentHeight = (element.clientHeight / parentHeight) * 100;
  
	const fromHeight = `${currentHeight}%`;
	const toHeight = `${targetHeight}%`;

	const animationName = `fillJug_${targetHeight}pct`;

	const keyframes = `@keyframes ${animationName} {
	from {
		height: ${fromHeight};
	}
	to {
		height: ${toHeight};
	}
	}`;

	const styleElement = document.createElement('style');
	styleElement.textContent = keyframes;
	document.head.appendChild(styleElement);
	element.style.animation = `${animationName} 1s forwards`;
}


export default JugPuzzle;