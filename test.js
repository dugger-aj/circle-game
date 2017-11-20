var test = document.getElementById("index");
var slider = document.getElementById("myRange");
var blue = document.getElementById("circle");
var white = document.getElementById("circle2");
var score = document.getElementById("score");
var counter = 0;
var red = document.getElementById("ouch");
var pageTimer = document.getElementById("time");
var start = document.getElementById("start");
var menu = document.getElementById("menu");
var menuIcon = document.getElementById("menuIcon");
var play = document.getElementById("play");
var scores = document.getElementById("scores");
var redValueTest = document.getElementById("redValueTest");
var compare;
var ouchCompare;
var whiteValue = 0;
var redValue = 0;
var blueValue = 0;
var timer;
var myVar;


function loader(){
    myVar = setTimeout(showPage, 2000);
    document.getElementById("main").style.display = "none";
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("main").style.display = "block";
}

start.addEventListener("click",function(){
    go();
    counter=0;
    score.innerHTML = counter;
    timer = 30; 
    start.style.animation = "";
    
    
    slider.oninput = function(){
	
	 // if blue = white
	 if (Math.abs(blue.getAttribute("r") - white.getAttribute("r")) <=5) {
		//red.setAttribute("r", 0);
        score.innerHTML = counter++;
		blueValue = blue.getAttribute("r");
        whiteValue = Math.floor(Math.random() * (135 - 2) ) + 2;
        white.setAttribute("r", whiteValue);
		
		// setting the red circle
		// when the white circle is above the blue 
		if(whiteValue > blueValue && blueValue > 15){
			redValue = Math.floor(Math.random() * ((parseInt(blueValue)-10) - 1) ) + 1;
			red.setAttribute("r", redValue);
		}
		
		//when blue is above white
		if(whiteValue < blueValue){
			redValue = Math.floor(Math.random() * (145 - parseInt(blueValue)+6) + parseInt(blueValue)+6);
			red.setAttribute("r", redValue);
		}
    }
    else{
    	blue.setAttribute("r", this.value);
    }
	
	// if blue = red	
    if (Math.abs(blue.getAttribute("r") - red.getAttribute("r")) <= 3) {
        timer = 0;
    }
	
	
}

});



function reset(){
    
    blue.setAttribute("r", 135);
    white.setAttribute("r", 1);
    red.setAttribute("r", 500);
    slider.oninput = null;
    start.style.animation = "playagain 5s  linear 0s 5";
    
}

function go (){ 
    var x = setInterval(function() {
        timer--;
        start.innerHTML = timer;
        if (timer < 6){
            document.body.style.animation = "done 5s  linear 0s infinite";
        }
        if (timer < 0) {
            clearInterval(x); 
            stop();
        }
    }, 1000);
    
    
}

function stop(){
    timer = 0;
    start.innerHTML = "Game Over - Play Again?";
    document.body.style.animation = "";
    reset(); 
    
}

function showMenu(){
    
    if(menuIcon.className === "white"){
		menuIcon.className = "white";
	}
	else{
		menuIcon.className = "white"
	}
    
    if(menu.className == "show"){
        menu.className = "hide";
    }
    else{
        menu.className = "show";
    }
    
}

function showPlay(){
     if(play.className === "block"){
		play.className = "none";
	}
	else{
		play.className = "block"
	}
}

function showScores(){
     if(scores.className === "block"){
		scores.className = "none";
	}
	else{
		scores.className = "block"
	}
}