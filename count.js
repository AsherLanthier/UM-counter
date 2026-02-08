var num_ums = 0;
var background = document.getElementById('content')
const buzz_sound = new Audio("buzz.mp3");
let classifier;
let url = 'https://teachablemachine.withgoogle.com/models/8dAmaW83s/';
let predictedWord = "";


function preload() {
  // Options for the SpeechCommands18w model, the default probabilityThreshold is 0
  let options = { probabilityThreshold: 0.7 };
  // Load SpeechCommands18w sound classifier model
  classifier = ml5.soundClassifier(url, options);
}

function setup() {
  createCanvas(650, 450);
  // Classify the sound from microphone in real time
  classifier.classifyStart(gotResult);
}

// A function to run when we get any errors and the results
function gotResult(results) {
  // Load the first label to the text variable displayed on the canvas
  console.log(results);
  predictedWord = results[0].label;
  confidence = results[0].confidence;
  if(predictedWord == 'fillerWord' && auto_on && confidence >= 0.9){
    console.log("FOUND");
    add_new_um(0.5);
  }
}

function add_new_um(ums_found){
    var ums_display = document.getElementById("num_ums");
    num_ums += ums_found;
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

var auto_times_presed = 0;
var auto_on;
var auto_button = document.getElementById('auto_btn');

function toggle_auto(){
    auto_times_presed ++;
    if (auto_times_presed % 2 == 0){
        auto_on = false
        auto_button.textContent = "Auto Recognition Off";
    }
    else{
        auto_on = true;
        auto_button.textContent = "Auto Recognition On";
    }
}