import { game_state, missile_max_speed } from "./global.js";
import { setPos } from "./tools.js";

export function createMissile($container,x,y){
    const $missile = document.createElement('img');
    $missile.src = 'img/spaceMissiles_040.png';
    $missile.className = 'missile';
    $container.appendChild($missile);
    const missile = {
        x,y,$missile
    }
    game_state.missiles.push(missile);
    setPos($missile,x,y);
}

export function updateMissile(dt){
    const missiles = game_state.missiles;
    missiles.map(missile => {
        missile.y -= missile_max_speed * dt;
        setPos(missile.$missile, missile.x, missile.y);
    })
}