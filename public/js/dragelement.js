import SceneManager from './scenemanager.js';
import { removeAllChildren, displayInfo, shuffleArray, createConfetti } from './utils.js';
const canvas = document.getElementById('canvas');
import { getAchievementsForLevel, getTileData } from './fetchdatafromstorage.js';
import { showInstruction } from './instructionwindow.js';
import { showAchievements } from './achievementwindow.js';
import { storeAchievementInStorage, isAchievementComplete } from './achievementprogress.js';
import { buttonPressSound, tileSuccessSound, tileFailureSound, gameCompleteSound, tilePressSound } from './sounds.js';

let tilesData;
let elementNames;
let checkState = true;

const levelid = 12;
const instructionHeading = 'Fill the Periodic Table';
const instructionText = `
		<p><em>Drag the given tiles to their proper spot to fill the periodic table</em></p>
		<p>If stuck, discard the given tiles to refresh the available stock. You can also look at the accompanying information for each element to figure out where it belongs</p>`;

const achievements = getAchievementsForLevel(levelid);
class PlaceElements{
	async init(){
		this.mistakes = false;
		this.discard = false;
		({ tilesData, elementNames } = getTileData());
	    if (!localStorage.getItem('showInstruction'+ levelid)){
			showInstruction(false, instructionHeading, instructionText, levelid);
		}
	    const responseTemplate = await fetch('templates/classictemplate.html');
		const templateHtml = await responseTemplate.text();
		const templateContainer = document.createElement('div');
		templateContainer.innerHTML = templateHtml;
		canvas.appendChild(templateContainer);

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
		this.tileBox = document.getElementById('tileBox');
		const helpButton = document.getElementById('helpButton');
		this.tileContainer = document.getElementById('tileContainer');

		helpButton.addEventListener('click', function() {
			showInstruction(true, instructionHeading, instructionText);
		});	
		achievementButton.addEventListener('click', function(event) {
			showAchievements(levelid, event.clientX, event.clientY);
		});
			
		this.scoreElement.dataset.total = 118;
		this.scoreElement.dataset.current = 0;
		this.scoreElement.textContent = this.scoreElement.dataset.current + '/' + this.scoreElement.dataset.total;

		this.snapPoints = {};
		
		this.createTilesOutlines();
		this.timerInterval;
		this.milliseconds = 0;
		this.seconds = 0;
		this.minutes = 0;
		this.createQuestion();
		this.startTimer();
		
		this.restartButton.addEventListener('click', () => {
		buttonPressSound();
			window.removeEventListener('keydown', this.handleKeyDown);	
			SceneManager.goToScene('placeelements');
		});
		this.exitButton.addEventListener('click', () => {
		buttonPressSound();
			window.removeEventListener('keydown', this.handleKeyDown);
			SceneManager.goToScene('menu');
		});
		this.shuffleButton.textContent = "Discard";
		this.shuffleButton.addEventListener('click', () => {
				buttonPressSound();
			this.discard = true;
			this.discardTiles();
		});
		window.addEventListener('keydown', this.handleKeyDown);		
	}
	exit(){
		removeAllChildren(canvas);
		clearInterval(this.timerInterval);
	}
	discardTiles(){
		this.tilesArray = Array.from(this.tileContainer.children);
		this.tileBoxChildren.forEach((slot) => {
			slot.dataset.filled = 'false';
		});
		this.tilesArray = Array.from(this.tileContainer.children).filter(tile => {
			return !tile.classList.contains('correctlyPlaced');
		});
		this.tilesArray.forEach(tile => {
			tile.classList.add('tileFadeOut');
		});
		console.log("Running");
		setTimeout(() => {
			this.tilesArray.forEach(tile => {
				tile.classList.remove('tileFadeOut');
				tile.style.visibility = 'hidden';
			});
			shuffleArray(this.tilesArray);
			this.displayTiles();
		}, 100); // 1000 milliseconds (1 second) delay

	}
	createQuestion(){
		const questionContainer = document.createElement('div');
		questionContainer.classList.add('questionContainer');
		questionContainer.textContent = 'Drag the tiles to their correct place: ';
		questionContainer.style.fontSize = this.refSize / 2 + 'vw'; 

		this.tileBox.style.visibility = 'visible';
		this.tileBoxChildren = Array.from(this.tileBox.children);

		this.tileBoxChildren.forEach((slot) => {
			slot.style.height = this.refSize + 'vw';
			slot.style.width = this.refSize + 'vw';
		});
		canvas.append(questionContainer);
		this.tilesArray = Array.from(this.tileContainer.children);
		this.displayTiles();
	}
	displayTiles(){
		this.tileBoxChildren.forEach((slot) => {
			if (slot.dataset.filled !== 'true'){
				console.log("Running Here");
				const tile = this.tilesArray.shift();
				if (tile){
					moveTileToSlot(tile, slot);
					slot.dataset.filled = 'true';
				}
			}
		});
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
		this.refSize = (tileWidth - 8) / window.innerWidth  * 100;

		for (let i=0; i < rowElementsList.length; i++){
			rowCorrespondence[rowElementsList[i]] = i + 1;
		}
		for (let i=0; i < columnElementsList.length; i++){
			columnCorrespondence[columnElementsList[i]] = i + 1;
		}
		const vw_value = window.innerHeight * 90 / window.innerWidth;
		const topGap = vw_value - ((10 + topPadding - tileWidth + 9 * tileWidth) / window.innerWidth * 100);
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
			tileOutline.style.top = (vDisplace + topPadding - tileWidth  + elementData.elementRow * (tileWidth)) / window.innerWidth  * 100 + topGap + 'vw';
			tileOutline.id = elementData.an + " outline";
			this.gridContainer.appendChild(tileOutline);
			const snapPoint = {x: tileOutline.style.left, y: tileOutline.style.top, occupied: false, occupiedBy: 0};
			this.snapPoints[elementData.an] = snapPoint;
			const tileElement = document.createElement('div');
			tileElement.classList.add('tile');
			tileElement.style.visibility = 'hidden';
			tileElement.style.position = 'absolute';
			tileElement.style.width = (tileWidth - 8) / window.innerWidth  * 100 + 'vw';
			tileElement.style.height = tileElement.style.width;
			tileElement.style.backgroundColor = elementData.color;
			tileElement.textContent = elementData.symbol;
			tileElement.dataset.symbol = elementData.symbol;
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
			tileElement.dataset.slot = '0';
			this.tileContainer.appendChild(tileElement);
			this.dragElement(tileElement);
			currentTileNumber++;
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
	dragElement(elmnt) {
		this.pos1 = 0, this.pos2 = 0, this.pos3 = 0, this.pos4 = 0;
		elmnt.style.cursor = 'grab'
		elmnt.onmousedown = this.dragMouseDown.bind(this,elmnt);	
	}
	dragMouseDown(elmnt, e) {
		if (elmnt.dataset.correctlyPlaced === 'false'){
			tilePressSound();
			displayInfo(elmnt);
			elmnt.style.cursor = 'grabbing'
			e = e || window.event;
			e.preventDefault();
			this.pos3 = e.clientX;
			this.pos4 = e.clientY;
			if (elmnt.dataset.currentPos != 0){
				this.snapPoints[elmnt.dataset.currentPos].occupied = false;
				this.snapPoints[elmnt.dataset.currentPos].occupiedBy = 0;
				elmnt.dataset.correctlyPlaced = false;
				elmnt.dataset.currentPos = 0;
			}
			elmnt.classList.remove('correctlyPlaced');
			elmnt.classList.remove('incorrectlyPlaced');
			elmnt.parentElement.appendChild(elmnt);	
			document.onmouseup = this.closeDragElement.bind(this,elmnt);
			document.onmousemove = this.elementDrag.bind(this,elmnt);
		} else if (elmnt.dataset.correctlyPlaced === 'true'){
			document.onmousedown = this.showDisplayInfo.bind(this,elmnt);
			document.onmouseup = this.stopDisplayInfo;
		}
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
		gameCompleteSound();
		console.log("Congratulations!!!");
		const timeInMilliSeconds = timeToMilliseconds(this.minutes, this.seconds, this.milliseconds);

		if (!isAchievementComplete('dragcomplete')){
			storeAchievementInStorage('dragcomplete');
		}
		if (!isAchievementComplete('dragmistakes')){
			if (!this.mistakes){
				storeAchievementInStorage('dragmistakes');
			}
		}
		if (!isAchievementComplete('dragperfect')){
			if (!this.mistakes && !this.discard){
				storeAchievementInStorage('dragperfect');
			}
		}
		if (!isAchievementComplete('dragauth')){
			if(timeInMilliSeconds < 360000){
				storeAchievementInStorage('dragauth');
			}			
		}

	}
	closeDragElement(elmnt) {
		const keysArray = Object.keys(this.snapPoints);
		removeAllChildren(elmnt);
		removeAllChildren(document.getElementById('infoContainer'));
		const rect = elmnt.getBoundingClientRect();
		console.log("Closing Drag Element");
		const targetSlot = document.getElementById(elmnt.dataset.slot);

		for (const key of keysArray) {
			const point = this.snapPoints[key];
			if (Math.abs(parseFloat(elmnt.style.left) - parseFloat(point.x)) < 1.5 && Math.abs(parseFloat(elmnt.style.top) - parseFloat(point.y)) < 1.5 && point.occupied === false) {
				elmnt.style.left = point.x;
				elmnt.style.top = point.y;
				elmnt.dataset.placed = true;
				point.occupied = true;
				point.occupiedBy = elmnt.elementID;
				elmnt.dataset.currentPos = key;
				console.log('Running If');
				if (elmnt.dataset.currentPos === elmnt.dataset.elementID){
					elmnt.dataset.correctlyPlaced = true;
					elmnt.style.cursor = 'default';
					if (checkState === true){  
						elmnt.classList.add('correctlyPlaced');
						elmnt.dataset.slot = '0';
						targetSlot.dataset.filled = 'false';
						this.displayTiles();
						this.updateScore();
						tileSuccessSound();
						elmnt.classList.remove('incorrectlyPlaced');
						this.mouseInput = true;
					}
				} else {
					elmnt.dataset.correctlyPlaced = false;
					if (checkState === true){
						elmnt.classList.remove('correctlyPlaced');
						elmnt.classList.add('incorrectlyPlaced');
						this.mistakes = true;
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
			}
		}
		console.log(elmnt.dataset.placed);
		if (elmnt.dataset.placed === 'false'){
			moveTileToSlot(elmnt, targetSlot);
			console.log("Not Placed")
		}
		document.onmouseup = null;
		document.onmousemove = null;
	}
	stopDisplayInfo (){
		removeAllChildren(document.getElementById('infoContainer'));
		document.onmouseup = null;
		document.onmousedown = null;
	}
	showDisplayInfo (elmnt){
		displayInfo(elmnt);
	}
}

function timeToMilliseconds(minutes, seconds, milliseconds){
	return (minutes * 60 * 1000 + seconds * 1000 + milliseconds);
}

function moveTileToSlot(tile, slot) {
    const tileRect = tile.getBoundingClientRect();
    const slotRect = slot.getBoundingClientRect();

    const offsetX = slotRect.left - tileRect.left;
    const offsetY = slotRect.top - tileRect.top;

    // Apply transform for animation
    tile.style.transition = 'transform 0.3s ease'; // Adjust the duration and easing as needed
    tile.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
	tile.dataset.slot = slot.id;
    // After the animation, set the final position without transform
    setTimeout(() => {
        tile.style.transition = 'none'; // Remove transition for immediate position update
        tile.style.transform = 'translate(0, 0)';
        tile.style.left = slotRect.left + 'px';
        tile.style.top = slotRect.top + 'px';
        tile.style.visibility = 'visible';
        slot.dataset.filled = 'true';
    }, 300); // Adjust the time to match the transition duration
}

export default PlaceElements;