import SceneManager from './scenemanager.js';
import { metaData, loadIcons } from './fetchdata.js';
import { setupSound } from './sounds.js';
async function initializeApp() {
    await metaData();
    await loadIcons();
    new SceneManager();
    setupSound();
    SceneManager.goToScene('menu');
}

window.addEventListener('load', initializeApp);
