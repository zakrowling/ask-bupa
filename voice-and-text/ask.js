const startButton = document.getElementById('startButton');
//var outputDiv = document.getElementsByTagName('input').placeholder; //document.getElementsByTagName
//var outputDiv = document.getElementsByClassName('autocomplete-input').placeholder;
const outputDiv = document.getElementById('output');

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-US';

recognition.onstart = () => {
    startButton.classList.add("active");
    startButton.textContent = 'Listening...';
    outputDiv.textContent = '';
};

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    
    outputDiv = transcript;
    console.log(outputDiv);
};

recognition.onend = () => {
    startButton.classList.remove("active");
    startButton.textContent = 'Ask Bupa';
};

startButton.addEventListener('click', () => {
    recognition.start();
});
