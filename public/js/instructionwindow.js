export async function showInstruction(isHelpButtonTriggered = true, heading, texthtml, levelid=0) {
	const response = await fetch('templates/instructiontemplate.html');
	const templateHtml = await response.text();
	const instructionContent = document.createElement('div');
	instructionContent.innerHTML = templateHtml;
	const canvas = document.getElementById('canvas');
	canvas.appendChild(instructionContent);

	const instructionWindow = document.getElementById('instructionWindow');
	const instructionHeader = document.getElementById('instructionHeader');
	const closeButton = document.getElementById('closeButton');
	const instructionText = document.getElementById('instructionText');
	const doNotShowCheckbox = document.getElementById('doNotShowCheckbox');
	const instructionOverlay = document.getElementById('instructionOverlay');
	instructionOverlay.style.display = 'block';
	if (isHelpButtonTriggered){
		const footer = document.getElementById('instructionFooter');
		footer.style.display = 'none';
	}

	closeButton.addEventListener('click', () => {
		canvas.removeChild(instructionContent);
		instructionOverlay.style.display = 'none';
	});

	instructionOverlay.addEventListener('click', () => {
		canvas.removeChild(instructionContent);
		instructionOverlay.style.display = 'none';
	});
	doNotShowCheckbox.addEventListener('change', () => {
		localStorage.setItem('showInstruction'+levelid, false);
	});
	instructionHeader.textContent = heading;
	instructionText.innerHTML = texthtml;	
}