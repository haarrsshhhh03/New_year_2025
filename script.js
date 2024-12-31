// Countdown Logic
const countdownElement = document.getElementById("countdown");
const newYear = new Date("January 1, 2025 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = newYear - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = "🎉 It's 2025! 🎉";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Confetti Animation
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiColors = ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56", "#2ecc71"];
const confettiParticles = Array.from({ length: 100 }).map(() => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 4 + 1,
  dx: Math.random() * 2 - 1,
  dy: Math.random() * 3 + 1,
  color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
}));

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettiParticles.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  });
}

function updateConfetti() {
  confettiParticles.forEach((p) => {
    p.x += p.dx;
    p.y += p.dy;
    if (p.y > canvas.height) p.y = 0;
    if (p.x > canvas.width) p.x = 0;
    if (p.x < 0) p.x = canvas.width;
  });
}

function animateConfetti() {
  drawConfetti();
  updateConfetti();
  requestAnimationFrame(animateConfetti);
}

animateConfetti();
