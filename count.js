var num_ums = 0;
var background = document.getElementById('content')
const buzz_sound = new Audio("buzz.mp3");

function add_new_um(){
    var ums_display = document.getElementById("num_ums");
    num_ums ++;
    ums_display.textContent = num_ums;
    background.className = 'um_detected';
    buzz_sound.play();
    setTimeout(change_bg, 500);
    
}

function change_bg(){
    background.className = 'normal';
}

function reset_ums(){
    num_ums = 0;
    var ums_display = document.getElementById("num_ums");
    ums_display.textContent = num_ums;

}