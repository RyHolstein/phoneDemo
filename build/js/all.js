
var audio_1 = new Audio('../assets/sounds/miku_world_is_mine.mp3')
var audio_2 = new Audio('../assets/sounds/lebron_james_kid.mp3')
var audio_3 = new Audio('../assets/sounds/naruto_talking.mp3')



var soundOne = document.getElementById('button-1')
var numbershown = document.getElementById('current_number')
var current = '';


function buttonPress(num) {
    current += String(num);
    playSound(num);
    numbershown.innerHTML = current;
    
}
function clearNum() {
    current = '';
    stopAudio()
    numbershown.innerHTML = current;
}

function playSound(number) {
    
    if (number == 1) {
       audio_1.play();
   } else if (number == 2 ){
       audio_2.play();
   } else {
       audio_3.play();
   }
}


function stopAudio() {
    audio_1.pause();
    audio_1.currentTime = 0;
    
    audio_2.pause();
    audio_2.currentTime = 0;
    
    audio_3.pause();
    audio_3.currentTime = 0;


}