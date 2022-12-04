function countDownTimer(){
    //this function will make the timer gown down from 50 to 0 by incriments of 5 seconds
    console.log("countdownTimer() started");
    var currentTime = 50;
    document.getElementById("timeText").innerHTML = currentTime + " seconds";
    //45 second time set
    setTimeout(function(){
        currentTime = currentTime - 5;
        console.log(currentTime);
        document.getElementById("timeText").innerHTML = currentTime + " seconds";
    },5000)
    //40 second time set
    setTimeout(function(){
        currentTime = currentTime - 5;
        console.log(currentTime);
        document.getElementById("timeText").innerHTML = currentTime + " seconds";
    },10000)
    //35 second time set
    setTimeout(function(){
        currentTime = currentTime - 5;
        console.log(currentTime);
        document.getElementById("timeText").innerHTML = currentTime + " seconds";
    },15000)
    //30 second time set
    setTimeout(function(){
        currentTime = currentTime - 5;
        console.log(currentTime);
        document.getElementById("timeText").innerHTML = currentTime + " seconds";
    },20000)
    //25 second time set
    setTimeout(function(){
        currentTime = currentTime - 5;
        console.log(currentTime);
        document.getElementById("timeText").innerHTML = currentTime + " seconds";
    },25000)
    //20 second time set
    setTimeout(function(){
        currentTime = currentTime - 5;
        console.log(currentTime);
        document.getElementById("timeText").innerHTML = currentTime + " seconds";
    },30000)
    //15 second time set
    setTimeout(function(){
        currentTime = currentTime - 5;
        console.log(currentTime);
        document.getElementById("timeText").innerHTML = currentTime + " seconds";
    },35000)
    //10 second time set
    setTimeout(function(){
        currentTime = currentTime - 5;
        console.log(currentTime);
        document.getElementById("timeText").innerHTML = currentTime + " seconds";
    },40000)
    //5 second time set
    setTimeout(function(){
        currentTime = currentTime - 5;
        console.log(currentTime);
        document.getElementById("timeText").innerHTML = currentTime + " seconds";
    },45000)
    //set text to say blastoff
    setTimeout(function(){
        currentTime = currentTime - 5;
        console.log(currentTime);
        document.getElementById("timeText").innerHTML = "Blastoff!";
    },50000)
    
}