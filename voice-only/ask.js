const startButton = document.getElementById('startButton');
const outputDiv = document.getElementById('output');

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-US';

recognition.onstart = () => {
    playSound();
    startButton.classList.add("active");
    outputDiv.classList.add("sound-bars");
    startButton.textContent = 'Listening...';
    outputDiv.textContent = '';
};

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    
    outputDiv.textContent = transcript;
    if (outputDiv.textContent.includes("singles health cover")) {
        document.location.href = "https://www.bupa.com.au/health-insurance/singles";
    }
    else if (outputDiv.textContent.includes("couples health cover")) {
        document.location.href = "https://www.bupa.com.au/health-insurance/couples";
    }
    else if (outputDiv.textContent.includes("family health cover")) {
        document.location.href = "https://www.bupa.com.au/health-insurance/family";
    }
    else if (outputDiv.textContent.includes("single parents health cover")) {
        document.location.href = "https://www.bupa.com.au/health-insurance/single-parents";
    }
    else if (outputDiv.textContent.includes("hospital and extras cover")) {
        document.location.href = "https://www.bupa.com.au/health-insurance/hospital-and-extras-cover";
    }
    else if (outputDiv.textContent.includes("top hospital and extras")) {
        document.location.href = "https://www.bupa.com.au/health-insurance/hospital-and-extras-cover?sortby=low&pricerange=0%2C200%2C0%2C200&extraslevel=top&hospitallevel=silverplus%2Cgold&paymentfrequency=fortnightly";
    }
    else if (outputDiv.textContent.includes("hospital only cover")) {
        document.location.href = "https://www.bupa.com.au/health-insurance/hospital-cover";
    }
    else if (outputDiv.textContent.includes("top hospital")) {
        document.location.href = "https://www.bupa.com.au/health-insurance/hospital-cover?sortby=low&pricerange=0%2C200&hospitallevel=silverplus%2Cgold&paymentfrequency=fortnightly";
    }
    else if (outputDiv.textContent.includes("cover for tax purposes")) {
        document.location.href = "https://www.bupa.com.au/health-insurance/hospital-cover?sortby=low&pricerange=0%2C100&hospitallevel=basic&paymentfrequency=weekly";
    }
    else if (outputDiv.textContent.includes("extras only cover")) {
        document.location.href = "https://www.bupa.com.au/health-insurance/extras-cover";
    }
    else if (outputDiv.textContent.includes("top extras")) {
        document.location.href = "https://www.bupa.com.au/health-insurance/extras-cover?sortby=low&pricerange=0%2C100&extraslevel=top&paymentfrequency=fortnightly";
    }
    else if (outputDiv.textContent.includes("student health cover")) {
        document.location.href = "https://www.bupa.com.au/health-insurance/oshc";
    }
    else if (outputDiv.textContent.includes("corporate health cover")) {
        document.location.href = "https://www.bupa.com.au/corporate";
    }
    else if (outputDiv.textContent.includes("quote")) {
        document.location.href = "https://www.bupa.com.au/health-insurance/quote";
    }
    else if (outputDiv.textContent.includes("find a provider")) {
        document.location.href = "https://www.bupa.com.au/find-a-provider";
    }
    else if (outputDiv.textContent.includes("compare health")) {
        document.location.href = "https://www.bupa.com.au/health-insurance/compare";
    }
    else if (outputDiv.textContent.includes("offers")) {
        document.location.href = "https://www.bupa.com.au/offers";
    }
    else if (outputDiv.textContent.includes("frequently asked questions")) {
        document.location.href = "https://www.bupa.com.au/help";
    }
    else if (outputDiv.textContent.includes("WhatsApp")) {
        document.location.href = "https://api.whatsapp.com/send?phone=61134135";
    }
    else if (outputDiv.textContent.includes("iMessage")) {
        document.location.href = "https://bcrw.apple.com/messages/api/messageprofiles/redirecthelper?service=iMessage&recipient=urn:biz:1c2dbb3d-f971-4cbe-a49e-21cf527f4eb7";
    }
    else if (outputDiv.textContent.includes("login")) {
        document.location.href = "https://my.bupa.com.au/login?s_intcid=homepage:topnav:mybupa:login";
    }
    else if (outputDiv.textContent.includes("call Bupa")) {
        document.location.href = "tel:+61134135";
    }
    else if (outputDiv.textContent.includes("call me back")) {
        document.location.href = "https://www.bupa.com.au/call-me-back";
    }
    else if (outputDiv.textContent.includes("Bupa store")) {
        document.location.href = "https://www.bupa.com.au/contact-us/find-a-bupa-store";
    }
    else if (outputDiv.textContent.includes("online doctors")) {
        document.location.href = "https://www.blua.bupa.com.au/";
    }
    else if (outputDiv.textContent.includes("bluer")) {
        document.location.href = "https://www.blua.bupa.com.au/";
    }
    else if (outputDiv.textContent.includes("book a doctor's appointment")) {
        document.location.href = "https://www.blua.bupa.com.au/online-doctors/validation/?s_intcid=blua:generic:bookadoctornow:startvalidation";
    }
    else if (outputDiv.textContent.includes("chemist delivery")) {
        document.location.href = "https://www.blua.bupa.com.au/chemist-delivery";
    }
    else if (outputDiv.textContent.includes("Bupa Optical")) {
        document.location.href = "https://bupaoptical.bupa.com.au/";
    }
    else if (outputDiv.textContent.includes("Bupa Dental")) {
        document.location.href = "https://www.bupadental.com.au/";
    }
    else if (outputDiv.textContent.includes("Bupa hearing")) {
        document.location.href = "https://hearing.bupa.com.au/";
    }
    else if (outputDiv.textContent.includes("Bupa Aged Care")) {
        document.location.href = "https://www.bupaagedcare.com.au/";
    }
    else if (outputDiv.textContent.includes("health and well-being")) {
        document.location.href = "https://www.bupa.com.au/healthlink";
    }
    else if (outputDiv.textContent) {
        const matches = outputDiv.textContent.replace(/ /g, '+');
        const searchURL = "https://www.bupa.com.au/utility/search-results?q=" + matches;
        document.location.href = searchURL;
    }
};

recognition.onend = () => {
    startButton.classList.remove("active");
    outputDiv.classList.remove("sound-bars");
    startButton.textContent = 'Ask Bupa';
};

startButton.addEventListener('click', () => {
    recognition.start();
});

function playSound() {
    var audio = document.getElementById("audio");
    audio.play();
}
