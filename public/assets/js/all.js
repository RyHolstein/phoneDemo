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
var ringing = new Audio('./assets/sounds/effects/phone_ringing.mp3')
var phoneTimer;


var soundOne = document.getElementById('button-1')
var callButton = document.getElementById('call--button');
var contactSub = document.getElementById('contact-sub');

var can_select = false; 
var recentPressed = '';
var callInProgress = false;


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



function callController() {
    if (callInProgress) {
        hangUp();
       
        callButton.classList.remove('phone--hangup');
        callButton.classList.add('phone--call');
        clearInterval(phoneTimer);
        
    }else {
        startCall();
        callButton.classList.remove('phone--call');
        callButton.classList.add('phone--hangup');

    }
}

function startCall() {
    
    ringing.play()
    contactSub.innerHTML = 'Calling...'
    
    callInProgress = true;
    startHold = setTimeout(function(){
        ringing.pause()
        call_options[0].audio.play()
        
        timer();
    }, 3000)
    
    
}

function hangUp() {
    clearTimeout(startHold);
    stopAllAudio()
    ringing.pause()
    ringing.currentTime = 0;
    callInProgress = false;
    contactSub.innerHTML = 'Spaghetti Boys';
    

}

function buttonPress(num) {
    recentPressed = String(num);
    phoneDial();
    stopAllAudio();
   if(!has_called) {
       var sbSound = call_options[num];
       sbSound.audio.addEventListener('ended', function(){
            call_options[0].audio.currentTime = 0;
            call_options[0].audio.play()
       })
       setTimeout(function(){
           sbSound.audio.play()
           console.log('timeout Completed')
       }, 1000);
   }
}







//====here a are for the sounds 
function phoneDial() {

    phone_beep.cloneNode(true).play()
}

function playMenu() {
    
    media_menu.currentTime = 0;
    media_menu.play()
}
function selectChange() {
    can_select = !can_select;
    console.log(can_select);
}


function stopAllAudio() {
    Object.keys(call_options).forEach(function(item) {
        call_options[item].audio.pause()
        call_options[item].audio.currentTime = 0;
    })
}

var startHold;




function timer() {
    var min = 0;
    var sec = 00;
    contactSub.innerHTML ='0:00'
    phoneTimer = setInterval(function(){
        console.log('in here')
        sec += 1;
        if (sec > 59) {
            min += 1;
            sec = 00;
        }
        if (sec < 10) {
            fsec = '0' + sec;
            contactSub.innerHTML = min + ':' + fsec
        }   
        else {
            contactSub.innerHTML = min + ':' + sec;
        }
    }, 1000)
}