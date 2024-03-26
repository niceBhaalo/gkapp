//const confetti = require('canvas-confetti');
export function removeAllChildren(element) {
    const children = Array.from(element.childNodes);
        if (children.length === 0) {
        // No children to remove
        return;
    }
    for (const child of children) {
        if (child.nodeType === Node.ELEMENT_NODE) {
            // Remove element nodes
            element.removeChild(child);
        }
    }
}
require('canvas-confetti');

export function isLoggedIn(){
    return false;

}

export function moveTileToCorrect(tileElement, outlineElement){
	const distanceX = parseFloat(outlineElement.style.left) - parseFloat(tileElement.style.left);
	const distanceY = parseFloat(outlineElement.style.top) - parseFloat(tileElement.style.top);
	tileElement.style.left = `${parseFloat(tileElement.style.left) + distanceX}vw`;
	tileElement.style.top = `${parseFloat(tileElement.style.top) + distanceY}vw`;
	tileElement.style.transform = 'scale(1)';
	tileElement.dataset.placed = 'true';
	tileElement.dataset.correctlyPlaced = 'true';
	tileElement.style.cursor = 'default';
	tileElement.classList.add('transition-class');
	setTimeout(() => {
		tileElement.classList.remove('transition-class');
		tileElement.classList.add('correctlyPlaced');
		tileElement.classList.remove('incorrectlyPlaced');
		tileElement.display = 'block';
	}, 500); 
}

export function apparateTileToSpot(tileElement, outlineElement) {
    // Get the position of the outlineElement
    const outlineRect = outlineElement.getBoundingClientRect();
    
    // Set the initial position of the tileElement to be hidden above the outline
	if (tileElement.style.visibility === 'hidden'){
	    tileElement.style.opacity = 0;
	}
    tileElement.style.left = `${outlineRect.left}px`;
    tileElement.style.top = `${outlineRect.top - tileElement.offsetHeight}px`;

    // Trigger the reflow by accessing the style property
    tileElement.style.display = 'block';

    // Use requestAnimationFrame to ensure a smooth transition
    requestAnimationFrame(() => {
        // Set the transition properties
        tileElement.style.transition = 'opacity 0.5s ease-in-out, top 0.5s ease-in-out';

        // Make the tileElement visible and move it to the correct position
        setTimeout(() => {
            tileElement.style.opacity = 1;
            tileElement.style.top = `${outlineRect.top}px`;
        }, 0);
    });

    // After the transition, remove the transition properties
    setTimeout(() => {
        tileElement.style.transition = 'none';
    }, 500);
}


export function displayInfo (elmnt){
	const infoContainer = document.getElementById('infoContainer');
	const englishName = createInfoElement();
	englishName.textContent = elmnt.dataset.englishName;
	if (elmnt.dataset.hasLatin === '1'){
		const scientificName = createInfoElement();
		scientificName.textContent = elmnt.dataset.latinName;
	}
	const atomicNumber = createInfoElement();
	atomicNumber.textContent = 'Atomic Number: ' + elmnt.dataset.elementID;
	const atomicMass = createInfoElement();
	atomicMass.textContent = 'Atomic Mass: ' + elmnt.dataset.am;
	const category = createInfoElement();
	category.textContent = elmnt.dataset.category;
	const state = createInfoElement();
	state.textContent = elmnt.dataset.state;
	const year = createInfoElement();
	year.textContent = elmnt.dataset.discoveryYear;
	const stableIsotopes = createInfoElement();
	if (elmnt.dataset.stableIsotopes === '0'){
		stableIsotopes.textContent = 'No Stable Isotopes';
	}
	else {
		const atomicMasses = elmnt.dataset.stableIsotopes.split(' ');
		const superscriptedAtomicMasses = atomicMasses.map(atomicMass => convertToSuperscript(atomicMass));
		const isotopesText = 'Stable Isotopes: ' + superscriptedAtomicMasses.join(elmnt.dataset.symbol + ' ') + elmnt.dataset.symbol;
		stableIsotopes.textContent = isotopesText;
	}
	const electronConfiguration = createInfoElement();
	electronConfiguration.textContent = convertDigitsToSuperscriptForElectronConfiguration(elmnt.dataset.electronConfiguration);
	const meltingPoint = createInfoElement();
	if (elmnt.dataset.meltingPoint === '-'){
		meltingPoint.textContent = 'Melting Point Not Available';
	}
	else if (elmnt.dataset.meltingPoint === 'Sublimes'){
		meltingPoint.textContent = 'Sublimes at atmospheric pressure';
	}
	else {
		meltingPoint.textContent = 'Melting Point: ' + elmnt.dataset.meltingPoint + "°C";
	}
	const boilingPoint = createInfoElement();
	if (elmnt.dataset.boilingPoint === '-'){
		boilingPoint.textContent = 'Boiling Point Not Available';
	}
	else {
		boilingPoint.textContent = 'Boiling Point: ' + elmnt.dataset.boilingPoint + "°C";
	}
	const period = createInfoElement();
	period.textContent = 'Period: ' + elmnt.dataset.period;
	const block = createInfoElement();
	block.textContent = elmnt.dataset.block + '-block';
	const sources = createInfoElement();
	sources.textContent = elmnt.dataset.source.trim().replace(/ \+/g, ',');
	function createInfoElement (){
		const infoElement = document.createElement('div');
		infoElement.classList.add('infoText');
		infoContainer.append(infoElement);
		return infoElement;
	}
}


function convertToSuperscript(text) {
    const superscriptMap = {
        '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
        '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
    };
    return text.replace(/\d/g, match => superscriptMap[match]);
}
function convertDigitsToSuperscriptForElectronConfiguration(inputString) {
    const superscriptMap = {
        '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
        '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
    };
    let outputString = '';
    let isPreviousCharSpace = true; // Initialize as true to handle digits at the beginning
    for (const char of inputString) {
        if (/\d/.test(char)) {
            outputString += isPreviousCharSpace ? char : superscriptMap[char];
        } else {
            outputString += char;
        }
        isPreviousCharSpace = char === ' ';
    }
    return outputString.trim();
}

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

export function createConfetti() {
	confetti({
		particlesCount: 100,
		startVelocity: 55,
		origin: {
			x: 0.5,
			y: 1
		}
	});
		confetti({
		particlesCount: 50,
		startVelocity: 35,
		origin: {
			x: 0.75,
			y: 1
		}
	});
		confetti({
		particlesCount: 50,
		startVelocity: 35,
		origin: {
			x: 0.25,
			y: 1
		}
	});
} 

function getRandomColor() {
  // Generate random values for RGB
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Convert RGB to hex
  const hexColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

  return hexColor;
}

function setTilePosition(tileElement, currentTileNumber) {
	const minimumTiles = 20;
	const maximumTiles = 40;
	let row = 0;
	let column = ((currentTileNumber-1) % minimumTiles)* (85 / (minimumTiles - 1))+ 5;
	let padding = 0;
	if (currentTileNumber >= 1 && currentTileNumber <= minimumTiles) {
		row = 1;
	} else if (currentTileNumber >= minimumTiles + 1 && currentTileNumber <= minimumTiles * 2) {
		row = 2;
	} else if (currentTileNumber >= minimumTiles * 2 + 1 && currentTileNumber <= minimumTiles * 3) {
		row = 3;
	} else if (currentTileNumber >= minimumTiles * 3 + 1 && currentTileNumber <= minimumTiles * 4) {
		row = 4;
		padding = 2;
	} else if (currentTileNumber >= minimumTiles * 4 + 1 && currentTileNumber <= minimumTiles * 5) {
		row = 5;
		padding = 2;
	} else if (currentTileNumber >= minimumTiles * 5 + 1 && currentTileNumber <= minimumTiles * 6){
		row = 6;
		padding = 2;
	} else {
		row = Math.random() * (87.5 - 75) + 75;
	}
	tileElement.style.left = column + padding + 'vw';
	tileElement.style.bottom = row + 5 + 'vw';
}
