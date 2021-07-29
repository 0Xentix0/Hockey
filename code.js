

  
var start = createSprite(50, 200, 100, 300);
start.shapeColor = "lightGreen";
var finish = createSprite(350, 200, 100, 300);
finish.shapeColor = "lightGreen";
//group1

   var w1 = createSprite(50, 50, 100, 5);
var w2 = createSprite(100, 175, 5, 250);
var w3 = createSprite(50, 350, 200, 5);
var w4 = createSprite(100, 325, 5, 50);
w4.shapeColor = "Yellow";
var w9 = createSprite(175, 50, 150, 5);
//group2
var w10 = createSprite(225, 350, 150, 5);
var w5 = createSprite(325, 50, 150, 5);
var w6 = createSprite(300, 75, 5, 50);
w6.shapeColor = "Yellow";
var w7 = createSprite(300, 225, 5, 250);
var w8 = createSprite(350, 350, 100, 5);
//Horizontal Balls
var b1 = createSprite(275, 125, 15, 15);
b1.velocityX = -7;
b1.setAnimation("ball");
b1.scale = .05;
var b2 = createSprite(125, 175, 15, 15);
b2.velocityX = 7;
b2.setAnimation("ball");
b2.scale = .05;
var b3 = createSprite(275, 225, 15, 15);
b3.velocityX = -9;
b3.setAnimation("ball");
b3.scale = .05;
var b4 = createSprite(125, 275, 15, 15);
b4.velocityX = -7;
b4.setAnimation("ball");
b4.scale = .05;
var b5 = createSprite(125, 75, 15, 15);
b5.velocityX = -7;
b5.setAnimation("ball");
b5.scale = .05;
var b6 = createSprite(275, 325, 15, 15);
b6.velocityX = 7;
b6.setAnimation("ball");
b6.scale = .05;
//playerBall
var playerBall = createSprite(35, 215, 20, 20);
playerBall.shapeColor = "Teal";
var Deaths = 0;
   gameState="Serve";
function draw() {
  background("linen");
  fill("Teal");
  textSize(18);
  text("Deaths:" + Deaths , 200, 30);
  drawSprites();
  b1.bounceOff(w2);
  b1.bounceOff(w7);
  b2.bounceOff(w2);
  b2.bounceOff(w7);
  b3.bounceOff(w2);
  b3.bounceOff(w7);
  b4.bounceOff(w2);
  b4.bounceOff(w7);
  b5.bounceOff(w2);
  b5.bounceOff(w6);
  b6.bounceOff(w4);
  b6.bounceOff(w7);
// playerBall Boundaries
playerBall.bounceOff(w1);
 playerBall.bounceOff(w2);
 playerBall.bounceOff(w3);
 playerBall.bounceOff(w5);
 playerBall.bounceOff(w7);
 playerBall.bounceOff(w8);
  playerBall.bounceOff(w9);
  playerBall.bounceOff(w10);
  createEdgeSprites();
  playerBall.bounceOff(rightEdge);
  playerBall.bounceOff(leftEdge);
  if (playerBall.isTouching(b1)) {
    playSound("assets/category_achievements/melodic_win_4.mp3");
    playerBall.x = 50;
    playerBall.y = 220;
 Deaths=Deaths+1;}
 if (playerBall.isTouching(b2)) {
    playSound("assets/category_poof/puzzle_game_poof_b_01.mp3");
    playerBall.x = 50;
    playerBall.y = 220;
 Deaths=Deaths+1;}
 if (playerBall.isTouching(b3)) {
    playSound("assets/category_poof/puzzle_game_poof_b_01.mp3");
    playerBall.x = 50;
    playerBall.y = 220;
 Deaths=Deaths+1;}
 if (playerBall.isTouching(b4)) {
    playSound("assets/category_poof/puzzle_game_poof_b_01.mp3");
    playerBall.x = 50;
    playerBall.y = 220;
 Deaths=Deaths+1;}
 if (playerBall.isTouching(b5)) {
     playSound("assets/category_poof/puzzle_game_poof_b_01.mp3");
     playerBall.x = 50;
    playerBall.y = 220;
 Deaths=Deaths+1;}
 if (playerBall.isTouching(b6)) {
  playSound("assets/category_poof/puzzle_game_poof_b_01.mp3");
playerBall.x = 50;
    playerBall.y = 220;
    Deaths=Deaths+1;}
  if (playerBall.isTouching(finish)) {
    fill("Teal");
    textSize(20);
    text("Game Over You Win", 110, 150);
  }
  if (playerBall.isTouching(w6)) {
    playSound("assets/category_alerts/vibrant_game_courious_alert_3_winner.mp3");
  }
 if (keyDown("up")) {
   playerBall.y=playerBall.y-5
  }
  if (keyDown("down")) {
     playerBall.y=playerBall.y+5
  }
  if (keyDown("left")) {
     playerBall.x=playerBall.x-5
  }
  if (keyDown("right")) {
     playerBall.x=playerBall.x+5
  }

}

 

