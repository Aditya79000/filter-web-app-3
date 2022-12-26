noseX=0;
noseY=0;

function preload(){
    mustache_nose = loadImage('https://i.postimg.cc/k4TkzNR4/mustache-student-math-favorite-for-friday-the-the-1.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-49;
        noseY = results[0].pose.nose.y+5;
    }
}

function draw(){
    image(video,0,0,300,300);
    image(mustache_nose, noseX, noseY, 100, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}