export const game_width = 640;
export const game_height = 480;

export const player_width = 20;
export const player_speed = 250;
export const missile_max_speed = 300;

export const key_code_arrow_left = 37;
export const key_code_arrow_right = 39;
export const key_code_space = 32;

export const game_state = {
    leftPressed: false,
    rightPressed: false,
    spacePressed: false,
    missileShot: false,
    lastTime: Date.now(),
    playerX: 0,
    playerY: 0,
    missiles: [],
    enemies: []
}

export const $container = document.getElementById('game');
export const $playerDOM = document.createElement('img');