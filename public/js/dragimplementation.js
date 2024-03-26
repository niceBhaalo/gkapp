dragElement(elmnt) {
    elmnt.boundCloseDragElement = this.closeDragElement.bind(this, elmnt);
    elmnt.boundElementDrag = this.elementDrag.bind(this, elmnt);
    elmnt.pos1 = 0;
    elmnt.pos2 = 0;
    elmnt.pos3 = 0;
    elmnt.pos4 = 0;
    elmnt.style.cursor = 'grab';
    elmnt.addEventListener('mousedown', this.dragMouseDown.bind(this, elmnt));
    elmnt.addEventListener('touchstart', this.dragTouchStart.bind(this, elmnt), { passive: true });
}

dragMouseDown(elmnt, e) {
	        e = e || window.event;

        this.handleDragStart(elmnt, e.clientX, e.clientY);
}

dragTouchStart(elmnt, e) {
	        e = e || window.event;

    if (e.touches.length === 1) {
        const touch = e.touches[0];
        this.handleDragStart(elmnt, touch.clientX, touch.clientY);
    } 
}

handleDragStart(elmnt, clientX, clientY) {
    elmnt.style.cursor = 'grabbing';
    elmnt.pos3 = clientX;
    elmnt.pos4 = clientY;

    document.addEventListener('touchend', elmnt.boundCloseDragElement);
    document.addEventListener('touchmove', elmnt.boundElementDrag, { passive: true });
    document.addEventListener('mouseup', elmnt.boundCloseDragElement);
    document.addEventListener('mousemove', elmnt.boundElementDrag, { passive: true });
}

elementDrag(elmnt, e) {
        	const vw = window.innerWidth;
    const vh = window.innerHeight;
    if (e.type === 'touchmove' && e.touches.length === 1) {
        const touch = e.touches[0];
        elmnt.pos1 = elmnt.pos3 - touch.clientX;
        elmnt.pos2 = elmnt.pos4 - touch.clientY;
        elmnt.pos3 = touch.clientX;
        elmnt.pos4 = touch.clientY;
    } else if (e.type === 'mousemove') {
        elmnt.pos1 = elmnt.pos3 - e.clientX;
        elmnt.pos2 = elmnt.pos4 - e.clientY;
        elmnt.pos3 = e.clientX;
        elmnt.pos4 = e.clientY;
    }
    elmnt.style.left = ((elmnt.offsetLeft - elmnt.pos1) / vw) * 100 + "vw";
    elmnt.style.top = ((elmnt.offsetTop - elmnt.pos2) / vw) * 100 + "vw";
}

closeDragElement(elmnt) {

    document.removeEventListener('mouseup', elmnt.boundCloseDragElement);
    document.removeEventListener('mousemove', elmnt.boundElementDrag);
	document.removeEventListener('touchend', elmnt.boundCloseDragElement);
    document.removeEventListener('touchmove', elmnt.boundElementDrag);
}

///////// COPY PASTE CLASSIC SCNE

dragElement(elmnt) {
    elmnt.boundCloseDragElement = this.closeDragElement.bind(this, elmnt);
    elmnt.boundElementDrag = this.elementDrag.bind(this, elmnt);
	elmnt.boundStopDisplayInfo = this.stopDisplayInfo.bind(this, elmnt);
    elmnt.pos1 = 0;
    elmnt.pos2 = 0;
    elmnt.pos3 = 0;
    elmnt.pos4 = 0;
    elmnt.style.cursor = 'grab';
    elmnt.addEventListener('mousedown', this.dragMouseDown.bind(this, elmnt), { passive: false });
    elmnt.addEventListener('touchstart', this.dragTouchStart.bind(this, elmnt), { passive: false });
}

dragMouseDown(elmnt, e) {
	        e.preventDefault();

	e = e || window.event;

    if (elmnt.dataset.correctlyPlaced === 'false') {
        this.handleDragStart(elmnt, e.clientX, e.clientY);
    } else if (elmnt.dataset.correctlyPlaced === 'true'){
        this.showDisplayInfo(elmnt);
        document.addEventListener('mouseup', elmnt.boundStopDisplayInfo);
    }
}

dragTouchStart(elmnt, e) {
	e = e || window.event;
	        e.preventDefault();

	if (elmnt.dataset.correctlyPlaced === 'false' && e.touches.length === 1) {
        const touch = e.touches[0];
        this.handleDragStart(elmnt, touch.clientX, touch.clientY);
    } else if (elmnt.dataset.correctlyPlaced === 'true'){
        this.showDisplayInfo(elmnt);
        document.addEventListener('touchend', elmnt.boundStopDisplayInfo);
    }
}
