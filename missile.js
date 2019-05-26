import { game_state, game, $container } from "./global.js";
import { setPos, rectIntersect } from "./tools.js";
import { destroyEnemy } from "./enemy.js";

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
        missile.y -= game.missile_max_speed * dt;
        setPos(missile.$missile, missile.x, missile.y);
        // if powoduje problem - nie mozna nie trafic w przeciwnika bo inaczej wywala blad
        // if(missile.y < 0){
        //     destroyMissile($container, missile);
        // }
        const r1 = missile.$missile.getBoundingClientRect();

        game_state.enemies.map(enemy => {
            const r2 = enemy.$enemy.getBoundingClientRect();
            if(rectIntersect(r1,r2)){
                destroyEnemy($container,enemy);
                destroyMissile($container,missile);
            }
        })
    })
    game_state.missiles = game_state.missiles.filter(missile => !missile.isDead);
}

function destroyMissile($container, missile) {
    $container.removeChild(missile.$missile);
    missile.isDead = true;
}