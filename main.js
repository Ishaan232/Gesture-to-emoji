p1="";
p2="";
Webcam.set({
     width:350,
     height:300,
      image_format : 'png',
       png_quality:90 
    });
    camera=document.getElementById("camera");
    Webcam.attach('#camera');
    function RABBIT(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});
    }
    console.log("machine learning version 5 is loaded",ml5.version);
    x=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/WvVOE0XnD/model.json',model_loaded);
    function model_loaded(){
        console.log("model_loaded");
    }
    function speak(){
      siiav=window.speechSynthesis;
      speakone="The first prediction is"+p1;
      speaktwo="The second prediction is"+p2;
      var utterThis = new SpeechSynthesisUtterance(speakone + speaktwo);
      siiav.speak(utterThis);
    }
    function GHOST(){
      siiacv=document.getElementById("captured_image");
      x.classify(siiacv,afnoyc);
    }
    function afnoyc(error,result){
if (error){
    console.log(error);
}
else{
    console.log(result);
}
    }