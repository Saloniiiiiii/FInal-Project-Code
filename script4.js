function readmsgs() {
  var SpeechRecognition = window.webkitSpeechRecognition;
  var speech = new SpeechSynthesisUtterance();
  var speech1 = new SpeechSynthesisUtterance();
  var recognition = new SpeechRecognition();
  speech.lang = "en-US";

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  recognition.continuous = true;

  speech.text = "You are headed towards inbox page";
  window.speechSynthesis.speak(speech);
  setTimeout(to, 4000);
  recognition.start();
}
