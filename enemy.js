import { game_state, game, enemy } from "./global.js";
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
    const dx = Math.sin(game_state.lastTime / 1000) * 50;
    const dy = Math.sin(game_state.lastTime / 1000) * 50;
    game_state.enemies.map(enemy => {
        let x = enemy.x + dx;
        let y = enemy.y + dy;
        setPos(enemy.$enemy, x, y);
    })
    game_state.enemies = game_state.enemies.filter(enemy => !enemy.isDead);
}

export function destroyEnemy($container,enemy){
    $container.removeChild(enemy.$enemy);
    enemy.isDead = true;
}

export function createEnemyArmy(){
    // const enemySpacing = (game.game_width - enemy.horizontal_padding * 2) / ();
}