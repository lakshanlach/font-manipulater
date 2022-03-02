nosex=0
nosey=0
difference=0
leftwrist=0
rightwrist=0

function setup() {
    video = createCapture(VIDEO)
    video.size(550 , 500)
    canvas = createCanvas(550 , 550)
    canvas.position(560 , 150)
  
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function draw() {
    background("#808080")

    document.getElementById("width").innerHTML= difference + " px"
    fill("pink")
    text("lakshan", nosex , nosey)
    textSize(difference)
}
  
  function modelLoaded() {
    console.log("model loaded")
}
  
function gotPoses(results)
{
   if(results.length > 0)
    {
      console.log(results)
      nosex = results[0].pose.nose.x
      nosey = results[0].pose.nose.y
      leftwrist = results[0].pose.leftWrist.x
      rightwrist = results[0].pose.rightWrist.x 
      difference = floor(leftwrist - rightwrist)
    }
}
  