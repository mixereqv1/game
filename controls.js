import { keys, game_state } from "./global.js"

export function onKeyDown(event){
    if(event.keyCode === keys.arrow_left){
        game_state.leftPressed = true;
    } 
    else if(event.keyCode === keys.arrow_right){
        game_state.rightPressed = true;
    } 
    else if(event.keyCode === keys.space){
        game_state.spacePressed = true;
    }
}

export function onKeyUp(event){
    if(event.keyCode === keys.arrow_left){
        game_state.leftPressed = false;
    } 
    else if(event.keyCode === keys.arrow_right){
        game_state.rightPressed = false;
    } 
    else if(event.keyCode === keys.space){
        game_state.spacePressed = false;
    }
}

window.addEventListener('keydown',onKeyDown);
window.addEventListener('keyup',onKeyUp);