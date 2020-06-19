// Setting all vars
const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// Ball properties
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4
}
// Drawing ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
    ctx.fillStyle = '#0095dd'
    ctx.fill();
    ctx.closePath();
}

drawBall();
// Event handlers to show rules
rulesBtn.addEventListener('click', () => 
    rules.classList.add('show'));
closeBtn.addEventListener('click', () => 
    rules.classList.remove('show'));