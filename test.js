var html = document.getElementsByTagName("html");
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
var demo = document.getElementById("demo");
var scores = document.getElementById("scores");
var redValueTest = document.getElementById("redValueTest");
var highScore = document.getElementById("highScore");
var newHighScoreValue = document.getElementById("newHighScoreValue");
var newHighScore = document.getElementById("newHighScore");
var about = document.getElementById("about");
var themes = document.getElementById("themes");
var compare;
var ouchCompare;
var whiteValue = 0;
var redValue = 0;
var blueValue = 0;
var timer;
var myVar;
var startStuffVar;
var countDownVar;
var testing;

//ajax call
var colors;
var xhr = new XMLHttpRequest();
xhr.open('GET', "colors.json", true);
xhr.responseType = 'text';
xhr.send();

xhr.onload = function () {
    if (xhr.status === 200) {
        colors = JSON.parse(xhr.responseText);
        console.log(colors);
        enterData(0);
    } 
} 
//end ajax call


if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
	

function loader(){
	testing = setTimeout(function(){
		window.scrollTo(0,1);
	}, 100);
    myVar = setTimeout(showPage, 2000);
    
	highScore.innerHTML = localStorage.getItem("highScore");
	
	if(localStorage.getItem("circleColor") != undefined){
		blue.setAttribute("stroke", localStorage.getItem("circleColor"));
	}
	
	html[0].style.backgroundColor = localStorage.getItem("backgroundColor");
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("main").style.display = "block";
}

start.addEventListener("click",function(){
	
	startStuffVar = setTimeout(startStuff, 4000);
	start.disabled = true;
	var countDown = 4;
	start.style.animation = "";
	newHighScore.style.animation = "";
	newHighScore.className = "hide";
	countDownVar = setInterval(function() {
        countDown--;
        start.innerHTML = "Game will start in: " + countDown;
        if (countDown == 0) {
			start.innerHTML = "GO!";
            clearInterval(countDownVar); 
        }
    }, 1000);
	
    

});

function startStuff(){
	go();
    counter=0;
    score.innerHTML = counter;
    timer = 30; 
    
    
    
    
    slider.oninput = function(){
	
		 // if blue = white
		 if (Math.abs(blue.getAttribute("r") - white.getAttribute("r")) <=5) {
			red.setAttribute("r", 500);
			score.innerHTML = counter++;
			blueValue = parseInt(blue.getAttribute("r"));
			whiteValue = parseInt(Math.floor(Math.random() * (135 - 2) ) + 2);
			white.setAttribute("r", whiteValue);
			
			// setting the red circle
			// when the white circle is above the blue 
			if(whiteValue > blueValue && blueValue > 25){
				var tempBlue = parseInt(blueValue) -25;
				redValue = Math.floor(Math.random() * (tempBlue - 1)) + 1;			
				red.setAttribute("r", redValue);
			}
			
			//when blue is above white
			if(whiteValue < blueValue && blueValue < 110){
				var tempBlue = parseInt(blueValue)+25;
				redValue = Math.floor(Math.random() * (135 - tempBlue)) + tempBlue;
				
				red.setAttribute("r", redValue);
			}
		}
		else{
			blue.setAttribute("r", this.value);
		}
		
		// if blue = red	
		if (Math.abs(blue.getAttribute("r") - red.getAttribute("r")) <= 5) {
			timer = 0;
		}
	
	
	}
}




function reset(){
    
    blue.setAttribute("r", 135);
    white.setAttribute("r", 1);
    red.setAttribute("r", 500);
    
    start.style.animation = "playagain 5s  linear 0s 5";
	start.disabled = false;
	
    
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
    slider.oninput = null;
    start.innerHTML = "Game Over - Play Again?";
    document.body.style.animation = "";
	
	if(parseInt(localStorage.highScore) < counter -1 || localStorage.highScore === undefined)
	{
		localStorage.setItem("highScore",counter -1);
		newHighScore.className = "show";
		newHighScore.style.animation = "spin 1s linear";
        newHighScoreValue.innerHTML = counter - 1;
        highScore.innerHTML = localStorage.getItem("highScore");
	}
	
	
    reset();
    
}

function showMenu(){
    
    if(menuIcon.className === "white"){
		menuIcon.className = "black";
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
	
	newHighScore.className = "hide";
    
}

function showPlay(){
     if(play.className === "block"){
		play.className = "none";
	}
	else{
		play.className = "block"
	}
	
	if(demo.className === "block"){
		demo.className = "none";
	}
	else{
		demo.className = "block"
	}
}

function showScores(){
     if(scores.className == "block"){
		scores.className = "none";
	}
	else{
		scores.className = "block"
	}
}

function showThemes(){
     if(themes.className == "block"){
		themes.className = "none";
	}
	else{
		themes.className = "block"
	}
}


function showAbout(){
     if(about.className == "block"){
		about.className = "none";
	}
	else{
		about.className = "block"
	}
}

function theme(x){
	blue.setAttribute("stroke", colors[x].circleColor);
	html[0].style.backgroundColor = colors[x].background;
	localStorage.setItem("circleColor", colors[x].circleColor);
	localStorage.setItem("backgroundColor", colors[x].background);
}



} else {
    alert("Browser does not support local storage");
}