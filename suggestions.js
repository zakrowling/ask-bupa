const words = [
  "compare health cover",
  "get a quote",
  "frequently asked questions",
  "singles health cover",
  "book a doctor\'s appointment",
  "top hospital and extras cover",
  "cover for tax purposes",
  "extras only cover",
  "log in to myBupa",
  "call Bupa",
  "corporate health cover",
  "student health cover",
  "online doctors",
  "find a provider",
  "family health cover",
  "Bupa offers",
  "message Bupa",
  "Bupa Optical",
  "chemist delivery",
  "Bupa Dental",
];
const timePerWord = 5000; // milliseconds
const timePerLetter = 40; //milliseconds

let current = words[0];
const wordEl = document.getElementById("word");

setInterval(switchText, timePerWord);

async function switchText() {
  const index = words.indexOf(current);
  const curLength = current.length;

  for (let i = 0; i <= curLength; i += 1) {
    await wait(timePerLetter);
    current = current.substring(0, current.length - 1);
    wordEl.innerText = current;
  }

  await wait(current.length * timePerLetter);

  const newWord = words[index + 1] || words[0];
  for (let idx = 0; idx <= newWord.length; idx += 1) {
    await wait(timePerLetter);
    current = newWord.substring(0, idx);
    wordEl.innerText = current;
  }
}

function wait(timeout) {
  return new Promise((resolve) => setTimeout(() => resolve(), timeout));
}
