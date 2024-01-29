import { getAchievementData } from './fetchdatafromstorage.js';


export async function showSettings() {
	const response = await fetch('templates/settingstemplate.html');
	const templateHtml = await response.text();
	const settingsContent = document.createElement('div');
	settingsContent.innerHTML = templateHtml;
	const canvas = document.getElementById('canvas');
	canvas.appendChild(settingsContent);

	const settingsWindow = document.getElementById('settingsWindow');
	const closeButton = document.getElementById('closeButton');
	const settingsOverlay = document.getElementById('settingsOverlay');
	const resetButton = document.getElementById('resetButton');

	settingsOverlay.style.display = 'block';

	closeButton.addEventListener('click', () => {
		canvas.removeChild(settingsContent);
		settingsOverlay.style.display = 'none';
	});

	settingsOverlay.addEventListener('click', () => {
		canvas.removeChild(settingsContent);
		settingsOverlay.style.display = 'none';
	});
	resetButton.addEventListener('click', () => {
		const achievementData = getAchievementData();
		achievementData.forEach(achievement => {
			resetAchievement(achievement.internal_name);
		}); 
		console.log(achievementData);
		});
}
function resetAchievement(internal_name){
	localStorage.setItem(internal_name, '0');
}