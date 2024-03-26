import SceneManager from './scenemanager.js';
import { removeAllChildren, isLoggedIn } from './utils.js';
import { signUpButtons } from './signupbuttons.js';
import { getLevelData, getAchievementsForLevel } from './fetchdatafromstorage.js';

import { isAchievementComplete } from './achievementprogress.js';
import { buttonPressSound } from './sounds.js';

const canvas = document.getElementById('canvas');
const topContainer = document.getElementById('topContainer');

class MainMenu {
    init() {
        topContainer.style.display = 'block';
        const levelData = getLevelData();
        if (!isLoggedIn()){
            signUpButtons(topContainer);
        }

        const levelTileContainer = document.createElement('div');
        levelTileContainer.classList.add('level-tile-container');
        canvas.appendChild(levelTileContainer);
    this.levels = levelData;
        this.levels.forEach(level => {
            if (level.production_ready === 1){
                const tile = document.createElement('div');
                tile.classList.add('level-tile');

                const nameDiv = document.createElement('div');
                nameDiv.classList.add('level-name');
                nameDiv.textContent = level.display_name;

                const iconsDiv = document.createElement('div');
                iconsDiv.classList.add('level-icons');
                const achievements = getAchievementsForLevel(level.level_id);
                achievements.forEach((achievement) => {
                    const symbolId = achievement.internal_name;
                    const svgContainer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                    svgContainer.setAttribute('width', '64');
                    svgContainer.setAttribute('height', '64');
		            svgContainer.classList.add('achievement-icon');
                    const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
                    useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `#${symbolId}`);
                    svgContainer.appendChild(useElement);
                    useElement.classList.add('svg-child');
                    const existingTitle = document.getElementById(symbolId)?.querySelector('title');

                    if (existingTitle) {
                        existingTitle.textContent = achievement.short_description;
                    } else {
                        const titleElement = document.createElementNS('http://www.w3.org/2000/svg', 'title');
                        console.log("Title not found");
                        titleElement.textContent = achievement.short_description;
                        document.getElementById(symbolId)?.appendChild(titleElement);
                    }
                    if (!isAchievementComplete(achievement.internal_name)){
			            svgContainer.classList.add('dimmed');
		            }
                    iconsDiv.appendChild(svgContainer);
                });

                const startButton = document.createElement('button');
                startButton.classList.add('start-button');
                startButton.textContent = 'Start';

                startButton.addEventListener('click', () => {
                    buttonPressSound();
			        SceneManager.goToScene(level.internal_name);
		        });
                tile.appendChild(nameDiv);
                tile.appendChild(iconsDiv);
                tile.appendChild(startButton);

                levelTileContainer.appendChild(tile);
            }
        });
    }
    exit(){
        removeAllChildren(canvas);
        removeAllChildren(topContainer);
        topContainer.style.display = 'none';
    }
}

export default MainMenu;