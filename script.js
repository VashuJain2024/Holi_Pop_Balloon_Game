const gameContainer = document.getElementById("game-container");
const scoreElement = document.getElementById("score");
let score = 0;

function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");

    balloon.style.left = Math.random() * 80 + "vw";
    balloon.style.backgroundColor = getRandomColor();
    balloon.style.animationDuration = Math.random() * 3 + 2 + "s"; // Different speeds

    balloon.addEventListener("click", () => {
        popBalloon(balloon);
        playSound();
    });

    gameContainer.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 8000);
}

function popBalloon(balloon) {
    // console.log(balloon);
    const balloonRect = balloon.getBoundingClientRect();
    const bottomPosition = window.innerHeight - balloonRect.bottom;
    // console.log("Balloon Bottom Position:", bottomPosition + "px");

    score++;
    scoreElement.textContent = score;

    const splash = document.createElement("div");
    splash.classList.add("splash");
    splash.style.left = balloon.style.left;
    splash.style.bottom = bottomPosition + 5 + "px";
    splash.style.background = `radial-gradient(circle, ${balloon.style.backgroundColor}, transparent)`;

    balloon.remove();
    gameContainer.appendChild(splash);

    setTimeout(() => {
        splash.remove();
    }, 400);
}

function getRandomColor() {
    const colors = ["#FF0000", "#FF8C00", "#FFD700", "#008000", "#00CED1", "#8A2BE2", "#FF69B4"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function playSound() {
    let audio = document.getElementById("myAudio");
    audio.playbackRate = 5; // Increase speed (1.0 is normal, 2.0 is double speed)
    audio.play();
}

setInterval(createBalloon, 800);