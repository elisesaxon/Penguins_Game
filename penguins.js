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
	
	var dropdown = document.createElement("select");
	for(i=2; i<=64; i++) {
		var option = document.createElement("option");
		option.value = i;
		option.text = String(i);
		dropdown.options.add(option);
	}
	
	var penguinholder = document.createElement("div");
	penguinholder.id = "penguinholder";
	
	dropdown.onchange = function() { 
		
		document.getElementById("penguinholder").innerHTML = "";
		
		var numPenguins = this.value; 
		
		var yetiplace = Math.floor(Math.random() * numPenguins) + 1;
		
		var num = numPenguins;
		while (num > 0) {
			
			if(num == yetiplace) {
				var yetidiv = document.createElement("div");
				yetidiv.className = "yeti";
				penguinholder.appendChild(yetidiv);
	
				var yeti = document.getElementsByClassName("yeti");
				yeti[0].style.width = "200px";
				yeti[0].style.height = "200px";
				yeti[0].style.cssFloat = "left";
				yeti[0].style.backgroundImage = "url('penguin_pngs/mound_9.png')";
				
			} else {
				var i = num;
				var a = (num%8)+1;
			
				var pengdiv = document.createElement("div");
				var namestr = "penguin" + String(i);
				pengdiv.className = namestr;
				penguinholder.appendChild(pengdiv);
				
				var moundname = "mound_" + String(a);
				var peng = document.getElementsByClassName(namestr);
				peng[0].style.width = "200px";
				peng[0].style.height = "200px";
				peng[0].style.cssFloat = "left";
				peng[0].style.backgroundImage = "url('penguin_pngs/" + moundname + ".png')";
			}	
			
			num -= 1;
		}
		
		let num2 = numPenguins;
		while (num2 > 0) {
			if(num2 == yetiplace) {
				var yeti = document.getElementsByClassName("yeti");
				
				yeti[0].onmouseenter = function() {
					this.style.backgroundImage = "url('penguin_pngs/mound_9_hover.png')";
					this.style.cursor = "pointer";
				}
				
				yeti[0].onmouseleave = function() {
					this.style.backgroundImage = "url('penguin_pngs/mound_9.png')";
					this.style.cursor = "auto";
				}
	
				yeti[0].onmousedown = function() {
					this.style.backgroundImage = "url('penguin_pngs/yeti.png')";
					var timer = setTimeout(function () {
						window.alert("Yaaaarrrrr!");
					}, 250);
				}
			
			} else {
				let a = (num2%8)+1;
				var namestr = "penguin" + String(num2);
				var peng = document.getElementsByClassName(namestr);
		
				peng[0].onmouseenter = function() {
					this.style.backgroundImage = "url('penguin_pngs/mound_" + String(a) + "_hover.png')";
					this.style.cursor = "pointer";
				}
			
				peng[0].onmouseleave = function() {
					this.style.backgroundImage = "url('penguin_pngs/mound_" + String(a) + ".png')";
					this.style.cursor = "auto";
				}
			
				peng[0].onmousedown = function() {
					this.style.backgroundImage = "url('penguin_pngs/penguin_" + String(a) + ".png')";
				}
			}
			
			num2 -= 1;
		}	
	}
	gameholder.appendChild(dropdown);
	
	gameholder.appendChild(penguinholder);
}
