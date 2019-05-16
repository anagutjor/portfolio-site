let canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 800;
canvas.className = 'gandalf';
let context = canvas.getContext('2d');

let reggae = new Audio(src='/static/sounds/The Maytals - Do The Reggay.mp3');
let recordScratch = new Audio(src='/static/sounds/record_scratch.mp3');
let gandalf = new Image();
gandalf.src = '/static/img/gandalf.png';
gandalf.style['border-radius'] = "0px";

let sunglasses = new Image();
sunglasses.src = '/static/img/sunglasses.png';

let joint = new Image();
joint.src = '/static/img/joint.png';

let dialogBubble = document.createElement('div');
dialogBubble.className = 'dialogBubble';

let container = document.getElementsByClassName('container content');

let firstLine = 'Hello, I am Gandalf, Ms Gutierrez assistant';
let secondLine = 'Actually, I was created by her. I was her first coding creature, Gandalf the Chatbot';
let thirdLine = 'Let me guide you through her site. As you can see, only a really skilled dev could have crafted this spectacular web architecture...';
let fourthLine = `But first things first. Let's chill out. Code looks more beautiful with the appropiate atmosphere, ain't it?`;
let puffsLine = 'Gimme some puffs, fella! Oh yeah';
let noEscapeLine = `Hahaha, don't get upset, my dear fella, just join the fun. C'mon, get yourself some synaptic disruptors for your neurons`;

let intervalTyping; // declare here to be able to clear in other functions
let intervalReggae;

function chillOut() {
    reggae.play();
    intervalReggae = setInterval( () => {reggae.play()}, 191000); // looping playing song again and again

    addImageToCanvas( sunglasses, -281, 137, 160, 200);
    setTimeout( () => {
        addImageToCanvas( joint, -325, 128, 250, 400)
    }, 8000)
}

window.addEventListener( ('keydown'), () => { // escape possibility for tired guests
    if ( container[0].childNodes[7] &&  // check if dialogBubble is already in DOM
        container[0].childNodes[7].className === 'dialogBubble' ) {
        container[0].removeChild(canvas);
        container[0].removeChild(dialogBubble);
        reggae.pause();
        recordScratch.play();
        clearInterval(intervalReggae); // clear music interval
    }
})

function typing(line) {
	let i = 0;
    dialogBubble.innerHTML = ''; // empty dialogBubble
    intervalTyping = setInterval(handleInterval, 60);
	
	function handleInterval() {
		dialogBubble.innerHTML += line[i];
		i++;
		if (i >= line.length) {
			clearInterval(intervalTyping);
		}
	}
}

let count = 0; // keep count of how many times puffsLine is triggered
setTimeout( () => {
    canvas.addEventListener( ('click'), () => {
        clearInterval(intervalTyping); // clear before to prevent weird line interferences
        typing(puffsLine)
        count++;
        if ( count === 7 ) {
            count = 0;
            clearInterval(intervalTyping);
            typing(noEscapeLine);
        }
    });
}, 26000)

setTimeout( () => {
    container[0].appendChild(canvas);
    flipHorizontally( gandalf, -70, 50);
    container[0].insertBefore(dialogBubble, container.firstChild);
    typing(firstLine);
    setTimeout( () => {
        typing(secondLine);
        setTimeout( () => {
            typing(thirdLine);
            setTimeout( () => {
                typing(fourthLine);
                chillOut();
            }, 10000)
        }, 6000)
    }, 4000)
}, 9000)

function flipHorizontally( img, x , y) {
    context.translate( x+img.width, y);
    context.scale(-1, 1);
    context.drawImage( img, 0, 0);
    context.setTransform( 1, 0, 0, 1, 0, 0);
}

function addImageToCanvas( img, x, y, width, heigth) {
    context.translate( x+img.width, y);
    context.drawImage( img, 0, 0, width, heigth);
}
