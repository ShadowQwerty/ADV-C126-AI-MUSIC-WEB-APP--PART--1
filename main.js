function setup() 
{
  CANVAS= createCanvas(600,500)
  poses=ml5.poseNet(video,Modred)
  CANVAS.position(600,200)
}

function draw() {
 background("black")
}