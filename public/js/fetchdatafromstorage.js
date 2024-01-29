export function getLevelData() {
    try {
        const levelDataString = localStorage.getItem('levelData');
        if (levelDataString === null) {
            console.log('Failed: Missing levelData or achievementData in localStorage');
            return null;
        }
        const levelData = JSON.parse(levelDataString);
        return levelData;
    } catch (error) {
        console.error('Error parsing data from local storage for level and achievements:', error);
        return null;
    }
}
export function getAchievementData() {
    try {
        const achievementDataString = localStorage.getItem('achievementData');
        if (achievementDataString === null) {
            console.log('Failed: Missing levelData or achievementData in localStorage');
            return null;
        }
        const achievementData = JSON.parse(achievementDataString);
        return achievementData;
    } catch (error) {
        console.error('Error parsing data from local storage for level and achievements:', error);
        return null;
    }
}

export function getTileData() {
	const tilesDataString = localStorage.getItem('tilesData');
	let elementNames = {};
	try {
		const tilesData = JSON.parse(tilesDataString);
		tilesData.forEach((tile_obj) => {
			elementNames[tile_obj.elementName.toLowerCase()] = tile_obj.an;
			elementNames[tile_obj.latinName.toLowerCase()] = tile_obj.an;
		});
		return { tilesData, elementNames };
	} catch (error) {
		console.error('Error parsing data from local storage:', error);
		return null;
	}
}

export function getAchievementsForLevel(targetLevelId){
    const achievements = getAchievementData();
    const filteredObjects = achievements.filter(obj => obj.level_id === targetLevelId);
    return filteredObjects;
}
function parseJsonSafely(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return null;
    }
}