var phone_beep = new Audio('./assets/sounds/beep_Sound.mp3')
var media_menu = new Audio('./assets/sounds/411.mp3')


var soundOne = document.getElementById('button-1')
var can_select = false; 
var recentPressed = '';


var call_options = {
    1 : {
        audio: new Audio('./assets/sounds/lebron_james_kid.mp3')
    },
    2 : {
        audio: new Audio('./assets/sounds/miku_world_is_mine.mp3') 
    },
    3 : {
        audio: new Audio('./assets/sounds/naruto_talking.mp3') 
    }
}

function buttonPress(num) {
    recentPressed = String(num);
    phoneDial();
    if (can_select) {
        var sbSound = call_options[num];
        sbSound.audio.play()
        
    }


    
}
function clearNum() {
    recentPressed = ''
    phoneDial();

}




function phoneDial() {
    phone_beep.currentTime = 0;
    phone_beep.play()
}
function playMenu() {
    media_menu.currentTime = 0;
    media_menu.play()
}
function selectChange() {
    can_select = !can_select;
    console.log(can_select);
}

window.onload = function() {
    playMenu();
    window.setTimeout(selectChange, 2500)
  };