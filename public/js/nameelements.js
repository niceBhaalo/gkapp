import SceneManager from './scenemanager.js';
import { removeAllChildren, apparateTileToSpot, displayInfo, shuffleArray, createConfetti } from './utils.js';
const canvas = document.getElementById('canvas');
import { getAchievementsForLevel, getTileData } from './fetchdatafromstorage.js';
import { showInstruction } from './instructionwindow.js';
import { showAchievements } from './achievementwindow.js';
import { storeAchievementInStorage, isAchievementComplete } from './achievementprogress.js';
import { buttonPressSound, tileSuccessSound, tileFailureSound, gameCompleteSound } from './sounds.js';

let tilesData;
let elementNames;

const levelid = 11;
const instructionHeading = 'Name the Highlighted Tile';
const instructionText = `
		<p><em>Type the name of the element for the tile being highlighted.</em></p>
		<p>Click on the hint button to reveal the symbol of the tile</p>`;

const achievements = getAchievementsForLevel(levelid);



class NameElements {
	constructor(){
		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.textBoxOpen = false;
	}
	async init(){
		this.mistakes = false;
		this.hintUsed = false;
		({ tilesData, elementNames } = getTileData());
		if (!localStorage.getItem('classicInstructionDontShow')){
			showInstruction(false, instructionHeading, instructionText);
		}
		this.randomOrder = false;
		const responseTemplate = await fetch('templates/classictemplate.html');
		const templateHtml = await responseTemplate.text();
		const templateContainer = document.createElement('div');
		templateContainer.innerHTML = templateHtml;
		canvas.appendChild(templateContainer);

		this.buttonContainer = document.getElementById('buttonContainer');
		this.restartButton = document.getElementById('restartButton');
		this.exitButton = document.getElementById('exitButton');
		this.timerElement = document.getElementById('timer');
		this.scoreElement = document.getElementById('score');
		this.sideButtons = document.getElementById('sideButtons');
		this.shuffleButton = document.getElementById('shuffleButton');
		this.shuffleButton.style.display = 'none';
		
		this.gridContainer = document.getElementById('gridContainer');
		this.messageContainer = document.getElementById('messageContainer');
		this.instructionContainer = document.getElementById('instructionContainer');
		this.achievementButton = document.getElementById('achievementButton');

		this.randomizeButton = document.createElement('button');
		this.randomizeButton.classList.add('gameModeButton');
		this.randomizeButton.textContent = 'Randomize';
		this.sideButtons.insertBefore(this.randomizeButton, sideButtons.firstChild);

		const helpButton = document.getElementById('helpButton');
		this.tileContainer = document.getElementById('tileContainer');

		helpButton.addEventListener('click', function() {
			showInstruction(true, instructionHeading, instructionText);
		});	
		achievementButton.addEventListener('click', function(event) {
			showAchievements(levelid, event.clientX, event.clientY);
		});
		this.randomizeButton.addEventListener('click', () => {
				buttonPressSound();
			if(this.randomOrder){
				this.orderTiles();
				this.randomOrder = false;
			}
			else if(!this.randomOrder){
				this.randomizeTiles();
				this.randomOrder = true;
			}
		});

		this.handleKeyDown = this.handleKeyDown.bind(this); // Bind the method to the class instance
		this.textBoxOpen = false;
			
		this.scoreElement.dataset.total = 118;
		this.scoreElement.dataset.current = 0;
		this.scoreElement.textContent = this.scoreElement.dataset.current + '/' + this.scoreElement.dataset.total;
		
		this.currentList = generateIntegerList();
		this.createTilesOutlines();
		this.createQuestion();

		this.timerInterval;
		this.milliseconds = 0;
		this.seconds = 0;
		this.minutes = 0;
		this.startTimer();
		
		this.restartButton.addEventListener('click', () => {
				buttonPressSound();
			window.removeEventListener('keydown', this.handleKeyDown);	
			SceneManager.goToScene('nameelements');
		});
		this.exitButton.addEventListener('click', () => {
				buttonPressSound();
			window.removeEventListener('keydown', this.handleKeyDown);
			SceneManager.goToScene('menu');
		});
		window.addEventListener('keydown', this.handleKeyDown);		
	}
	randomizeTiles(){
		shuffleArray(this.currentList);
		this.currentTile.style.visibility = 'hidden';
		this.currentGlow.classList.remove('glow');
		this.displayTile(this.currentList[0]);

	}
	orderTiles(){
		this.currentList = generateIntegerList();
		this.currentTile.style.visibility = 'hidden';
		this.currentGlow.classList.remove('glow');
		this.displayTile(this.currentList[0]);
	}
	exit(){
		removeAllChildren(canvas);
		document.removeEventListener('keydown', this.keydownEventListener);

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
	createQuestion(){
		const questionContainer = document.createElement('div');
		questionContainer.classList.add('questionContainer');
		questionContainer.textContent = 'Type in the name of the highlighted tile: ';
		questionContainer.style.fontSize = this.refSize / 2 + 'vw';

		this.hintContainer = document.createElement('div');
		this.hintContainer.classList.add('hintContainer');
		this.hintContainer.textContent = 'Click here or press ; to reveal the symbol of the highlighted tile';
		this.hintContainer.style.fontSize = this.refSize / 2 + 'vw';
		canvas.append(this.hintContainer);
		canvas.append(questionContainer);
		this.displayTile(this.currentList[0]);

		this.hintContainer.addEventListener('click', () => {
			    this.revealTile();
		});
		this.keydownEventListener = (event) => {
			if (event.key === ';') {
				this.revealTile();
			}
		};
		document.addEventListener('keydown', this.keydownEventListener);
	}
	revealTile(){
		const targetOutline = document.getElementById(this.currentTile.id + ' outline');
		const outlineRect = targetOutline.getBoundingClientRect();
		this.currentTile.style.top = `${outlineRect.top - this.currentTile.offsetHeight}px`;
		this.currentTile.style.left = targetOutline.style.left;
		this.currentTile.style.visibility = '';
		this.hintUsed = true;
	}
	displayTile(tileId){
		this.currentTile = document.getElementById(tileId);
		this.currentGlow = document.getElementById(tileId + ' glow');
		this.currentGlow.classList.add("glow");
		console.log(this.currentTile.id);
	}

	moveCurrentTile(){
		const targetOutline = document.getElementById(this.currentTile.id + ' outline');
		this.currentTile.classList.add('correctlyPlaced');
		this.currentGlow.classList.remove('glow');
		this.currentTile.style.visibility = '';
		apparateTileToSpot(this.currentTile, targetOutline);
		console.log('Moving');
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
		textInput.addEventListener('keypress', (event) => {
			const isAlphanumeric = /^[a-zA-Z0-9]$/i.test(event.key);
			const isEnterKey = event.key === 'Enter' || event.key === 'Escape';
			if (!isAlphanumeric && !isEnterKey) {
				event.preventDefault();
			}
		});
		textInput.addEventListener('input', () => {
			const scrollWidth = textInput.scrollWidth;
			const scrollHeight = textInput.scrollHeight;
			    const alphanumericValue = textInput.value.replace(/[^a-zA-Z0-9]/g, '');

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
			if (alphanumericValue === '')
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
				canvas.removeEventListener('click', this.handleClick);
				if (this.checkingInput(enteredText))
				{
					tileSuccessSound();
					this.moveCurrentTile();
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
	checkingInput(enteredText){
		enteredText = enteredText.trim().toLowerCase();
		if ((this.currentTile.dataset.englishName.toLowerCase() === enteredText)){
			return true;	
		}
		if (this.currentTile.dataset.hasLatin){
			if ((this.currentTile.dataset.latinName.toLowerCase() === enteredText)){
				return true;
			}
		}
		this.mistakes = true;
		return false;
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
		const leftPadding = window.innerWidth / 8;
		const topPadding = window.innerWidth * 0.01;
		const tileWidth = window.innerWidth / 24;
		this.refSize = (tileWidth - 8) / window.innerWidth  * 100;
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
		const vw_value = window.innerHeight * 90 / window.innerWidth;
		const topGap = vw_value - ((10 + topPadding - tileWidth + 9 * tileWidth) / window.innerWidth * 100);
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

			const glowOutline = document.createElement('div');
			glowOutline.id = elementData.an + " glow";
			tileOutline.appendChild(glowOutline)
			this.gridContainer.appendChild(tileOutline);
			const tileElement = document.createElement('div');
			tileElement.style.visibility = 'hidden';
			tileElement.classList.add('tile');
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
			this.addInfoListeners(tileElement);
			this.tileContainer.appendChild(tileElement);
		});
	}
	addInfoListeners(elmnt){
		elmnt.addEventListener('mousedown', () => {
			displayInfo(elmnt);
		});
		elmnt.addEventListener('mouseup', () => {
			this.stopDisplayInfo();
		});
		elmnt.addEventListener('mouseleave', () => {
			this.stopDisplayInfo();
		});
	}
	stopDisplayInfo(){
		removeAllChildren(document.getElementById('infoContainer'));
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
	updateScore(){
		this.scoreElement.dataset.current = parseInt(this.scoreElement.dataset.current) + 1;
		this.scoreElement.textContent = this.scoreElement.dataset.current + '/' + this.scoreElement.dataset.total;
		if (this.scoreElement.dataset.current === this.scoreElement.dataset.total){
			this.stopTimer();
			this.gameWon();
		}
		else {
			this.displayTile(this.currentList[1]);
			this.currentList.shift();
			console.log(this.currentList);
		}
	}
	gameWon(){
		gameCompleteSound();
		createConfetti();

		console.log("Congratulations!!!");
		const timeInMilliSeconds = timeToMilliseconds(this.minutes, this.seconds, this.milliseconds);
		if (!isAchievementComplete('namecomplete')){
			storeAchievementInStorage('namecomplete');
		}
		if (!isAchievementComplete('namemistake')){
			if (!this.mistakes){
				storeAchievementInStorage('namemistake');
			}
		}
		if (!isAchievementComplete('nameauth')){
			if(timeInMilliSeconds < 360000) {
				storeAchievementInStorage('nameauth');
			}	
		}
		if (!isAchievementComplete('namehint')){
			if(!this.hintUsed){
				storeAchievementInStorage('namehint');
			}			
		}
	}
}

function timeToMilliseconds(minutes, seconds, milliseconds){
	return (minutes * 60 * 1000 + seconds * 1000 + milliseconds);
}

function generateIntegerList() {
  var integerList = [];
  for (let i = 1; i <= 118; i++) {
    var correspondingDiv = document.getElementById(i);
    if (!correspondingDiv || !correspondingDiv.classList.contains('correctlyPlaced')) {
      integerList.push(i);
    }
  }
  return integerList;
}
export default NameElements;