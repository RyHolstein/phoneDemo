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


var soundOne = document.getElementById('button-1');
var callButton = document.getElementById('call--button');
var contactSub = document.getElementById('contact-sub');
var topClock = document.getElementById('topbar__clock');
var phone = document.getElementById('Mock-phone');


var isRecording = false;
var can_select = false; 
var recentPressed = '';
var callInProgress = false;
var callConnected = false;
var recordingTO;


var call_options = {
    0 : {
        audio: new Audio('./assets/sounds/voicemail/sbphone.mp3')
        
    },
    1 : {
        audio: new Audio('./assets/sounds/voicemail/voicemail.mp3'),
        action: (time) => {
            var timeout = Math.floor(time * 1000)
            console.log(timeout);
            recordingTO = setTimeout(() => {
                start();
                console.log('should record')
            }, timeout);
        }
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
        if (isRecording) {
            clearTimeout(recordingTO);
            stop();
        }
    }else {
        changePhoneLook(true);
        startCall();
      

    }
}

function startCall() {
    
    ringing.play()
    contactSub.innerHTML = 'Calling...'
    
    callInProgress = true;
    startHold = setTimeout(function(){
        callConnected = true;
        ringing.pause()
        call_options[0].audio.play()
    }, 3000)
    
    
}

function hangUp() {
    clearInterval(phoneTimer);
    clearTimeout(startHold);
    stopAllAudio()
    ringing.pause()
    contactSub.innerHTML = 'Call Ended';

    setTimeout(function(){
        ringing.currentTime = 0;
        callInProgress = false;
        callConnected =false;
        contactSub.innerHTML = 'Spaghetti Boys';
        changePhoneLook(false);

    }, 2000)


    

}

function buttonPress(num) {
    recentPressed = String(num);
    phoneDial();
    stopAllAudio();
    if(callConnected) {
        var sbSound = call_options[num];
        
        setTimeout(function(){
            sbSound.audio.play()
        
            if (sbSound.action) {
                sbSound.action(sbSound.audio.duration);
                
            }else {
                sbSound.audio.addEventListener('ended', function(){
                    call_options[0].audio.currentTime = 0;
                    call_options[0].audio.play()
                })
            }
        }, 1000);
    }
}

var background = document.getElementById('background__holder')
var keypad = document.getElementsByClassName('keypad__button')

function changePhoneLook(status) { //this will handle the phones look 

    if (status) { //when the call starts 

        document.body.style.color = '#eee'
        background.classList.add('call__background')
        phone.classList.add('calling')
        callButton.classList.remove('phone--call');
        callButton.classList.add('phone--hangup');
        for (var i =0; i < keypad.length; i++ ) {
            keypad[i].classList.remove('noCall')
            keypad[i].classList.add('call')
        }
    
    }else { //when the call ends
        document.body.style.color = '#222';
        background.classList.remove('call__background');
        callButton.classList.remove('phone--hangup');
        callButton.classList.add('phone--call');
        phone.classList.remove('calling')
       
        for (var i =0; i < keypad.length; i++ ) {
            keypad[i].classList.add('noCall')
            keypad[i].classList.remove('call')
        }
      
    }
}




//====here a are for the sounds 
function phoneDial() {phone_beep.cloneNode(true).play()}

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


function clock() { //this is the function for the live clock 
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    if (hours > 12 ) {
        hours -= 12;
    } else if (hours === 0) {
        hours =12;
    } if (minutes < 10 ) {
        var fmin = '0' + minutes; 
        topClock.innerHTML = hours + ':' + fmin
    }else {
        topClock.innerHTML = hours + ':' + minutes
    }
    //console.log(hours, minutes)

}
clock();
setInterval(clock, 30000);




