function setup() {
    createCanvas(720, 400);
    background(230);
    strokeWeight(2);
  }
  
  function draw() {
    if (mouseIsPressed) {
      stroke(255,255,0);
       line(mouseX -66, mouseY, mouseX + 66, mouseY);
      stroke(255,200,0);
      line(mouseX, mouseY - 66, mouseX, mouseY + 66);
    } else {
      stroke(0, 134, 255);
    }
    line(mouseX - 22, mouseY, mouseX + 22, mouseY);
    stroke(255,0,150);
    line(mouseX, mouseY - 22, mouseX, mouseY + 22);
    
  }