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
    outputDiv.style.display = 'none';
};

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    outputDiv.innerHTML = "<i id='clearSearch' title='Clear Search' class='fa-solid fa-circle-xmark' aria-hidden='true' onclick='parentNode.remove()'></i><a href='https://www.bupa.com.au' target='_blank'>" + transcript + "</a>";
    outputDiv.style.display = 'block';
};

recognition.onend = () => {
    startButton.classList.remove("active");
    startButton.textContent = 'Ask Bupa';
};

startButton.addEventListener('click', () => {
    recognition.start();
});
