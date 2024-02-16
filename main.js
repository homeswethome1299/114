noseX = 0;
noseY = 0;
function preload()
{
clownNose = loadImage("https://i.postimg.cc/Kv2VtT4T/scary-removebg-preview.png");
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide()

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
console.log("PoseNet model is initialised");
}

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x =" + noseX);
    console.log("nose y =" + noseY);
}
}

function draw()
{
  image(video,0,0,300,300);
  image(clownNose,noseX-15,noseY-15,30,30)
}
function take_snapshot()
{
    save("meh.png");
}