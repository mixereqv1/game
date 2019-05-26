export const game = {
    game_width: 640,
    game_height: 480,
    player_width: 20,
    player_speed: 250,
    missile_max_speed: 300,
}

export const keys = {
    arrow_left: 37,
    arrow_right: 39,
    space: 32,
}

export const enemy = {
    horizontal_padding: 80,
    vertical_padding: 50,
    vertical_spacing: 70,
    per_row: 10,
    rows: 3,
}

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