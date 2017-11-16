var test = document.getElementById("index");
var slider = document.getElementById("myRange");
var blue = document.getElementById("circle");
var black = document.getElementById("circle2");
var score = document.getElementById("score");
var counter = 0;
var red = document.getElementById("ouch");
var compare;
var ouchCompare;
var blackValue;
var redValue;
var blueValue;

slider.oninput = function(){
	
	 if (blue.getAttribute("r") == black.getAttribute("r")) {
        score.innerHTML = counter++;
		blueValue = blue.getAttribute("r");
        blackValue = Math.floor(Math.random() * (135 - 2) ) + 2;
        black.setAttribute("r", blackValue);
        
        // create red ring
		
		if(blackValue > blueValue){
			redValue = Math.floor(Math.random() * (135 - blackValue) ) + blackValue;
			red.setAttribute("r", redValue);
		}
		
		if(blackValue < blueValue){
			console.log(blueValue);
			redValue = Math.floor(Math.random() * (150 - blueValue) ) + blueValue;
			red.setAttribute("r", redValue);
		}
    }
    else{
    	blue.setAttribute("r", this.value);
    }
    if (blue.getAttribute("r") === red.getAttribute("r")) {
    	alert("Game Over!");
    }
	
	
}