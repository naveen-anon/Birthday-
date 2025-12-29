// Typing love message
const text = `My Love,

From the moment you came into my life,
everything started feeling right.

Your smile is my peace.
Your voice is my comfort.
Your love is my home.

On your birthday, I want you to know —
you are not special just today,
you are special to me every single day.

Happy Birthday, my wife.
I love you endlessly ❤️`;

let index = 0;
const speed = 45;
const messageBox = document.getElementById("message");

function typeMessage() {
    if (index < text.length) {
        messageBox.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeMessage, speed);
    }
}
typeMessage();

// Music play on first click
document.body.addEventListener('click', () => {
    document.getElementById('music').play();
}, { once: true });

// Floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (18 + Math.random() * 25) + 'px';
    heart.style.animationDuration = (5 + Math.random() * 5) + 's';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 9000);
}

setInterval(createHeart, 400);
