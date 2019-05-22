import { game_state, game_width, game_height, $playerDOM, player_speed, player_width, $container } from "./global.js";
import { setPos, clamp } from "./tools.js";
import { createMissile } from "./missile.js";

export function createPlayer($container){
    game_state.playerX = game_width/2;
    game_state.playerY = game_height-50;

    $playerDOM.src = 'img/spaceShips_004.png';
    $playerDOM.className = 'player';
    $container.appendChild($playerDOM);
    setPos($playerDOM, game_state.playerX, game_state.playerY);
}

export function updatePlayer(dt){
    if(game_state.leftPressed){
        game_state.playerX -= player_speed * dt;
    }else if(game_state.rightPressed){
        game_state.playerX += player_speed * dt;
    }

    game_state.playerX = clamp(game_state.playerX, player_width, game_width - player_width);

    if(game_state.spacePressed){
        if(!game_state.missileShot){
            createMissile($container, game_state.playerX, game_state.playerY);
            game_state.missileShot = true;
        }
    } else{
        game_state.missileShot = false;
    }

    setPos($playerDOM, game_state.playerX, game_state.playerY);
}