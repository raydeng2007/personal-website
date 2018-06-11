
$(document).ready(function() {
    typingEffect();
});

function cursorAnimation() {
	$('#cursor').animate({
	    opacity: 0
	}, 'fast', 'swing').animate({
	    opacity: 1
	}, 'fast', 'swing');
}

const words = ["Raymond", "Data Scientist", "Developer"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('word').innerHTML += word.shift();
        } else {
            clearTimeout(timer);
            deletingEffect();
            return false;
        };
        timer = setTimeout(loopTyping, 300);
    };
    loopTyping();
};

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('word').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };
            clearTimeout(timer);
            typingEffect();
            return false;
        };
        timer = setTimeout(loopDeleting, 100);
    };
    loopDeleting();
};

typingEffect();