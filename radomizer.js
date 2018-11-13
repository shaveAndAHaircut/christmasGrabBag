var number = 4;
var family= ["simone","kamaron the great", "kayla","kyle", "christopher" ];

function randomize(){
	
	var randomNum = Math.floor(Math.random() * number);
	
	return randomNum;
	
}

function choose(){
    //alert(randomize());
	var input = document.getElementById('first').value;
	var num = randomize();
	
	var person = family[num];
	
	if(input.toUpperCase() == person.toUpperCase())
	{
		alert("You Chose Yourself, Click the button again");
	}
	else if(input == ""){
		alert("Enter Your name first Genius!");
	}
	else{
		alert("Your person is " + person);
		number --;
		family.splice(num,1);
	}
	
	
	
	
}

function crankTheTunes(){
	var sound = document.getElementById('music');
	sound.play();
	
}

function pause(){
	var sound = document.getElementById('music');
	
	sound.pause();
	alert("Buzzkill");
	
}
