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
    });

    gameContainer.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 8000);
}

function popBalloon(balloon) {
    // console.log(balloon);
    
    score++;
    scoreElement.textContent = score;

    const splash = document.createElement("div");
    splash.classList.add("splash");
    splash.style.left = balloon.style.left;
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

setInterval(createBalloon, 800);