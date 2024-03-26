import SceneManager from './scenemanager.js';
const canvas = document.getElementById('canvas');
import { showInstruction } from './instructionwindow.js';
import { buttonPressSound, waterSound, gameCompleteSound, tilePressSound } from './sounds.js';
import { removeAllChildren, createConfetti } from './utils.js';
const levelid = 15;
import { getJugSolution } from './jugsolution.js';

const instructionHeading = 'Water Jug Puzzles';
const instructionText = `
		<p>Your Goal is to get the exact amount of required water in a jug.</p>
		<p>Use the Fill and Empty Button to Empty or Fill the Corresponding Jug.</p>
		<p>Drag and release one jug over the other to transfer its content.</p>
	`;

class JugPuzzle{
	constructor() {
		this.dragEnd = this.dragEnd.bind(this);
		this.handleTileClick = this.handleTileClick.bind(this);

	}
	async init(){
		const responseTemplate = await fetch('templates/waterjugtemplate.html');
		const templateHtml = await responseTemplate.text();
		const templateContainer = document.createElement('div');
		templateContainer.innerHTML = templateHtml;
		canvas.appendChild(templateContainer);
		this.nextLevelButton = document.getElementById('nextLevelButton');
		this.nextLevelButton.style.visibility = 'hidden';
		if (!localStorage.getItem('showInstruction'+ levelid)){
			showInstruction(false, instructionHeading, instructionText, levelid);
		}
		this.levelSelect = document.getElementById("levelSelect");
		this.victory = false;
		var levels = [
			{
				name: "Level 1",
				difficulty: 'easy',
				jsonData: { 'jugs': [5, 3], 'steps': '6', 'target': '4'}
			},
		
			{
				name: "Level 2",
				difficulty: 'easy',
				jsonData: { 'jugs': [7, 3], 'steps': '8', 'target': '5'}
			},			
			{
				name: "Level 3",
				difficulty: 'easy',
				jsonData: { 'jugs': [11, 3], 'steps': '12', 'target': '4'}
			},
			{
				name: "Level 4",
				difficulty: 'easy',
				jsonData: { 'jugs': [11, 3], 'steps': '12', 'target': '7'}
			},
			{
				name: "Level 5",
				difficulty: 'tedious',
				jsonData: { 'jugs': [10, 7], 'steps': '14', 'target': '5'}
			},	
			{
				name: "Level 6",
				difficulty: 'tedious',
				jsonData: { 'jugs': [11, 5], 'steps': '14', 'target': '8'}
			},
			{
				name: "Level 7",
				difficulty: 'tedious',
				jsonData: { 'jugs': [13, 7], 'steps': '18', 'target': '10'}
			},
			{
				name: "Level 8",
				difficulty: 'tedious',
				jsonData: { 'jugs': [13, 3], 'steps': '14', 'target': '5'}
			},
			{
				name: "Level 9",
				difficulty: 'makes you think',
				jsonData: { 'jugs': [13, 7, 3], 'steps': '7', 'target': '8'}
			},
			{
				name: "Level 10",
				difficulty: 'diabolical',
				jsonData: { 'jugs': [13, 7, 3], 'steps': '7', 'target': '5'}
			},
			{
				name: "Level 11",
				difficulty: 'simple?',
				jsonData: { 'jugs': [13, 11, 5], 'steps': '6', 'target': '12'}
			},
			{
				name: "Level 12",
				difficulty: 'cheeky one',
				jsonData: { 'jugs': [13, 5, 3], 'steps': '6', 'target': '9'}
			},
			{
				name: "Level 13",
				difficulty: 'makes you think',
				jsonData: { 'jugs': [13, 5, 3], 'steps': '6', 'target': '12'}
			}			
			];
		for (var i = 0; i < levels.length; i++) {
			var option = document.createElement("option");
    		option.textContent = levels[i].name;
    		option.value = i;
			option.id = levels[i].name;
    		this.levelSelect.appendChild(option);

		    var levelCompleted = localStorage.getItem(levels[i].name + 'perfect');

			if (levelCompleted === 'true') {
				option.textContent += " ✓";
			} else {
				option.textContent += "  ";
			}
		}
		this.levelSelect.addEventListener('change', () => {
			this.levelSelect.classList.remove('glowing');
			const selectedOption = this.levelSelect.options[this.levelSelect.selectedIndex];
			const selectedValue = selectedOption.value;
			this.setupPuzzle(levels[selectedValue]);
		});
		const helpButton = document.getElementById('helpButton');
		helpButton.addEventListener('click', function() {
			showInstruction(true, instructionHeading, instructionText);
		});	
		const resetButton = document.getElementById('resetButton');
		resetButton.addEventListener('click', function() {
			for (var i=0; i < levels.length; i++) {
				localStorage.setItem(levels[i].name + 'perfect', false);
				localStorage.setItem(levels[i].name + 'simple', false);
				var option = document.getElementById(levels[i].name);
				option.textContent = levels[i].name;
				updateVictoryIcons(levels[i].name);
			}
		});
		this.setupPuzzle(levels[0]);
		const mainMenuButton = document.getElementById('mainMenuButton');
		mainMenuButton.addEventListener('click', function() {
			buttonPressSound();
			SceneManager.goToScene('menu');
		});
		const restartButton = document.getElementById('restartButton');
		restartButton.addEventListener('click', () => {
			buttonPressSound();
			if (this.level) {
				this.setupPuzzle(this.level);
			} else {
				this.setupPuzzle(levels[0]);
			}
		});
		this.nextLevelButton.addEventListener('click', () => {
			buttonPressSound();
			if (this.level) {
				let index = levels.findIndex(obj => JSON.stringify(obj) === JSON.stringify(this.level));
				if (levels.length !== index+1){
					this.setupPuzzle(levels[index+1]);
					this.levelSelect.value = index+1;
				} else {
					this.setupPuzzle(levels[0]);
					this.levelSelect.value = 0;
				}
			}
		});
		this.addDragImplementation();
	}
	setupPuzzle(level){
		this.victory = false;
		this.nextLevelButton.style.visibility = 'hidden';

		const jugContainer = document.getElementById('jugContainer');
		removeAllChildren(jugContainer);
		this.level = level;
		this.config = this.level.jsonData
		getJugSolution(this.config.jugs);
		updateVictoryIcons(this.level.name);

		this.stepCount = document.getElementById('steps');
		this.stepCount.innerText = 0;
		this.targetSteps = document.getElementById('targetSteps');
		this.targetSteps.innerHTML = this.config.steps;
		this.targetWater = document.getElementById('targetWaterLevel');
		this.targetWater.innerHTML = this.config.target;
		this.targetWaterPlural = document.getElementById('targetWaterPlural');
		if (parseInt(this.config.target) === 1){
			this.targetWaterPlural.innerHTML = '&nbsp;Litre ';
		}
		else {
			this.targetWaterPlural.innerHTML = '&nbsp;Litres ';
		}
		this.difficultyText = document.getElementById('difficultyText');
		this.difficultyText.innerHTML = '('+this.level.difficulty + ')';
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
			
			jugIcon.style.height = parseInt(jugIcon.dataset.capacity)*4 + 'vh';
			jug.appendChild(jugSpace);
			jugSpace.appendChild(jugIcon);
			jugContainer.appendChild(jug);

			const jugMove = document.createElement('div');
			jugMove.id = 'jug'+i;
			jugMove.classList.add('jugIcon');
			const iconRect = jugIcon.getBoundingClientRect();
			const vw = window.innerWidth;
			const vh = window.innerHeight;
			const leftVW = (iconRect.left / vw) * 100 + 'vw';
			const topVW = (iconRect.top / vh) * 100 + 'vh';

			jugIcon.appendChild(jugMove);
			
			const jugBack = document.createElement('div');
			jugBack.classList.add('jugBack');
			jugMove.appendChild(jugBack);

			const water = document.createElement('div');
			water.classList.add('waterFill');
			jugBack.appendChild(water);

			const jugText = document.createElement('div');
			jugText.classList.add('jugText');
			jugText.innerText = jugIcon.dataset.currentlevel;

			jugMove.appendChild(jugText);

			const waterLevel = document.createElement('div');
			waterLevel.classList.add('litreText');
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

			fillButton.addEventListener('click', () => {
				if (!this.victory) {
					buttonPressSound();
					if (jugIcon.dataset.capacity !== jugIcon.dataset.currentlevel) {
						jugIcon.dataset.currentlevel = jugIcon.dataset.capacity;
						animateHeightTransition(water, 100);
						jugText.innerText = jugIcon.dataset.currentlevel;
						this.stepIncrement();
						waterSound();
						this.checkWinCondition();
					}
				}
			});
			emptyButton.addEventListener('click', () => {
				if (!this.victory) {
					buttonPressSound();
					if (jugIcon.dataset.currentlevel !== '0') {
						jugIcon.dataset.currentlevel = '0';
						animateHeightTransition(water, 0);
						jugText.innerText = jugIcon.dataset.currentlevel;
						this.stepIncrement();
						waterSound();
						this.checkWinCondition();
					}
				}	
			});
		}
	}
	exit(){
		document.removeEventListener('mouseup', this.dragEnd);
		document.removeEventListener('touchend', this.dragEnd);
		document.removeEventListener('mousedown', this.handleTileClick);
		document.removeEventListener('touchstart', this.handleTileClick);
		
		removeAllChildren(canvas);
	}
	addDragImplementation() {
		const jugContainer = document.getElementById('jugContainer');
		jugContainer.addEventListener('mousedown', this.handleTileClick.bind(this));
		jugContainer.addEventListener('touchstart', this.handleTileClick.bind(this));
		document.addEventListener('mouseup', this.dragEnd);
		document.addEventListener('touchend', this.dragEnd);
	}

		handleTileClick(event) {
		const tile = event.target.closest('.jugIcon');
		if (!tile) return;

		if (this.draggingTile === tile) {
			this.draggingTile = null;
			tile.style.cursor = 'grab';
			this.closeDragElement(tile, event);
			return;
		}
    
		this.draggingTile = tile;
		tile.style.cursor = 'grabbing';
		this.dragStart(tile, event);
	}
	dragStart(tile, event) {
	    this.dragStartTime = Date.now();

		event.preventDefault();
		this.dragging = true;
		if (event.type === 'mousedown') {
			this.handleDragStart(tile, event.clientX, event.clientY);
		} else if (event.type === 'touchstart') {
			const touch = event.touches[0];
			this.handleDragStart(tile, touch.clientX, touch.clientY);
		}
	}

	handleDragStart(elmnt, clientX, clientY) {
		if (this.victory) return;
				
		elmnt.style.zIndex = 1000;
		this.initialRect = elmnt.getBoundingClientRect();

		tilePressSound();
		elmnt.pos3 = clientX;
		elmnt.pos4 = clientY;

		elmnt.boundElementDrag = this.elementDrag.bind(this, elmnt);

		document.addEventListener('touchmove', elmnt.boundElementDrag, { passive: false });
		document.addEventListener('mousemove', elmnt.boundElementDrag, { passive: false });
	}
	elementDrag(elmnt, e) {
		if (!this.draggingTile) return;
		elmnt.dragStarted = true;
		e.preventDefault();
		const vw = window.innerWidth;
		const vh = window.innerHeight;

		if (e.type === 'touchmove' && e.touches.length === 1) {
			const touch = e.touches[0];
			elmnt.pos1 = touch.clientX - elmnt.pos3;
			elmnt.pos2 = touch.clientY - elmnt.pos4;
			elmnt.pos3 = touch.clientX;
			elmnt.pos4 = touch.clientY;


		} else if (e.type === 'mousemove') {
			elmnt.pos1 = e.clientX - elmnt.pos3;
			elmnt.pos2 = e.clientY - elmnt.pos4;
			elmnt.pos3 = e.clientX;
			elmnt.pos4 = e.clientY;
		}
		const newLeft = elmnt.offsetLeft + elmnt.pos1;
		const newTop = elmnt.offsetTop + elmnt.pos2;
		elmnt.style.left = (newLeft / vw) * 100 + "vw";
		elmnt.style.top = (newTop / vw) * 100 + "vw";
	}

	dragEnd(event) {
		if (this.draggingTile) {
		    const halfSecondPassed = (Date.now() - this.dragStartTime) > 500; // 500 milliseconds = 0.5 seconds

			if (this.draggingTile.dragStarted === true || halfSecondPassed) {
				if (this.dragging) {
					this.closeDragElement(this.draggingTile, event);
				}
			} 
		} 
	}

	closeDragElement(elmnt, e) {
			this.draggingTile = null;
		elmnt.dragStarted = false;
		this.dragging = false;
		e.preventDefault();

		elmnt.style.cursor = 'grab';
		const mouseX = elmnt.pos3;
		const mouseY = elmnt.pos4;
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
		elmnt.addEventListener('transitionend', () => {
			elmnt.style.transition = '';
			elmnt.style.transform = '';
			elmnt.style.removeProperty('left');
			elmnt.style.removeProperty('top');
				elmnt.style.zIndex = 10;

		}, { once: true });

		document.removeEventListener('mousemove', elmnt.boundElementDrag);
		document.removeEventListener('touchmove', elmnt.boundElementDrag);
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
			animateHeightTransition(parentWaterFill, parentWaterLevel);
			const targetWaterFill = targetElement.querySelector('.waterFill');
			const targetWaterLevel = Math.round(parseInt(targetElement.dataset.currentlevel)/parseInt(targetElement.dataset.capacity) * 100);

			animateHeightTransition(targetWaterFill , targetWaterLevel);
			this.stepIncrement();
			this.checkWinCondition();
			waterSound();
		}
	}
	checkWinCondition(){
		const jugContainer = document.getElementById('jugContainer');
		const jugsList = jugContainer.querySelectorAll('.jugIconSpace');
		jugsList.forEach(jug => {
			if (jug.dataset.currentlevel === this.config.target && !this.victory){
				createConfetti();
				gameCompleteSound();
				this.levelSelect.classList.add('glowing');
				this.victory = true;
				var perfectVictory = parseInt(this.stepCount.innerText) <= parseInt(this.config.steps);
				if (localStorage.getItem(this.level.name + 'perfect') === 'false' && perfectVictory){
					var option = document.getElementById(this.level.name);
					option.textContent += " ✓";
				}
				localStorage.setItem(this.level.name + 'simple', true);
				if (perfectVictory === true){
					localStorage.setItem(this.level.name + 'perfect', true);
				}
				this.nextLevelButton.style.visibility = 'visible';
			}
		});
		updateVictoryIcons(this.level.name);
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
function updateVictoryIcons(level){
		var simpleVictory = localStorage.getItem(level+'simple');
		var perfectVictory = localStorage.getItem(level + 'perfect');
		const simpleVictoryIcon = document.getElementById('simpleVictory');
		const perfectVictoryIcon = document.getElementById('perfectVictory');
		if (simpleVictory === 'true') {
			simpleVictoryIcon.classList.remove('dimmedVictory');
		} else {
			simpleVictoryIcon.classList.add('dimmedVictory');
		}
		if (perfectVictory === 'true') {
			perfectVictoryIcon.classList.remove('dimmedVictory');
		} else {
			perfectVictoryIcon.classList.add('dimmedVictory');
		}
	}



	function handleDefault(e) {
    if (e && e.preventDefault) {
        e.preventDefault();
    }
}
export default JugPuzzle;