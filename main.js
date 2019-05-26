import { createPlayer, updatePlayer } from "./player.js";
import { $container, game_state } from "./global.js";
import { updateMissile } from "./missile.js";
import { createEnemy } from "./enemy.js";
import { onKeyDown, onKeyUp} from './controls.js';

function update(){
    const currentTime = Date.now();
    const dt = (currentTime - game_state.lastTime) / 1000;
    updatePlayer(dt);
    updateMissile(dt);
    game_state.lastTime = currentTime;
    window.requestAnimationFrame(update);
}

function init(){
    createPlayer($container);
    createEnemy($container,100,100);
    createEnemy($container,150,100);
    createEnemy($container,200,100);
    createEnemy($container,250,100);
    createEnemy($container,300,100);
}

init();

window.requestAnimationFrame(update);