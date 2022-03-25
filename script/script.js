const burgerMenu = () => {
    const burger = document.querySelector('.burgerMenu');
    const ul = document.querySelector('header ul');
    let burgerIcon = document.querySelector('.burgerMenu i');
    burger.addEventListener('click', () => {
        ul.classList.toggle('show')
        burgerIcon.classList.toggle('fa-bars')
        burgerIcon.classList.toggle('fa-xmark')
    })
}

// List of sentences
var sentences = [
    "dreams",
    "branding",
    "marketing",
    "websites",
    "e-commerce"
];

// Current sentence being processed
var word = 0;

// Character number of the current sentence being processed 
var wordIndex = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#animateText");


// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  sentences[word].substring(0, wordIndex + 1);
	_ELEMENT.innerHTML = text;
	wordIndex++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === sentences[word]) {

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  sentences[word].substring(0, wordIndex - 1);
	_ELEMENT.innerHTML = text;
	wordIndex--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(word == (sentences.length - 1))
			word = 0;
		else
			word++;
		
		wordIndex = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

const videoThing = () => {
    const video = document.querySelector('#youtubeDiv video');
    video.addEventListener('click', () => {
        video.requestFullscreen();
        // video.controls.toggle();
        // video.muted.toggle();
		if (video.muted == true) {
			video.muted = false;
		}
    })
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);
videoThing();
burgerMenu();