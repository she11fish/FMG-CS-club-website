let paddle1, paddle2;
let score1, score2;
let score3;
let score4;
let ball;
let ARCfont;

function preload() {
  //ARCfont = loadFont("fonts/Emulogic-zrEw.ttf");
}

function setup() {
  createCanvas(512, 256);

  paddle1 = {
    x: 24,
    y: 108,
    w: 8,
    h: 48,
    direction: 1,
    moving: false,
    speed: 5,
  };

  paddle2 = {
    x: 488,
    y: 108,
    w: 8,
    h: 48,
    direction: 1,
    moving: false,
    speed: 5,
  };

  ball = {
    x: 236,
    y: 128,
    d: 8,
    xvel: 3,
    yvel: 3,
  };

  score1 = 0;
  score2 = 0;
  score3 = 0;
  score4 = 0;
}

function draw() {
  background(55);
  textSize(32);
//   textFont(ARCfont);
  fill(255);
  text(score3, 178, 50);
  text(score2, 210, 50);
  text(score4, 272, 50);
  text(score1, 304, 50);
  rect(paddle1.x, paddle1.y, paddle1.w, paddle1.h);
  rect(paddle2.x, paddle2.y, paddle2.w, paddle2.h);
  circle(ball.x, ball.y, ball.d);
  MiddleLine();

  if (paddle2.moving) {
    paddle2.y = paddle2.y + paddle2.speed * paddle2.direction;
  }

  if (paddle1.moving) {
    paddle1.y = paddle1.y + paddle1.speed * paddle1.direction;
  }

  ball.y = ball.y + ball.yvel;
  ball.x = ball.x + ball.xvel;

  paddle1.y = ball.y * 0.7;

  if (ball.y > height - 4) {
    ball.yvel = -3;
  } else if (ball.y < 0) ball.yvel = 3;

  if (ball.x > width - 4) {
    ball.y = height / 2;
    ball.x = width / 2;
    score2 = score2 + 1;
  } else if (ball.x < 0) {
    ball.y = height / 2;
    ball.x = width / 2;
    score1 = score1 + 1;
  }

  if (paddle2.y < 0 ) {
    paddle2.y = 0
  } else if (paddle2.y + 48 > 256 ) {
    paddle2.y = 208
  }
  
  if (ball.y - 4 < paddle1.y + paddle1.h && ball.y + 4 > paddle1.y) {
    if (ball.x + 4 > paddle1.x && ball.x - 4 < paddle1.x + paddle1.w) {
      ball.xvel = 3;
    }
  }

  if (ball.y - 4 < paddle2.y + paddle2.h && ball.y + 4 > paddle2.y) {
    if (ball.x + 4 > paddle2.x && ball.x - 4 < paddle2.x + paddle2.w) {
      ball.xvel = -3;
    }
  }

  if (score2 > 9) {
    score2 = 0;
    score3 = score3 + 1;
  }

  if (score1 > 9) {
    score1 = 0;
    score4 = score4 + 1;
  }
}

function MiddleLine() {
  rect(256, 14, 7, 30);
  rect(256, 54, 7, 30);
  rect(256, 94, 7, 30);
  rect(256, 134, 7, 30);
  rect(256, 174, 7, 30);
  rect(256, 214, 7, 30);
}

function keyPressed(event) {
  if (event.keyCode == 87) {
    paddle2.moving = true;
    paddle2.direction = -1;
  } else if (event.keyCode == 83) {
    paddle2.moving = true;
    paddle2.direction = 1;
  }
}

function keyReleased(event) {
  if (event.keyCode == 87) {
    paddle2.moving = false;
  } else if (event.keyCode == 83) {
    paddle2.moving = false;
  }
}
