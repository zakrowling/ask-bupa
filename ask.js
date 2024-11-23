const startButton = document.getElementById('startButton');
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
    
    outputDiv.textContent = transcript;
    if (outputDiv.textContent.includes("singles health cover")) {
        window.open("https://www.bupa.com.au/health-insurance/singles", "_blank");
    }
    else if (outputDiv.textContent.includes("couples health cover")) {
        window.open("https://www.bupa.com.au/health-insurance/couples", "_blank");
    }
    else if (outputDiv.textContent.includes("family health cover")) {
        window.open("https://www.bupa.com.au/health-insurance/family", "_blank");
    }
    else if (outputDiv.textContent.includes("single parents health cover")) {
        window.open("https://www.bupa.com.au/health-insurance/single-parents", "_blank");
    }
    else if (outputDiv.textContent.includes("hospital and extras cover")) {
        window.open("https://www.bupa.com.au/health-insurance/hospital-and-extras-cover", "_blank");
    }
    else if (outputDiv.textContent.includes("hospital only cover")) {
        window.open("https://www.bupa.com.au/health-insurance/hospital-cover", "_blank");
    }
    else if (outputDiv.textContent.includes("extras only cover")) {
        window.open("https://www.bupa.com.au/health-insurance/extras-cover", "_blank");
    }
    else if (outputDiv.textContent.includes("student health cover")) {
        window.open("https://www.bupa.com.au/health-insurance/oshc", "_blank");
    }
    else if (outputDiv.textContent.includes("online doctors")) {
        window.open("https://www.blua.bupa.com.au/", "_blank");
    }
    else if (outputDiv.textContent.includes("book a doctor's appointment")) {
        window.open("https://www.blua.bupa.com.au/online-doctors/validation/?s_intcid=blua:generic:bookadoctornow:startvalidation", "_blank");
    }
    else if (outputDiv.textContent.includes("chemist delivery")) {
        window.open("https://www.blua.bupa.com.au/chemist-delivery", "_blank");
    }
    else if (outputDiv.textContent.includes("quote")) {
        window.open("https://www.bupa.com.au/health-insurance/quote", "_blank");
    }
    else if (outputDiv.textContent.includes("find a provider")) {
        window.open("https://www.bupa.com.au/find-a-provider", "_blank");
    }
    else if (outputDiv.textContent.includes("compare health")) {
        window.open("https://www.bupa.com.au/health-insurance/compare", "_blank");
    }
    else if (outputDiv.textContent.includes("offers")) {
        window.open("https://www.bupa.com.au/offers", "_blank");
    }
    else if (outputDiv.textContent.includes("frequently asked questions")) {
        window.open("https://www.bupa.com.au/help", "_blank");
    }
    else if (outputDiv.textContent.includes("message Bupa")) {
        window.open("https://api.whatsapp.com/send?phone=61134135", "_blank");
    }
    else if (outputDiv.textContent.includes("login")) {
        window.open("https://my.bupa.com.au/login?s_intcid=homepage:topnav:mybupa:login", "_blank");
    }
    else if (outputDiv.textContent.includes("call Bupa")) {
        window.open("tel:+61134135");
    }
    else if (outputDiv.textContent.includes("call me back")) {
        window.open("https://www.bupa.com.au/call-me-back", "_blank");
    }
    else if (outputDiv.textContent) {
        const matches = outputDiv.textContent.replace(/ /g, '+');
        const searchURL = "https://www.bupa.com.au/utility/search-results?q=" + matches;
        window.open(searchURL, "_blank");
    }
};

recognition.onend = () => {
    startButton.classList.remove("active");
    startButton.textContent = 'Ask Bupa';
};

startButton.addEventListener('click', () => {
    recognition.start();
});
