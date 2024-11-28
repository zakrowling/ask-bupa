const startButton = document.getElementById('startButton');
const outputDiv = document.getElementById('output');

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-US';

recognition.onstart = () => {
    playSound();
    startButton.classList.add("active");
    startButton.textContent = 'Listening...';
    outputDiv.textContent = '';
    outputDiv.style.display = 'none';
};

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    const matches = transcript.replace(/ /g, '+');
    const searchURL = "https://www.bupa.com.au/utility/search-results?q=" + matches;
    
    outputDiv.innerHTML = "<span id='searchTag'><a href='" + searchURL + "' target='_blank'>" + transcript + "</a><i onclick='hideSearch()' id='clearSearch' title='Clear Search' class='fa-solid fa-circle-xmark' aria-hidden='true'></i></span>";
    outputDiv.style.display = 'block';

    document.location.href = searchURL;
};

recognition.onend = () => {
    startButton.classList.remove("active");
    startButton.textContent = 'Ask Bupa';
};

startButton.addEventListener('click', () => {
    recognition.start();
});

function hideSearch() {
    outputDiv.style.display = "none";
    document.querySelector('.autocomplete-input').value = '';
}

function playSound() {
    var audio = document.getElementById("audio");
    audio.play();
}
