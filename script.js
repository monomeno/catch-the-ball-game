const player = document.getElementById("player");
const ball = document.getElementById("ball");
const scoreDisplay = document.getElementById("score");

let playerX = 180;
let score = 0;
let ballX = Math.random() * 370;
let ballY = 0;
let ballSpeed = 2;

// تحريك اللاعب بالأسهم
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && playerX > 0) {
    playerX -= 20;
  } else if (e.key === "ArrowRight" && playerX < 360) {
    playerX += 20;
  }
  player.style.left = playerX + "px";
});

// تحريك الكرة للأسفل
function dropBall() {
  ballY += ballSpeed;
  if (ballY > 370) {
    // التحقق إذا التقط اللاعب الكرة
    if (ballX >= playerX && ballX <= playerX + 40) {
      score++;
      scoreDisplay.textContent = "Score: " + score;
      ballSpeed += 0.5;
    }
    // إعادة تعيين موضع الكرة
    ballY = 0;
    ballX = Math.random() * 370;
  }
  ball.style.top = ballY + "px";
  ball.style.left = ballX + "px";
  requestAnimationFrame(dropBall);
}

dropBall();
