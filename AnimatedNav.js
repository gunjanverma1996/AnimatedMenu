
function myFunction() {
	var bool = false;	
	document.getElementById("menu_close").onclick = function() {close()};		
	function close() {
		var element = document.getElementById("menu_close");
		var e1 = document.getElementById("about");
		if(!bool) {
			element.classList.add("change");
			e1.classList.add("link");
			bool=true;
		}else {
			element.classList.remove("change");
			e1.classList.remove("link");
			bool=false;
		}	
	}	
}

var menuToggle = document.querySelector("#menu_close");
var activeElements = document.querySelectorAll(".active-elements");
var m = menuToggle.addEventListener("click", function(){
	for(var activated = 0; activated < activeElements.length; activated++){
		activeElements[activated].classList.toggle("active");
	}
})

