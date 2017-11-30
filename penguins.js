//https://googlecreativelab.github.io/coder-projects/projects/pop_up_penguins/


window.onload = function() {
	document.body.style.backgroundColor = "#ccf5f5";
	
	
	/*var gameholder = document.createElement("div");
	gameholder.id = "gameholder";
	
	var titlediv = document.createElement("div");
	*/
	
	
	var numPenguins;
    
	var dropdown = document.createElement("select");
	for(i=0; i<=64; i++) {
		var option = document.createElement("option");
		option.value = i;
		option.text = String(i);
		dropdown.options.add(option);
	}
	dropdown.onchange = function() { numPenguins = this.value };
		
	document.body.appendChild(dropdown);

	
}
