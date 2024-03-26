import SceneManager from './scenemanager.js';
import { removeAllChildren, moveTileToCorrect, displayInfo, shuffleArray, createConfetti } from './utils.js';
const canvas = document.getElementById('canvas');
import { getAchievementsForLevel, getTileData } from './fetchdatafromstorage.js';
import { showInstruction } from './instructionwindow.js';
import { showAchievements } from './achievementwindow.js';
import { storeAchievementInStorage, isAchievementComplete } from './achievementprogress.js';
import { buttonPressSound, tilePressSound, tileSuccessSound, gameCompleteSound, tileFailureSound } from './sounds.js';

let tilesData;
let elementNames;
let checkState = true;

const levelid = 1;
const instructionHeading = 'Classic Mode';
const instructionText = `
		<p><em>There are two ways to place a tile in its correct spot.</em></p>
		<p>You can either drag the tile to its proper place, or you can type in the name of the element and it will automatically fly into its appropriate place.</p>
	`;

const achievements = getAchievementsForLevel(levelid);
class ClassicMode{
	constructor(){
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.textBoxOpen = false;
		this.dragEnd = this.dragEnd.bind(this);
		this.handleTileClick = this.handleTileClick.bind(this);

		
	}
	async init(){
		({ tilesData, elementNames } = getTileData());
	    if (!localStorage.getItem('showInstruction'+ levelid)){
			showInstruction(false, instructionHeading, instructionText, levelid);
		}
	    const responseTemplate = await fetch('templates/classictemplate.html');
		const templateHtml = await responseTemplate.text();
		this.solution = [];
		const templateContainer = document.createElement('div');
		templateContainer.innerHTML = templateHtml;
		canvas.innerHTML = templateHtml;

		this.mouseInput = false;
		this.buttonContainer = document.getElementById('buttonContainer');
		this.restartButton = document.getElementById('restartButton');
		this.shuffleButton = document.getElementById('shuffleButton');
		this.exitButton = document.getElementById('exitButton');
		this.timerElement = document.getElementById('timer');
		this.scoreElement = document.getElementById('score');
		this.gridContainer = document.getElementById('gridContainer');
		this.togglesContainer = document.getElementById('toggleContainer');
		this.messageContainer = document.getElementById('messageContainer');
		this.instructionContainer = document.getElementById('instructionContainer');
		this.achievementButton = document.getElementById('achievementButton');

		const helpButton = document.getElementById('helpButton');
		this.tileContainer = document.getElementById('tileContainer');

		helpButton.addEventListener('click', function() {
			showInstruction(true, instructionHeading, instructionText);
		});	
		achievementButton.addEventListener('click', function(event) {
			showAchievements(levelid, event.clientX, event.clientY);
		});

		this.handleKeyDown = this.handleKeyDown.bind(this); // Bind the method to the class instance
		this.textBoxOpen = false;
			
		this.scoreElement.dataset.total = 118;
		this.scoreElement.dataset.current = 0;
		this.scoreElement.textContent = this.scoreElement.dataset.current + '/' + this.scoreElement.dataset.total;

		this.snapPoints = {};
		
		this.createTilesOutlines();
		this.createToggleButtonListeners();
		this.timerInterval;
		this.milliseconds = 0;
		this.seconds = 0;
		this.minutes = 0;
		this.shuffleTiles();
		this.startTimer();
		
		this.restartButton.addEventListener('click', () => {
			buttonPressSound();
			window.removeEventListener('keydown', this.handleKeyDown);	
			SceneManager.goToScene('classic');
		});
		this.exitButton.addEventListener('click', () => {
			buttonPressSound();
			window.removeEventListener('keydown', this.handleKeyDown);
			SceneManager.goToScene('menu');
		});
		
		// Define the shuffleTiles function


		// Add event listener for shuffleButton
		this.shuffleButton.addEventListener('click', () => {
			buttonPressSound();
			this.shuffleTiles.call(this); // Call shuffleTiles function within the context of 'this'
		});
		window.addEventListener('keydown', this.handleKeyDown);	
		this.addDragImplementation();
	}
	exit(){
		this.removeNoteElement();
		this.tileContainer.removeEventListener('mouseup', this.dragEnd);
		this.tileContainer.removeEventListener('touchend', this.dragEnd);
		this.tileContainer.removeEventListener('mousedown', this.handleTileClick);
		this.tileContainer.removeEventListener('touchstart', this.handleTileClick);

		
		removeAllChildren(canvas);
		clearInterval(this.timerInterval);
		window.removeEventListener('keydown', this.handleKeyDown);
		this.textBoxOpen = false;
	}
	handleKeyDown(event) {
		if (this.textBoxOpen === false) {
			const alphabetKeys = /^[a-zA-Z]$/;
			if (alphabetKeys.test(event.key)) {
				this.textBoxOpen = true;
				this.createNewNote(event.key);
			}
		}
	}
	createNewNote(firstLetter){
		this.noteElement = document.createElement('div');
		this.noteElement.classList.add('note');
		const textInput = document.createElement('textarea');
		textInput.classList.add('note-text-input');
		this.noteElement.appendChild(textInput);
		textInput.focus();
		textInput.value = firstLetter;
		let maxWidthNotReached = true;
		const minimumWidth = 200;
		const screenWidth = window.innerWidth;
		canvas.appendChild(this.noteElement);
		setTimeout(() => {
			textInput.focus();
		}, 50);
		textInput.addEventListener('input', () => {
			const scrollWidth = textInput.scrollWidth;
			const scrollHeight = textInput.scrollHeight;
			if ((scrollWidth <= screenWidth / 4) && (scrollWidth > minimumWidth) && (maxWidthNotReached)){
				textInput.style.width = (scrollWidth + 10) + 'px';
			} 
			if (scrollWidth > screenWidth / 4 || !maxWidthNotReached)
			{
				maxWidthNotReached = false;
				textInput.style.whiteSpace = 'normal';
				this.noteElement.style.height = scrollHeight;
				textInput.style.height = scrollHeight;
			}
			if (textInput.value === '')
			{
				maxWidthNotReached = true;
				textInput.style.width = 200;
				textInput.style.height = 'auto';
				textInput.style.whiteSpace = 'nowrap';
			}
		});
		textInput.addEventListener('keyup', (event) => {
			if (event.key === 'Enter') {
				const enteredText = textInput.value;
				this.noteElement.textContent=enteredText;
				this.noteElement.style.height = 'auto'; 
				const desiredHeight = this.noteElement.scrollHeight;
				this.noteElement.style.height = desiredHeight;
				this.noteElement.style.cursor = 'grab'
				canvas.removeEventListener('click', this.handleClick);
				if (this.checkingInput(enteredText) === true)
				{
					tileSuccessSound();
					this.updateScore();
				}
				else {
					tileFailureSound();
				}
				this.removeNoteElement();
			} else if (event.key === 'Escape'){
				this.removeNoteElement();
			}
		});
		canvas.addEventListener('mousedown', this.handleClick.bind(this));
	}
	removeNoteElement(){
		if (this.textBoxOpen === true){
			canvas.removeChild(this.noteElement);
			this.textBoxOpen = false;
			canvas.removeEventListener('mousedown', this.handleClick.bind(this));
		}
	}
	handleClick(){
		if (this.textBoxOpen === true){
			this.removeNoteElement();
		}  
	}
	createTilesOutlines(){
		const windowRatio = 0.7;
		const screenRatio = window.innerWidth / window.innerHeight;
		const screenWidth = window.innerWidth * windowRatio;
		const leftPadding = window.innerWidth * (1-windowRatio)/2;
		const topPadding = window.innerWidth * 0.01;
		const tileWidth = screenWidth / 18;
		const columnElementsSet = new Set([1,4,21,22,23,24,25,26,27,28,29,30,5,6,7,8,9,2,58,59,60,61,62,63,64,65,66,67,68,69,70,71]);
		const rowElementsSet = new Set([1,3,11,19,37,55,87,22,40,72,104,58,90]);
		const columnElementsList = [1,4,21,22,23,24,25,26,27,28,29,30,5,6,7,8,9,2,58,59,60,61,62,63,64,65,66,67,68,69,70,71];
		const rowElementsList = [1,3,11,19,37,55,87,58,90,22,40,72,104];
		const rowCorrespondence = {};
		const columnCorrespondence = {};
		for (let i=0; i < rowElementsList.length; i++){
			rowCorrespondence[rowElementsList[i]] = i + 1;
		}
		for (let i=0; i < columnElementsList.length; i++){
			columnCorrespondence[columnElementsList[i]] = i + 1;
		}
		let currentTileNumber = 1;
		shuffleArray(tilesData);
		tilesData.forEach(elementData => {
			let hDisplace = 0;
			let vDisplace = 0;
			const tileOutline = document.createElement('div');
			tileOutline.classList.add('tileOutline');
			tileOutline.style.position = 'absolute';
			tileOutline.style.width = (tileWidth - 8) / window.innerWidth  * 100 + 'vw';
			tileOutline.style.height = tileOutline.style.width;
			if (elementData.hDisplace === 'TRUE')
			{
				hDisplace = 10;
			}
			if (elementData.vDisplace === 'TRUE')
			{
				vDisplace = 10;
			}
			tileOutline.style.left = (hDisplace + leftPadding - tileWidth + elementData.elementColumn*(tileWidth)) / window.innerWidth  * 100 + 'vw';
			tileOutline.style.top = (vDisplace + topPadding - tileWidth  + elementData.elementRow * (tileWidth)) / window.innerWidth  * 100 + 'vw';
			tileOutline.id = elementData.an + " outline";
			this.gridContainer.appendChild(tileOutline);
			const snapPoint = {x: tileOutline.style.left, y: tileOutline.style.top, occupied: false, occupiedBy: 0};
			this.snapPoints[elementData.an] = snapPoint;
			const tileElement = document.createElement('div');
			tileElement.classList.add('tile');
			tileElement.style.position = 'absolute';
			tileElement.style.width = (tileWidth - 8) / window.innerWidth  * 100 + 'vw';
			tileElement.style.height = tileElement.style.width;
			tileElement.style.backgroundColor = elementData.color;
			tileElement.textContent = elementData.symbol;
			tileElement.dataset.symbol = elementData.symbol;
			setTilePosition(tileElement, currentTileNumber);
			tileElement.dataset.elementID = elementData.an;
			tileElement.dataset.currentPos = 0;
			tileElement.dataset.correctlyPlaced = 'false';
			tileElement.dataset.placed = 'false';
			tileElement.id = elementData.an;
			tileElement.dataset.englishName = elementData.elementName;
			tileElement.dataset.latinName = elementData.latinName;
			tileElement.dataset.hasLatin = elementData.hasLatin;
			tileElement.dataset.realRow = elementData.realRow;
			tileElement.dataset.realColumn = elementData.realColumn;
			tileElement.dataset.category = elementData.category;
			tileElement.dataset.state = elementData.state;
			tileElement.dataset.radioactivity = elementData.radioactivity;
			tileElement.dataset.am = elementData.am;
			tileElement.dataset.stableIsotopes = elementData.stableIsotopes;
			tileElement.dataset.discoveryYear = elementData.discovery;
			tileElement.dataset.electronConfiguration = elementData.electronConfiguration;
			tileElement.dataset.meltingPoint = elementData.meltingPoint;
			tileElement.dataset.boilingPoint = elementData.boilingPoint;
			tileElement.dataset.block = elementData.elementBlock;
			tileElement.dataset.period = elementData.period;
			tileElement.dataset.source = elementData.elementSource;
			this.tileContainer.appendChild(tileElement);
			//this.dragElement(tileElement);
			currentTileNumber++;
			// Creating Column Toggle buttonsContainer
			if (rowElementsSet.has(parseInt(elementData.an))){
				const rowButton = document.createElement('button');
				rowButton.classList.add('toggleButton');
				rowButton.style.width = 0.1 + 'vw';
				rowButton.style.height = tileOutline.style.height;
				rowButton.style.top = tileOutline.style.top;
				rowButton.style.left = parseFloat(tileOutline.style.left) - 0.5 + 'vw';
				rowButton.dataset.rowNumber = rowCorrespondence[elementData.an];
				rowButton.dataset.columnNumber = 0;
				this.togglesContainer.appendChild(rowButton);
			}
			if (columnElementsSet.has(parseInt(elementData.an))){
				const columnButton = document.createElement('button');
				columnButton.classList.add('toggleButton');
				columnButton.style.width = tileOutline.style.width;
				columnButton.style.height = 0.2 + 'vw';
				columnButton.style.top = parseFloat(tileOutline.style.top) - 0.5 + 'vw';
				columnButton.style.left = tileOutline.style.left;
				columnButton.dataset.rowNumber = 0;
				columnButton.dataset.columnNumber = columnCorrespondence[elementData.an];
				this.togglesContainer.appendChild(columnButton);
			}
		});
	}
	createToggleButtonListeners(){
		const buttonStates = {};
		let toggleState = false;
		Array.from(this.togglesContainer.children).forEach(button => {
			const keyName = button.dataset.rowNumber+button.dataset.columnNumber
			buttonStates[keyName] = false;
			button.addEventListener('click', () => {
				toggleState = false;
				buttonStates[keyName] = !buttonStates[keyName];
				Array.from(this.togglesContainer.children).forEach(otherButton => {
					if (otherButton !== button){
						const otherKeyName = otherButton.dataset.rowNumber+otherButton.dataset.columnNumber
						buttonStates[otherKeyName] = false;
					}
				});
				Array.from(this.togglesContainer.children).forEach(btn => {
					const btnKeyName = btn.dataset.rowNumber+btn.dataset.columnNumber
					btn.style.backgroundColor = buttonStates[btnKeyName] ? 'green' : 'white';
					if (buttonStates[btnKeyName] === true){
						toggleState = true;
						Array.from(this.tileContainer.children).forEach(myTile => {
							if (myTile.dataset.placed === 'false'){
								myTile.style.display = 'none';
								if (btn.dataset.rowNumber === '0'){
									if (myTile.dataset.realColumn === btn.dataset.columnNumber){
										myTile.style.display = 'block';
									}
								} else if (btn.dataset.columnNumber === '0'){
									if (myTile.dataset.realRow === btn.dataset.rowNumber){
										myTile.style.display = 'block';
									}
								}
							}
						});
					}
					if (toggleState === false){
						Array.from(this.tileContainer.children).forEach(myTile => {
							myTile.style.display = 'block';
						});
					}
				});
			});
		});
	}
	startTimer() {
		this.timerInterval = setInterval( () => this.updateTimer(), 10); // Update every 10 milliseconds
	}
	updateTimer() {
		this.milliseconds += 10;
		if (this.milliseconds >= 1000) {
			this.milliseconds = 0;
			this.seconds++;
		}
		if (this.seconds >= 60) {
			this.seconds = 0;
			this.minutes++;
		}
		const formattedTime = `${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}:${this.milliseconds.toString().padStart(3, '0')}`;
		this.timerElement.textContent = formattedTime;
	}
	stopTimer() {
		clearInterval(this.timerInterval);
	}
	resetTimer() {
		clearInterval(this.timerInterval);
		this.milliseconds = 0;
		this.seconds = 0;
		this.minutes = 0;
		this.timerElement.textContent = '00:00:000';
	}

	addDragImplementation() {
		this.tileContainer.addEventListener('mousedown', this.handleTileClick);
		this.tileContainer.addEventListener('touchstart', this.handleTileClick, {passive: false});
		this.tileContainer.addEventListener('mouseup', this.dragEnd);
		this.tileContainer.addEventListener('touchend', this.dragEnd);
	}

	handleTileClick(event) {
		event.preventDefault();
		const tile = event.target.closest('.tile');
		if (!tile) return;
    
		this.showDisplayInfo(tile);
		this.showingInfo = true;

		if (tile.dataset.correctlyPlaced === 'true') return;
		if (this.draggingTile === tile) {
			this.draggingTile = null;
			tile.style.cursor = 'grab';
			this.closeDragElement(tile, event);
			if (this.showingInfo) {
				this.stopDisplayInfo();
			}
			return;
		}
    
		this.draggingTile = tile;
		tile.style.cursor = 'grabbing';
		this.dragStart(tile, event);
	}

	dragStart(tile, event) {
	    this.dragStartTime = Date.now();

		event.preventDefault();
		if (tile.dataset.correctlyPlaced === 'false') {
			this.dragging = true;
			if (event.type === 'mousedown') {
				this.handleDragStart(tile, event.clientX, event.clientY);
			} else if (event.type === 'touchstart') {
				const touch = event.touches[0];
				this.handleDragStart(tile, touch.clientX, touch.clientY);
			}
		}
	}

	handleDragStart(elmnt, clientX, clientY) {
		tilePressSound();
		elmnt.pos3 = clientX;
		elmnt.pos4 = clientY;
		elmnt.initialOffsetX = clientX - elmnt.getBoundingClientRect().left;
		elmnt.initialOffsetY = clientY - elmnt.getBoundingClientRect().top;
		if (elmnt.dataset.currentPos !== '0') {
			const currentPos = elmnt.dataset.currentPos;
			this.snapPoints[currentPos].occupied = false;
			this.snapPoints[currentPos].occupiedBy = 0;
			elmnt.dataset.correctlyPlaced = false;
			elmnt.dataset.currentPos = 0;
		}

		elmnt.classList.remove('correctlyPlaced', 'incorrectlyPlaced');
		elmnt.parentElement.appendChild(elmnt);

		elmnt.boundElementDrag = this.elementDrag.bind(this, elmnt);

		document.addEventListener('touchmove', elmnt.boundElementDrag, { passive: false });
		document.addEventListener('mousemove', elmnt.boundElementDrag, { passive: false });
	}

	elementDrag(elmnt, e) {
		if (!this.draggingTile) return;
		elmnt.dragStarted = true;
		e.preventDefault();
		const vw = window.innerWidth;

		if (e.type === 'touchmove' && e.touches.length === 1) {
			const touch = e.touches[0];
			console.log("I am called");
			// Calculate new left and top positions based on touch coordinates and initial offset
			const newLeft = touch.clientX - elmnt.initialOffsetX;
			const newTop = touch.clientY - elmnt.initialOffsetY;

			// Update the element's style
			elmnt.style.left = (newLeft / vw) * 100 + "vw";
			elmnt.style.top = (newTop / vw) * 100 + "vw";
		} else if (e.type === 'mousemove') {
			// The mousemove part remains unchanged
			elmnt.pos1 = e.clientX - elmnt.pos3;
			elmnt.pos2 = e.clientY - elmnt.pos4;
			elmnt.pos3 = e.clientX;
			elmnt.pos4 = e.clientY;

			// Calculate new left and top positions based on mouse movement
			const newLeft = elmnt.offsetLeft + elmnt.pos1;
			const newTop = elmnt.offsetTop + elmnt.pos2;

			// Update the element's style
			elmnt.style.left = (newLeft / vw) * 100 + "vw";
			elmnt.style.top = (newTop / vw) * 100 + "vw";
		}
	}

	dragEnd(event) {
		if (this.draggingTile) {
		    const halfSecondPassed = (Date.now() - this.dragStartTime) > 500; // 500 milliseconds = 0.5 seconds

			if (this.draggingTile.dragStarted === true || halfSecondPassed) {
				if (this.draggingTile.dataset.correctlyPlaced === 'false' && this.dragging) {
					this.closeDragElement(this.draggingTile, event);
					this.stopDisplayInfo();
				}
			} 
		} else if (this.showingInfo) {
				this.stopDisplayInfo();
		}
	}


	closeDragElement(elmnt, e) {
		this.draggingTile = null;
		elmnt.dragStarted = false;
		this.dragging = false;
		e.preventDefault();
		const keysArray = Object.keys(this.snapPoints);
		removeAllChildren(elmnt);
		removeAllChildren(document.getElementById('infoContainer'));

		for (const key of keysArray) {
			const point = this.snapPoints[key];

			if (Math.abs(parseFloat(elmnt.style.left) - parseFloat(point.x)) < 1.5 &&
				Math.abs(parseFloat(elmnt.style.top) - parseFloat(point.y)) < 1.5 &&
				!point.occupied) {

				elmnt.style.left = point.x;
				elmnt.style.top = point.y;
				elmnt.dataset.placed = true;
				point.occupied = true;
				point.occupiedBy = elmnt.elementID;
				elmnt.dataset.currentPos = key;

				if (elmnt.dataset.currentPos === elmnt.dataset.elementID) {
					elmnt.dataset.correctlyPlaced = true;
					elmnt.style.cursor = 'default';
					if (checkState) {
						tileSuccessSound();
						elmnt.classList.add('correctlyPlaced');
						this.updateScore();
						elmnt.classList.remove('incorrectlyPlaced');
						this.mouseInput = true;
						this.solution.push(parseInt(elmnt.dataset.elementID));
					}
				} else {
					elmnt.dataset.correctlyPlaced = false;
					if (checkState) {
						elmnt.classList.remove('correctlyPlaced');
						elmnt.classList.add('incorrectlyPlaced');
						elmnt.style.cursor = 'grab';
						tileFailureSound();
					}
				}
				break;
			} else {
				elmnt.dataset.currentPos = 0;
				elmnt.dataset.correctlyPlaced = false;
				elmnt.dataset.placed = false;
				elmnt.style.cursor = 'grab';
				tilePressSound();
			}
		}
		document.removeEventListener('touchmove', elmnt.boundElementDrag);
		document.removeEventListener('mousemove', elmnt.boundElementDrag);
	}

	updateScore(){
		this.scoreElement.dataset.current = parseInt(this.scoreElement.dataset.current) + 1;
		this.scoreElement.textContent = this.scoreElement.dataset.current + '/' + this.scoreElement.dataset.total;
		if (this.scoreElement.dataset.current === this.scoreElement.dataset.total){
			this.stopTimer();
			this.gameWon();
		}
	}
	gameWon(){
		createConfetti();
		gameSuccessSound();
		console.log("Congratulations!!!");
		const timeInMilliSeconds = timeToMilliseconds(this.minutes, this.seconds, this.milliseconds);

		if (!isAchievementComplete('elementalist')){
			storeAchievementInStorage('elementalist');
		}
		if (!isAchievementComplete('symphony')){
			if(isAscendingOrder(this.solution)){
				storeAchievementInStorage('symphony');
			}
		}
		if (!isAchievementComplete('bane')){
			if(timeInMilliSeconds < 240000){
				storeAchievementInStorage('bane');
			}	
		}
		if (!isAchievementComplete('sprinter')){
			if(timeInMilliSeconds < 360000){
				storeAchievementInStorage('sprinter');
			}			
		}
		if (!isAchievementComplete('keyboard')){
			if(!this.mouseInput){
				storeAchievementInStorage('keyboard');
			}
		}
	}
	
	stopDisplayInfo (elmnt){
		removeAllChildren(document.getElementById('infoContainer'));
	}
	showDisplayInfo (elmnt){
		displayInfo(elmnt);
	}
	checkingInput(enteredText){
		enteredText = enteredText.trim().toLowerCase();
		if (elementNames.hasOwnProperty(enteredText)){
			const tileElement = document.getElementById(elementNames[enteredText]);
			const outlineElement = document.getElementById(elementNames[enteredText] + " outline");
			if (tileElement.classList.contains('correctlyPlaced')){
				this.displayAlreadyPlaced(tileElement.dataset.englishName);
				return false;
			}
			moveTileToCorrect(tileElement, outlineElement);
			this.solution.push(parseInt(tileElement.dataset.elementID));
			return true;
		} else {
			return false;
		}
	}
	displayAlreadyPlaced(thisElementName){
		if (parseInt(this.messageContainer.dataset.occupants) > 0){
			const children = this.messageContainer.children;
			for (let i = 0; i < children.length; i++) {
				const child = children[i];
				const currentBottom = parseFloat(child.style.bottom) || 0;
				const newBottomValue = 0.5 + 'vw';
				child.style.bottom = newBottomValue;
			}
		}
		const textElement = document.createElement('div');
		textElement.classList.add('messageText');
		textElement.style.bottom = 1 + 'vw';
		textElement.style.left = 1 + 'vw';
		textElement.textContent = `${thisElementName} is already placed`;
		this.messageContainer.dataset.occupants = parseInt(this.messageContainer.dataset.occupants) + 1;
		this.messageContainer.append(textElement);
		setTimeout(()=> {
			this.messageContainer.removeChild(textElement);
			this.messageContainer.dataset.occupants = parseInt(this.messageContainer.dataset.occupants) - 1;
		}, 3000);
	}
	shuffleTiles() {
		const tilesArray = Array.from(this.tileContainer.children);
		// Fisher-Yates Shuffle Algorithm
		for (let i = tilesArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[tilesArray[i], tilesArray[j]] = [tilesArray[j], tilesArray[i]];
		}
		let currentTileNumber = 1;
		for (const tile of tilesArray) {
			if (tile.dataset.placed === 'false') {
				setTilePosition(tile, currentTileNumber);
				this.tileContainer.appendChild(tile);
				currentTileNumber++;
			}
		}
	}
}



function setTilePosition(tileElement, currentTileNumber) {
	const outlineContainer = document.getElementById('gridContainer');
	let overlaps;

	do {
		overlaps = false;

		// Generate random position
		const randomLeft = Math.random() * 87 + 5;
		const randomBottom = Math.random() * 10 + 1;

		// Set the position
		tileElement.style.left = randomLeft + 'vw';
		tileElement.style.bottom = randomBottom + 'vw';
		tileElement.style.top = '';

		// Check for overlap with existing children
		for (const child of outlineContainer.children) {
			const childRect = child.getBoundingClientRect();
			const tileRect = tileElement.getBoundingClientRect();

			// Check for overlap
			if (
				tileRect.left < childRect.right &&
				tileRect.right > childRect.left &&
				tileRect.top < childRect.bottom &&
				tileRect.bottom > childRect.top
			) {
				overlaps = true;
				break;
			}
		}
	} while (overlaps);

}




function isAscendingOrder(list) {
  for (let i = 0; i < list.length - 1; i++) {
    if (parseInt(list[i]) > parseInt(list[i + 1])) {
      return false;
    }
  }
  return true;
}

function timeToMilliseconds(minutes, seconds, milliseconds){
	return (minutes * 60 * 1000 + seconds * 1000 + milliseconds);
}

function handleDefault(e) {
    if (e && e.preventDefault) {
        e.preventDefault();
    }
}
export default ClassicMode;