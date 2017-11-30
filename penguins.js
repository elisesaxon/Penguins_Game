//https://googlecreativelab.github.io/coder-projects/projects/pop_up_penguins/

window.onload = function() {
	document.body.style.backgroundColor = "#ccf5f5";
	
    /*var para = document.createElement("P");
    var t = document.createTextNode("This is a paragraph.");
    para.appendChild(t);
    document.body.appendChild(para);*/
	var dropdown = document.createElement("select");
	for(i=0; i<=64; i++) {
		var option = dropdown.appendChild(option);
		option.value = i;
		option.attribute = i;
		
		dropdown.appendChild(option);
	}
		
	document.appendChild(dropdown);
	
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