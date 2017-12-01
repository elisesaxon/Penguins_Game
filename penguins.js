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
	gameholder.appendChild(titlediv);
	var apdtitlediv = document.getElementById("title");
	apdtitlediv.style.width = "600px";
	apdtitlediv.style.height = "150px";
	apdtitlediv.style.backgroundImage = "url('penguin_pngs/penguin_title.png')";
		
	
	var numPenguins;
	
	var dropdown = document.createElement("select");
	for(i=0; i<=64; i++) {
		var option = document.createElement("option");
		option.value = i;
		option.text = String(i);
		dropdown.options.add(option);
	}
	dropdown.onchange = function() { numPenguins = this.value };
	
	//document.body.appendChild(dropdown);
	gameholder.appendChild(dropdown);
	
	
	for(i=1; i<=8; i++) {
		var pengdiv = document.createElement("div");
		var namestr = "penguin" + String(i);
		pengdiv.className = namestr;
		//document.body.appendChild(peng);
		gameholder.appendChild(pengdiv);
		
		var moundname = "mound_" + String(i);
		var peng = document.getElementsByClassName(namestr);
		peng[0].style.width = "200px";
		peng[0].style.height = "200px";
		peng[0].style.cssFloat = "left";
		peng[0].style.backgroundImage = "url('penguin_pngs/" + moundname + ".png')";
	}
	
	var yetidiv = document.createElement("div");
	yetidiv.className = "yeti";
	gameholder.appendChild(yetidiv);
	
}
