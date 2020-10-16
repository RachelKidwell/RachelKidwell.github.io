function setup() {
    createCanvas(500, 500);  // height , width
      background(20); //0..255 shades of gray
  }
  
  function draw() {
    fill(150);
    stroke(255);
    rect(20,20,130);   // x, y, size
    point(120,120);
    // point(mouseX, mouseY);
    
    fill(255);
    stroke(0);
    ellipse(mouseX,mouseY,50);
  }