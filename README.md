# Ask Bupa
A voice-only search for navigating the Bupa website.

##How it works
Users interact with a button that triggers the Web Speech API in their browser.
The Web Speech API provides browsers with speech recognition and speech synthesis capability (also known as text to speech, or tts).

After speech synthesis, the spoken phrase is then checked for keywords and matches URLs to these keywords.
If it cannot detect a match, it defaults users to the standard website search and builds a search query from each word in the phrase.
