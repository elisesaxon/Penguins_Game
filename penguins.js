//https://googlecreativelab.github.io/coder-projects/projects/pop_up_penguins/


window.onload = function() {
	document.body.style.backgroundColor = "#ccf5f5";
	
	
	var gameholder = document.createElement("div");
	gameholder.id = "gameholder";
	document.body.appendChild(gameholder);
	var apdholder = document.getElementById("gameholder");
	apdholder.style.width = "600px";
	apdholder.style.marginLeft = "auto";
	apdholder.style.marginRight = "auto";
	
	
	var titlediv = document.createElement("div");
	titlediv.id = "title";
	document.body.appendChild(titlediv);
	var apdtitlediv = document.getElementById("title");
	apdtitlediv.style.width = "600px";
	apdtitlediv.style.marginLeft = "auto";
	apdtitlediv.style.marginRight = "auto";
	apdtitlediv.style.height = "150px";
	apdtitlediv.style.backgroundImage = "url('penguin_pngs/penguin_title.png')";
	
	var peng1 = document.createElement("div");
	var peng2 = document.createElement("div");
	var peng3 = document.createElement("div");
	var peng4 = document.createElement("div");
	var peng5 = document.createElement("div");
	var peng6 = document.createElement("div");
	var peng7 = document.createElement("div");
	var peng8 = document.createElement("div");
	peng1.class = "penguin1";
	peng2.class = "penguin2";
	peng3.class = "penguin3";
	peng4.class = "penguin4";
	peng5.class = "penguin5";
	peng6.class = "penguin6";
	peng7.class = "penguin7";
	peng8.class = "penguin8";
	
	
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
