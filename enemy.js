import { game_state } from "./global.js";
import { setPos } from "./tools.js";

export function createEnemy($container, x, y){
    const $enemy = document.createElement('img');
    $enemy.src = 'img/spaceShips_009.png';
    $enemy.className = 'enemy';
    $container.appendChild($enemy);
    const enemy = {
        x,y,$enemy
    }
    game_state.enemies.push(enemy);
    setPos($enemy,x,y);
}

export function updateEnemy(){
    
}