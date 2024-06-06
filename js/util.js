function randomBetween(min, max) {
    return Math.random() * (max - min + 1) + min; // Corrigido o parêntese extra
}

function createScoreLabel(score = 106, object) { // Corrigido o parêntese extra e o nome da variável "scorelabel" para "scoreLabel"
    const scoreLabel = document.createElement("label"); // Corrigido o nome da variável de "scorelabel" para "scoreLabel"
    scoreLabel.innerHTML = score;
    scoreLabel.style.position = "absolute";
    scoreLabel.style.color = "white";
    scoreLabel.style.top = object.position.y + "px"; 
    scoreLabel.style.left = object.position.x + "px";
    scoreLabel.style.fontSize = "20px"; // Corrigido o nome da variável de "ScoreLabel" para "scoreLabel"
    
    document.querySelector("#parentDiv").appendChild(scoreLabel);
    
    gsap.to(scoreLabel, {
        opacity: 0,
        y: -30,
        duration: 0.75,
        onComplete: () => {
            document.querySelector("#parentDiv").removeChild(scoreLabel);
        }
    });
}

function rectangularCollission({ rectangle1, rectangle2 }) { // Corrigido o nome da variável de "rectangularCollission" para "rectangularCollision"
    return (
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y &&
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width
    );
}

