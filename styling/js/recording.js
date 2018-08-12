var foobar = () => {
    start();
    setTimeout(stop, 5000);
}



//this holds the info
var microm = new Microm();
var mp3 = null;

//this is function to start the recording
function start() {
    
    microm.record().then(function() {
        isRecording = true;
      console.log('recording...')
    }).catch(function() {
      console.log('error recording');
    });
  }
  

//this stops the recording
function stop() {
  microm.stop().then(function(result) {
    isRecording = false;
    mp3 = result;
    //console.log(mp3.url, mp3.blob, mp3.buffer);
    download();
    uploadRecording(mp3.blob);
  });
}


//this plays the current recording
function play() {
  microm.play();
}


//this is to downlaod on client 
function download() {
  var fileName = 'cat_voice';
  microm.download(fileName);
}


//this is to upload recording to server
function uploadRecording (blob) {
    var name = "audio"
    var formData = new FormData();
    formData.append(name, blob)
    $.ajax({
        type: 'POST',
        contentType: false,
        processData: false,
        cache: false,
        url: './save.php',
        data: formData,
        success: function(data){
            //do this on success 
            console.log(data);
        },
        error: function(err) {
            console.log('there has been an error')
            console.log(err)
        }
    });
      
}