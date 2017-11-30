//https://googlecreativelab.github.io/coder-projects/projects/pop_up_penguins/

window.onload = function() {
	document.body.style.backgroundColor = "#ccf5f5";
    
	var dropdown = document.createElement("select");
	for(i=0; i<=64; i++) {
		var option = document.createElement("option");
		option.value = i;
		option.text = String(i);
		
		dropdown.options.add(option);
	}
		
	document.body.appendChild(dropdown);
	
	/*dropdown.onchange = selectNumPenguins(value);
	
	<select id="animationmenu" onchange="changeAnimation(this.value)">
			<option selected value="Blank">Blank</option>
			<option value="Exercise">Exercise</option>
			<option value="Juggler">Juggler</option>
			<option value="Bike">Bike</option>
			<option value="Dive">Dive</option>
			<option value="Custom">Custom</option>
		</select>*/
}