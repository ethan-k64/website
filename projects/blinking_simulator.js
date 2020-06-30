// Global Variables
let blinks = 0;
let col;
let stick;

function setup() {
  const cnv = createCanvas(400, 400);
  cnv.position(displayWidth / 2 - 200, 100);
  
  stick = select("#stick");
  stick.style("position", "absolute");
  stick.style("top", "200");
  stick.style("left", displayWidth / 2 - 100);
  
  col = color(255);
}

function draw() {
  background(col);

  fill(0);
  textSize(50);
  text(`Blinks:${blinks}`, 15, 340);

  fill("grey");
  textSize(20);
  text("Version: 2.0.0", 18, 380);

  fill(255);
  rect(25, 20, 45, 45);

  fill(255, 0, 0);
  rect(100, 20, 45, 45);

  fill(0, 0, 255);
  rect(175, 20, 45, 45);
  
  messages();
  
  // Blink Detection
  if (mouseIsPressed) {
    document.getElementById("stick").src = "./assets/blink.gif";
  } else {
    document.getElementById("stick").src = "./assets/stick.gif";
  }
}

function mousePressed() {
  blinks++;

  checkBackground();
}

function checkBackground() {
  if (mouseX < 70 && mouseX > 25 && mouseY < 68 && mouseY > 20) {
    col = color(255);
  } else if (mouseX < 145 && mouseX > 100 && mouseY < 68 && mouseY > 20) {
    col = color(255, 0, 0);
  } else if (mouseX < 220 && mouseX > 175 && mouseY < 68 && mouseY > 20) {
    col = color(0, 0, 255);
  }
}

function messages() {
  if (blinks > 49 && blinks < 60) {
    fill("gray");
    rect(275, 85, 73, 73);
    textSize(17);
    fill("red");
    text("You are", 280, 105);
    text("officialy", 280, 125);
    text("Ethan :-)", 280, 145);
  } else if (blinks > 149 && blinks < 160) {
    fill("gray");
    rect(275, 75, 90, 90);
    textSize(17);
    fill("red");
    text("You are", 280, 105);
    text("officialy", 280, 125);
    text("John :-)", 280, 145);
  } else if (blinks > 299 && blinks < 310) {
    fill("gray");
    rect(275, 75, 90, 90);
    textSize(17);
    fill("red");
    text("You are", 280, 105);
    text("officialy", 280, 125);
    text("Mark :-)", 280, 145);
  } else if (blinks > 499) {
    fill("gray");
    rect(278, 85, 70, 70);
    textSize(17);
    fill("red");
    text("You Win!", 280, 125);
  }
}
