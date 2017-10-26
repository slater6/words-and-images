
const msg = new SpeechSynthesisUtterance()

const voices = window.speechSynthesis.getVoices();

const speak = (word) => {
   
    msg.voice = voices[4];
    msg.rate = 3;
    msg.pitch = 2;
    msg.text = word;

    speechSynthesis.speak(msg);
}

export default speak