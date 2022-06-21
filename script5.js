function finalmsg() {
  var SpeechRecognition = window.webkitSpeechRecognition;
  var speech = new SpeechSynthesisUtterance();
  var speech1 = new SpeechSynthesisUtterance();
  var recognition = new SpeechRecognition();
  speech.lang = "en-US";
  let final = "";
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  recognition.continuous = true;

  speech.text = "Your Mail has been sent successfully";
  window.speechSynthesis.speak(speech);

  speech.text = "Say Back , to get back to manu page";
  window.speechSynthesis.speak(speech);
  recognition.start();
  recognition.onresult = function (event) {
    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript;

    final += transcript;
    if (final.includes("back")) {
      document.getElementById("backbtn").click();
    }
  };
}
