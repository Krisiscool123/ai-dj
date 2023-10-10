function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    model = ml5.poseNet(video,ModelLoaded)

    model.on("pose" , showResult)
}
leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;
lws = 0;
rws = 0;
sn = 0;
function showResult(result){
    console.log(result)
    leftwristx = result[0].pose.leftWrist.x
    leftwristy = result[0].pose.leftWrist.y
    rightwristx = result[0].pose.rightWrist.x
    rightwristy = result[0].pose.rightWrist.y
    lws = result[0].pose.keypoints[9].score
    rws = result[0].pose.keypoints[10].score
}

    

function ModelLoaded(){
    console.log("model is loaded")
}
function preload(){
    happy = loadSound("happy.mp3")
    lala = loadSound("lala.mp3")
    lalala = loadSound("lalala.mp3")
}

function draw(){
    image(video, 0, 0, 600, 500);
    fill("green")
    stroke("green")
    if(lws>0.2){
        circle(leftwristx , leftwristy , 20)
       if( sn==1){
        if(leftwristy > 0 && leftwristy< 100){
            happy.rate(2.5)
            document.getElementById("speed").innerHTML = "speed = 2.5x";
        }
        if(leftwristy > 100 && leftwristy< 200){
            happy.rate(2)
            document.getElementById("speed").innerHTML = "speed = 2x";
        }
        if(leftwristy > 200 && leftwristy< 300){
            happy.rate(1.5)
            document.getElementById("speed").innerHTML = "speed = 1.5x";
        }
        if(leftwristy > 300 && leftwristy< 400){
            happy.rate(1)
            document.getElementById("speed").innerHTML = "speed = 1x";
        }
        if(leftwristy > 400 && leftwristy< 500){
            happy.rate(0.5)
            document.getElementById("speed").innerHTML = "speed = .5x";
        }
       }
       if(sn==2){
        if(leftwristy > 0 && leftwristy< 100){
            lala.rate(2.5)
            document.getElementById("speed").innerHTML = "speed = 2.5x";
        }
        if(leftwristy > 100 && leftwristy< 200){
            lala.rate(2)
            document.getElementById("speed").innerHTML = "speed = 2x";
        }
        if(leftwristy > 200 && leftwristy< 300){
            lala.rate(1.5)
            document.getElementById("speed").innerHTML = "speed = 1.5x";
        }
        if(leftwristy > 300 && leftwristy< 400){
            lala.rate(1)
            document.getElementById("speed").innerHTML = "speed = 1x";
        }
        if(leftwristy > 400 && leftwristy< 500){
            lala.rate(0.5)
            document.getElementById("speed").innerHTML = "speed = .5x";
        }
       }
       if(sn==3){
        if(leftwristy > 0 && leftwristy< 100){
            lalala.rate(2.5)
            document.getElementById("speed").innerHTML = "speed = 2.5x";
        }
        if(leftwristy > 100 && leftwristy< 200){
            lalala.rate(2)
            document.getElementById("speed").innerHTML = "speed = 2x";
        }
        if(leftwristy > 200 && leftwristy< 300){
            lalala.rate(1.5)
            document.getElementById("speed").innerHTML = "speed = 1.5x";
        }
        if(leftwristy > 300 && leftwristy< 400){
            lalala.rate(1)
            document.getElementById("speed").innerHTML = "speed = 1x";
        }
        if(leftwristy > 400 && leftwristy< 500){
            lalala.rate(0.5)
            document.getElementById("speed").innerHTML = "speed = .5x";
        }
       }
        
    }
    if(rws>0.2){
        circle(rightwristx , rightwristy , 20) 
        numrw = Number(rightwristy)
        removeDecimal = Math.floor(numrw)
        volume = removeDecimal/500
        actualvolume = 1-volume
      if(sn == 1){
        happy.setVolume(actualvolume)
      }
      if(sn == 2){
        lala.setVolume(actualvolume)
      }
      if(sn == 3){
        lalala.setVolume(actualvolume)
      }
        document.getElementById("volume").innerHTML = "volume = " + (actualvolume).toFixed(2)
    }
    
   
    
}
function Play(){
    uc = document.getElementById("dropdown").value
    if(uc == "happy"){
        sn = 1;

    }
    if(uc == "lala"){
        sn = 2;
        
    }
    if(uc == "lalala"){
        sn = 3;
        
    }
    if(sn == 1){
        happy.setVolume(0.5)
        happy.rate(1)
        happy.play()
        lala.stop()
        lalala.stop()
    }
    if(sn == 2){
        lala.setVolume(0.5)
        lala.rate(1)
        lala.play()
        happy.stop()
        lalala.stop()
    }
    if(sn == 3){
        lalala.setVolume(0.5)
        lalala.rate(1)
        lalala.play()
        lala.stop()
        happy.stop()
    }
    
}

function Stop(){
    lalala.stop()
    happy.stop()
    lala.stop()
}
