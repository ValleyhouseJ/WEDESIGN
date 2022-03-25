var sentences = [
    "dreams",
    "branding",
    "marketing",
    "websites",
    "e-commerce"
];
var word = 0;
var wordIndex = 0;
var interval;
var textElement = document.querySelector("#animateText");
function Type() { 
	var text =  sentences[word].substring(0, wordIndex + 1);
	textElement.innerHTML = text;
	wordIndex++;
	if(text === sentences[word]) {
		clearInterval(interval);
		setTimeout(function() {
			interval = setInterval(Delete, 50);
		}, 1000);
	}
}
function Delete() {
	var text =  sentences[word].substring(0, wordIndex - 1);
	textElement.innerHTML = text;
	wordIndex--;
	if(text === '') {
		clearInterval(interval);
		if(word == (sentences.length - 1)) {
			word = 0;
		} else {
			word++;
		}
		wordIndex = 0;
		setTimeout(function() {
			interval = setInterval(Type, 100);
		}, 200);
	}
}
const videoThing = () => {
    const video = document.querySelector('#youtubeDiv video');
    video.addEventListener('click', () => {
        video.requestFullscreen();
		if (video.muted == true) {
			video.muted = false;
		}
    })
}
interval = setInterval(Type, 100);
videoThing();