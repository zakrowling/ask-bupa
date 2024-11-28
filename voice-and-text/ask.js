const startButton = document.getElementById('startButton');
var outputDiv = document.getElementsByTagName('input').value; //document.getElementsByTagName
//var outputDiv = document.getElementsByClassName('autocomplete-input').placeholder;
//const outputDiv = document.getElementById('output');

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
recognition.lang = 'en-US';

recognition.onstart = () => {
    startButton.classList.add("active");
    startButton.textContent = 'Listening...';
    outputDiv = '';
};

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    
    outputDiv = transcript;
    console.log(outputDiv);
    
    if (outputDiv.includes("singles health cover")) {
        window.open("https://www.bupa.com.au/health-insurance/singles", "_blank");
    }
    else if (outputDiv.includes("couples health cover")) {
        window.open("https://www.bupa.com.au/health-insurance/couples", "_blank");
    }
    else if (outputDiv.includes("family health cover")) {
        window.open("https://www.bupa.com.au/health-insurance/family", "_blank");
    }
    else if (outputDiv.includes("single parents health cover")) {
        window.open("https://www.bupa.com.au/health-insurance/single-parents", "_blank");
    }
    else if (outputDiv.includes("hospital and extras cover")) {
        window.open("https://www.bupa.com.au/health-insurance/hospital-and-extras-cover", "_blank");
    }
    else if (outputDiv.includes("top hospital and extras")) {
        window.open("https://www.bupa.com.au/health-insurance/hospital-and-extras-cover?sortby=low&pricerange=0%2C200%2C0%2C200&extraslevel=top&hospitallevel=silverplus%2Cgold&paymentfrequency=fortnightly", "_blank");
    }
    else if (outputDiv.includes("hospital only cover")) {
        window.open("https://www.bupa.com.au/health-insurance/hospital-cover", "_blank");
    }
    else if (outputDiv.includes("top hospital")) {
        window.open("https://www.bupa.com.au/health-insurance/hospital-cover?sortby=low&pricerange=0%2C200&hospitallevel=silverplus%2Cgold&paymentfrequency=fortnightly", "_blank");
    }
    else if (outputDiv.includes("cover for tax purposes")) {
        window.open("https://www.bupa.com.au/health-insurance/hospital-cover?sortby=low&pricerange=0%2C100&hospitallevel=basic&paymentfrequency=weekly", "_blank");
    }
    else if (outputDiv.includes("extras only cover")) {
        window.open("https://www.bupa.com.au/health-insurance/extras-cover", "_blank");
    }
    else if (outputDiv.includes("top extras")) {
        window.open("https://www.bupa.com.au/health-insurance/extras-cover?sortby=low&pricerange=0%2C100&extraslevel=top&paymentfrequency=fortnightly", "_blank");
    }
    else if (outputDiv.includes("student health cover")) {
        window.open("https://www.bupa.com.au/health-insurance/oshc", "_blank");
    }
    else if (outputDiv.includes("corporate health cover")) {
        window.open("https://www.bupa.com.au/corporate", "_blank");
    }
    else if (outputDiv.includes("quote")) {
        window.open("https://www.bupa.com.au/health-insurance/quote", "_blank");
    }
    else if (outputDiv.includes("find a provider")) {
        window.open("https://www.bupa.com.au/find-a-provider", "_blank");
    }
    else if (outputDiv.includes("compare health")) {
        window.open("https://www.bupa.com.au/health-insurance/compare", "_blank");
    }
    else if (outputDiv.includes("offers")) {
        window.open("https://www.bupa.com.au/offers", "_blank");
    }
    else if (outputDiv.includes("frequently asked questions")) {
        window.open("https://www.bupa.com.au/help", "_blank");
    }
    else if (outputDiv.includes("WhatsApp")) {
        window.open("https://api.whatsapp.com/send?phone=61134135", "_blank");
    }
    else if (outputDiv.includes("iMessage")) {
        window.open("https://bcrw.apple.com/messages/api/messageprofiles/redirecthelper?service=iMessage&recipient=urn:biz:1c2dbb3d-f971-4cbe-a49e-21cf527f4eb7", "_blank");
    }
    else if (outputDiv.includes("login")) {
        window.open("https://my.bupa.com.au/login?s_intcid=homepage:topnav:mybupa:login", "_blank");
    }
    else if (outputDiv.includes("call Bupa")) {
        window.open("tel:+61134135");
    }
    else if (outputDiv.includes("call me back")) {
        window.open("https://www.bupa.com.au/call-me-back", "_blank");
    }
    else if (outputDiv.includes("Bupa store")) {
        window.open("https://www.bupa.com.au/contact-us/find-a-bupa-store", "_blank");
    }
    else if (outputDiv.includes("online doctors")) {
        window.open("https://www.blua.bupa.com.au/", "_blank");
    }
    else if (outputDiv.includes("bluer")) {
        window.open("https://www.blua.bupa.com.au/", "_blank");
    }
    else if (outputDiv.includes("book a doctor's appointment")) {
        window.open("https://www.blua.bupa.com.au/online-doctors/validation/?s_intcid=blua:generic:bookadoctornow:startvalidation", "_blank");
    }
    else if (outputDiv.includes("chemist delivery")) {
        window.open("https://www.blua.bupa.com.au/chemist-delivery", "_blank");
    }
    else if (outputDiv.includes("Bupa Optical")) {
        window.open("https://bupaoptical.bupa.com.au/", "_blank");
    }
    else if (outputDiv.includes("Bupa Dental")) {
        window.open("https://www.bupadental.com.au/", "_blank");
    }
    else if (outputDiv.includes("Bupa hearing")) {
        window.open("https://hearing.bupa.com.au/", "_blank");
    }
    else if (outputDiv.includes("Bupa Aged Care")) {
        window.open("https://www.bupaagedcare.com.au/", "_blank");
    }
    else if (outputDiv.includes("health and well-being")) {
        window.open("https://www.bupa.com.au/healthlink", "_blank");
    }
    else if (outputDiv) {
        const matches = outputDiv.replace(/ /g, '+');
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
