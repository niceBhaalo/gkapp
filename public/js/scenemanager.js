import LevelScene from './levelscene.js';

class SceneManager {
  static instance;

  constructor() {
    if (!SceneManager.instance) {
      SceneManager.instance = this;
      this.currentScene = null;
    }

    return SceneManager.instance;
  }

  static goToScene(scene) {
    if (this.currentScene) {
      this.currentScene.exit();
    }
    this.currentScene = new LevelScene(scene);
    this.currentScene.init();
  }
}

export default SceneManager;
