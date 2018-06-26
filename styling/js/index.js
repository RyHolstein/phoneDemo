//phonecall Order 
// 1. voicemail 
// 2. news 
// 3. order merch 
// 4. message 
// 5. pobox 
// 6. joke 
// 7. magic trick 
// 8. secret 
// 9. mix 
// 0. home 


var phone_beep = new Audio('./assets/sounds/beep_Sound.mp3')


var soundOne = document.getElementById('button-1')
var can_select = false; 
var recentPressed = '';


var call_options = {
    0 : {
        audio: new Audio('./assets/sounds/voicemail/sbphone.mp3')
    },
    1 : {
        audio: new Audio('./assets/sounds/voicemail/voicemail.mp3')
    },
    2 : {
        audio: new Audio('./assets/sounds/voicemail/news.mp3') 
    },
    3 : {
        audio: new Audio('./assets/sounds/voicemail/order_mercy.m4a') 
    },
    4 : {
        audio: new Audio('./assets/sounds/voicemail/kerwinraymessage.mp3') 
    },

    5 : {
        audio: new Audio('./assets/sounds/voicemail/pobox.mp3') 
    },

    6 : {
        audio: new Audio('./assets/sounds/voicemail/joke.mp3')
    },  
    7 : {
        audio: new Audio('./assets/sounds/voicemail/sbmagictrick.mp3')
    },
    8 : {
        audio: new Audio('./assets/sounds/voicemail/secrets.mp3')
    },
    9 : {
        audio: new Audio('./assets/sounds/voicemail/mix.mp3')
    },

}

function buttonPress(num) {
    recentPressed = String(num);
    phoneDial();
    stopAllAudio();
   
    var sbSound = call_options[num];
    setTimeout(function(){
        sbSound.audio.play()
        console.log('timeout Completed')
    }, 1000)
    
        
    
}





function phoneDial() {
    phone_beep.pause()
    phone_beep.currentTime = 0;
    phone_beep.play()
}
function playMenu() {
    
    media_menu.currentTime = 0;
    media_menu.play()
}
// function selectChange() {
//     can_select = !can_select;
//     console.log(can_select);
// }


function stopAllAudio() {
    Object.keys(call_options).forEach(function(item) {
        call_options[item].audio.pause()
        call_options[item].audio.currentTime = 0;
    })
}


window.onload = function() {
    var sbmenu = call_options[0]
    sbmenu.audio.play();
    //window.setTimeout(selectChange, 2500)
  };