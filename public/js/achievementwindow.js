import { getAchievementsForLevel } from './fetchdatafromstorage.js';
import { removeAllChildren } from './utils.js';
import { isAchievementComplete } from './achievementprogress.js';

export async function showAchievements (levelid, mouseX, mouseY){
	const response = await fetch('templates/achievementwindowtemplate.html');
	const templateHtml = await response.text();
	const achievementContent = document.createElement('div');
	achievementContent.innerHTML = templateHtml;
	const canvas = document.getElementById('canvas');
	canvas.appendChild(achievementContent);
	const achievements = getAchievementsForLevel(levelid);
	const iconsContainer = document.getElementById('achievementIconsContainer');
	const overlay = document.getElementById('achievementOverlay');
	const sidebar = document.getElementById('achievementSidebar');
	sidebar.style.top = mouseY + 'px';
    sidebar.style.right = `${window.innerWidth - mouseX}px`; // Adjust for the cursor's position

	achievements.forEach((achievement) => {
        const svgContainer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgContainer.setAttribute('width', '64');
        svgContainer.setAttribute('height', '64');
		const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `#${achievement.internal_name}`);
        svgContainer.appendChild(useElement);
		
		svgContainer.classList.add('achievement-icon');
		const descriptionContainer = document.createElement('div');
		descriptionContainer.classList.add('achievement-details');
        iconsContainer.appendChild(svgContainer);
		sidebar.appendChild(descriptionContainer);
		if (!isAchievementComplete(achievement.internal_name)){
			svgContainer.classList.add('dimmed');
		}

		svgContainer.addEventListener('mouseenter', () => {
			showDetails(achievement, descriptionContainer, svgContainer);
		});
		svgContainer.addEventListener('mouseleave', () => {
			hideDetails(descriptionContainer);
		});
    });
	overlay.addEventListener('click', () => {
		canvas.removeChild(achievementContent);
		overlay.style.display = 'none';
	});
}

function showDetails(achievement, descriptionContainer, iconElement){
	descriptionContainer.style.visibility = 'visible';
	const iconRect = iconElement.getBoundingClientRect();
	descriptionContainer.style.top = `${iconRect.top}px`;
	descriptionContainer.style.right = `${window.innerWidth - iconRect.left}px`;
	const achievementName = document.createElement('div');
	achievementName.classList.add('achievement-name');
	achievementName.textContent = achievement.achievement_name;
	const achievementDescription = document.createElement('div');
	achievementDescription.classList.add('achievement-description');
	achievementDescription.textContent = achievement.short_description;
	descriptionContainer.appendChild(achievementName);
	descriptionContainer.appendChild(achievementDescription);
}

function hideDetails(descriptionContainer){
	descriptionContainer.style.visibility = 'hidden';
	removeAllChildren(descriptionContainer);
}