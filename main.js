noseX = 0;
noseY = 0;

function preload(){
clown_nose = loadImage("https://i.postimg.cc/bY7z0Vq1/clown-nose-img.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-10;
        noseY = results[0].pose.nose.y-10;
        console.log("nosex = " + noseX);
        console.log("nosey = " + noseY);
    }
}

function modelLoaded(){
    console.log("PoseNet is Iniatalized");
}

function draw(){
image(video, 0, 0, 300, 300);
image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save(ClownNoseImage.png);
}