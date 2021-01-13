var easy=document.querySelector("#Easy");
var hardness=6;
var hard=document.querySelector("#Hard");
hard.addEventListener("click", function() {
	hardness=6;
		colors=randColor(hardness);
	for(var i=0;i<squares.length;i++)
		squares[i].style.backgroundColor=colors[i];
	pickedColor = colors[randNumber()];
	colorDisplay.textContent = pickedColor;
	document.querySelector(".jumbotron").style.backgroundColor="white";
	document.querySelector("#Message").textContent="";
	newColor.textContent="NEW GAME";
	hard.classList.add("selected");
	easy.classList.remove("selected");
});
easy.addEventListener("click", function() {
	hardness=3;
		colors=randColor(hardness);
	for(var i=0;i<3;i++)
		squares[i].style.backgroundColor=colors[i];
	for(var i=3;i<6;i++) //changes required
		squares[i].style.backgroundColor="#232323";
	easy.classList.add("selected");
	hard.classList.remove("selected");
	
	pickedColor = colors[randNumber()];
	colorDisplay.textContent = pickedColor;
	document.querySelector(".jumbotron").style.backgroundColor="white";
	document.querySelector("#Message").textContent="";
	newColor.textContent="NEW GAME";
});
var colors=randColor(hardness);
var pickedColor = colors[randNumber()];
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var squares=document.querySelectorAll(".square");
var  newColor = document.querySelector("#newColor");

newColor.addEventListener("dblclick", function(){
	console.log("you double clicked on the New game button");
	if(hardness===3)
		hardness=6;
	else 
		hardness=3;
	colors=randColor(hardness);
	for(var i=0;i<squares.length;i++)
		squares[i].style.backgroundColor=colors[i];
	if(hardness===3)
	{
		for(var i=3;i<6;i++)
		{
			squares[i].style.backgroundColor="#232323";
		}
	}
	pickedColor = colors[randNumber()];
	colorDisplay.textContent = pickedColor;
	document.querySelector(".jumbotron").style.backgroundColor="white";
	document.querySelector("#Message").textContent="";
	newColor.textContent="NEW GAME";
});
var DELAY = 300, clicks = 0, timer = null;

newColor.addEventListener("click", function(){
	clicks++;  //count clicks
    if(clicks !== 1) {
        timer = setTimeout(function() {    
            clicks = 0;             //after action performed, reset counter
        }, DELAY);
    }
    else
	{
		timer = setTimeout(function() {    
            clicks = 0;             //after action performed, reset counter
        }, DELAY);
		console.log("you clicked on the New game button");
		colors=randColor(hardness);
		for(var i=0;i<squares.length;i++)
			squares[i].style.backgroundColor=colors[i];
		pickedColor = colors[randNumber()];
		colorDisplay.textContent = pickedColor;
		document.querySelector(".jumbotron").style.backgroundColor="white";
		document.querySelector("#Message").textContent="";
		newColor.textContent="NEW GAME";
	}
});

for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){
		console.log(pickedColor);
		console.log(this.style.backgroundColor);
		if(pickedColor === this.style.backgroundColor)
		{
			document.querySelector("#Message").textContent="Correct!";
			for(var i=0 ;i<hardness ;i++)
			{
	 			squares[i].style.backgroundColor=pickedColor;
			}
			document.querySelector(".jumbotron").style.backgroundColor=pickedColor;
			newColor.textContent="Play Again";
		}
		else
		{
			this.style.backgroundColor= "#232323";
			document.querySelector("#Message").textContent="Try Again!!!";
		}
	})
}
function randNumber()
{
	var x= Math.floor(Math.random()*hardness);
	return x;
}
function randColor(num)
{
	var arr = [];
	for(var i=0;i<num;i++)
	{
		arr.push(generateColor());
	}
	return arr;
}
function generateColor()
{
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}