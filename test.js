var test = document.getElementById("index");
var slider = document.getElementById("myRange");
var blue = document.getElementById("circle");
var black = document.getElementById("circle2");
var score = document.getElementById("score");
var counter = 0;
var red = document.getElementById("ouch");
var pageTimer = document.getElementById("time");
var start = document.getElementById("start");
var compare;
var ouchCompare;
var blackValue;
var redValue;
var blueValue;
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
    timer = 15; 
     start.style.animation = "";
    
    
    slider.oninput = function(){
	
	 if (Math.abs(blue.getAttribute("r") - black.getAttribute("r")) <=5) {
        score.innerHTML = counter++;
		blueValue = blue.getAttribute("r");
        blackValue = Math.floor(Math.random() * (135 - 2) ) + 2;
        black.setAttribute("r", blackValue);
        
        // create red ring
		
		if(blackValue > blueValue){
            blackValue += 20;
			redValue = Math.floor(Math.random() * (135 - blackValue) ) + blackValue;
			red.setAttribute("r", redValue);
		}
		
		if(blackValue < blueValue){;
			redValue = Math.floor(Math.random() * (150 - blueValue) ) + blueValue;
			red.setAttribute("r", redValue);
		}
    }
    else{
    	blue.setAttribute("r", this.value);
    }
    if (Math.abs(blue.getAttribute("r") - red.getAttribute("r")) <= 2) {
        timer = 1;
    }
	
	
}

});



function reset(){
    
    blue.setAttribute("r", 135);
    black.setAttribute("r", 1);
    red.setAttribute("r", 0);
    slider.oninput = null;
    start.style.animation = "playagain 5s  linear 0s infinite";
    
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