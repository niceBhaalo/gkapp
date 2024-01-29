//const confetti = require('canvas-confetti');
export function removeAllChildren(element) {
    const children = Array.from(element.childNodes);
    
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
	const englishName = createInfoElement(0.5);
	englishName.textContent = elmnt.dataset.englishName;
	if (elmnt.dataset.hasLatin === '1'){
		const scientificName = createInfoElement(2.5);
		scientificName.textContent = elmnt.dataset.latinName;
	}
	const atomicNumber = createInfoElement(4.5);
	atomicNumber.textContent = 'Atomic Number: ' + elmnt.dataset.elementID;
	const atomicMass = createInfoElement(6.5);
	atomicMass.textContent = 'Atomic Mass: ' + elmnt.dataset.am;
	const category = createInfoElement(8.5);
	category.textContent = elmnt.dataset.category;
	const state = createInfoElement(10.5);
	state.textContent = elmnt.dataset.state;
	const year = createInfoElement(12.5);
	year.textContent = elmnt.dataset.discoveryYear;
	const stableIsotopes = createInfoElement(14.5);
	if (elmnt.dataset.stableIsotopes === '0'){
		stableIsotopes.textContent = 'No Stable Isotopes';
	}
	else {
		const atomicMasses = elmnt.dataset.stableIsotopes.split(' ');
		const superscriptedAtomicMasses = atomicMasses.map(atomicMass => convertToSuperscript(atomicMass));
		const isotopesText = 'Stable Isotopes: ' + superscriptedAtomicMasses.join(elmnt.dataset.symbol + ' ') + elmnt.dataset.symbol;
		stableIsotopes.textContent = isotopesText;
	}
	const electronConfiguration = createInfoElement(16.5);
	electronConfiguration.textContent = convertDigitsToSuperscriptForElectronConfiguration(elmnt.dataset.electronConfiguration);
	const meltingPoint = createInfoElement(18.5);
	if (elmnt.dataset.meltingPoint === '-'){
		meltingPoint.textContent = 'Melting Point Not Available';
	}
	else if (elmnt.dataset.meltingPoint === 'Sublimes'){
		meltingPoint.textContent = 'Sublimes at atmospheric pressure';
	}
	else {
		meltingPoint.textContent = 'Melting Point: ' + elmnt.dataset.meltingPoint + "°C";
	}
	const boilingPoint = createInfoElement(20.5);
	if (elmnt.dataset.boilingPoint === '-'){
		boilingPoint.textContent = 'Boiling Point Not Available';
	}
	else {
		boilingPoint.textContent = 'Boiling Point: ' + elmnt.dataset.boilingPoint + "°C";
	}
	const period = createInfoElement(22.5);
	period.textContent = 'Period: ' + elmnt.dataset.period;
	const block = createInfoElement(24.5);
	block.textContent = elmnt.dataset.block + '-block';
	const sources = createInfoElement(26.5);
	sources.textContent = elmnt.dataset.source.trim().replace(/ \+/g, ',');
	function createInfoElement (topPosition){
		const infoElement = document.createElement('div');
		infoElement.classList.add('infoText');
		infoContainer.append(infoElement);
		infoElement.style.top = topPosition + 'vw';
		infoElement.style.right = 1 + 'vw';
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
