const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const bird = {
    x: 80,
    y: canvas.height / 2,
    width: 34,
    height: 24,
    gravity: 0.5,
    lift: -8,
    velocity: 0
};

const stacks = [];
const stackWidth = 60;
const gapHeight = 150;
let frameCount = 0;
let score = 0;
let gameOver = false;

function drawBird() {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height);
}

function SmokeStack(x) {
    const topHeight = Math.random() * (canvas.height - gapHeight - 40) + 20;
    this.x = x;
    this.top = topHeight;
    this.bottom = canvas.height - topHeight - gapHeight;
    this.w = stackWidth;
    this.speed = 2;

    this.draw = function() {
        ctx.fillStyle = '#666';
        ctx.fillRect(this.x, 0, this.w, this.top);
        ctx.fillRect(this.x, canvas.height - this.bottom, this.w, this.bottom);
    };

    this.update = function() {
        this.x -= this.speed;
    };

    this.offscreen = function() {
        return this.x < -this.w;
    };

    this.hits = function(b) {
        if (b.y < this.top || b.y + b.height > canvas.height - this.bottom) {
            if (b.x + b.width > this.x && b.x < this.x + this.w) {
                return true;
            }
        }
        return false;
    };
}

function drawScore() {
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText('Score: ' + score, 10, 25);
}

function update() {
    if (gameOver) return;

    bird.velocity += bird.gravity;
    bird.y += bird.velocity;

    if (bird.y + bird.height > canvas.height) {
        bird.y = canvas.height - bird.height;
        bird.velocity = 0;
        gameOver = true;
    }
    if (bird.y < 0) {
        bird.y = 0;
        bird.velocity = 0;
    }

    if (frameCount % 100 === 0) {
        stacks.push(new SmokeStack(canvas.width));
    }
    for (let i = stacks.length - 1; i >= 0; i--) {
        const s = stacks[i];
        s.update();
        if (s.hits(bird)) {
            gameOver = true;
        }
        if (s.x + s.w === bird.x) {
            score++;
        }
        if (s.offscreen()) {
            stacks.splice(i, 1);
        }
    }
    frameCount++;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const s of stacks) {
        s.draw();
    }

    drawBird();
    drawScore();

    if (gameOver) {
        ctx.fillStyle = 'red';
        ctx.font = '40px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2);
    }
}

function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
}

window.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        bird.velocity = bird.lift;
        if (gameOver) location.reload();
    }
});

canvas.addEventListener('mousedown', function() {
    bird.velocity = bird.lift;
    if (gameOver) location.reload();
});

loop();
