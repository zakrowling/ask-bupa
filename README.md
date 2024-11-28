# Ask Bupa
A VUI search prototype for navigating the Bupa ecosystem.

## How it works
Users interact with a button that triggers the Web Speech API in their browser.
The Web Speech API provides browsers with speech recognition and speech synthesis capability.

After speech synthesis, the spoken phrase is then checked for keywords and matches URLs to these keywords.
If it cannot detect a match, it defaults users to the standard website search and builds a search query from each word in the phrase.

## Demo
https://zakrowling.github.io/ask-bupa/voice-only/

Note: The demo will only work if you give permission for your browser to access your microphone. Ad blockers and other protective tools may also impact the prototype.

The demo has only been tested on a Mac. Firefox, Opera, and legacy browsers don't support the Web Speech API.

## Example test prompts
Although the prototype will recognize any prompts with a search query fallback, here are some test phrases.

*"compare health cover"*

*"get a quote"*

*"frequently asked questions"*

*"singles health cover"*

*"book a doctor's appointment"*

*"top hospital and extras cover"*

*"cover for tax purposes"*

*"extras only cover"*

*"log in to myBupa"*

*"call Bupa"*

*"chat via WhatsApp"*

*"chat via iMessage"*

*"find a Bupa store"*

*"corporate health cover"*

*"student health cover"*

*"online doctors"*

*"find a provider"*

*"Bupa offers"*

*"family health cover"*

*"Bupa Optical"*

*"Bupa Aged Care"*

*"chemist delivery"*

*"Bupa Dental"*
