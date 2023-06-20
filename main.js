NoseX=0;
NoseY=0;

function preload(){
clown_nose= loadImage('https://i.postimg.cc/cCvMXH5b/th-removebg-preview.png');
}

function setup(){
    canvas= createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,300,300); 
    image(clown_nose,NoseX,NoseY,100,100);  
}

function take_snapshot(){
    save("filterImage.png");
}

function modelLoaded(){
    console.log('poseNet model initiated!');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        NoseX=results[0].pose.nose.x-50;
        NoseY=results[0].pose.nose.y-35;
        console.log("results nose x="+NoseX);
        console.log("results nose y="+NoseY);
    }
}