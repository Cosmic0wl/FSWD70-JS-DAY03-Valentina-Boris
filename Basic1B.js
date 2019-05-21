function Weather(){
	var random = (Math.random() * (25 - 5))-5;
	if (random < 10){
		document.write("The Weather is cold");
		console.log(random + "C")
	}
else{
		document.write("The Weather is Moderate");
		console.log(random + "C")
	}}
Weather();