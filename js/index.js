function showMenu() {
	var x = document.getElementById("nav");
	
	if(x.className === "theNav"){
		x.className = "theNavShow";
	}
	else{
		x.className = "theNav"
	}
}