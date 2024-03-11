import ClassicMode from './classicscene.js';
import MainMenu from './mainmenu.js';
import NameSymbols from './namesymbols.js';
import NameElements from './nameelements.js';
import PlaceElements from './dragelement.js';
import JugPuzzle from './jugpuzzle.js';

const menu = new MainMenu();
const classic = new ClassicMode();
const namesymbols = new NameSymbols();
const nameelements = new NameElements();
const placeelements = new PlaceElements();
const jugpuzzle = new JugPuzzle();

const modeInstances = {
    'classic': classic,
    'menu': menu,
    'namesymbols': namesymbols,
    'nameelements': nameelements,
    'placeelements': placeelements,
    'jugpuzzle': jugpuzzle,
};

const levelConfig = {};

Object.keys(modeInstances).forEach(mode => {
    levelConfig[mode] = {
        init: function () {
            modeInstances[mode].init();
        },
        exit: function () {
            modeInstances[mode].exit();
        }
    };
});

class LevelScene {
    constructor(levelNumber) {
        this.levelNumber = levelNumber;
        this.levelInit = levelConfig[levelNumber].init;
        this.levelExit = levelConfig[levelNumber].exit;
    }
    init() {
        this.levelInit();
    }
    exit() {
        this.levelExit();
    }
}

export default LevelScene;