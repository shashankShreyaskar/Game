var numSq=6;
var colors=buildcolor(numSq);
var ri8color=colors[randmpick(numSq)];
var squares=document.querySelectorAll(".squares");
var colordis=document.querySelector("#colordis");
var messagedis=document.querySelector("#messagedis");
var resetbtn=document.getElementById("reset");
var easybtn=document.getElementById("easy");
var hardbtn=document.getElementById("hard");
var h1=document.getElementsByTagName("h1")[0];

function buildcolor(numSq){
	var  a=[];
	for(var i=0;i<numSq;i++){
		a.push(randm());
	}
	return a;
}
resetbtn.addEventListener("click",function(){
	reset(numSq);
});
easybtn.addEventListener("click", function(){
	numSq=3;
	reset(numSq);
	for(var i=numSq;i<squares.length;i++)
		squares[i].style.display="none";
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
});
hardbtn.addEventListener("click", function(){
	numSq=6;
	reset(numSq);
	for(var i=3;i<squares.length;i++)
		squares[i].style.display="block";
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");

});
colordis.textContent=ri8color;
for(var i=0; i<squares.length; i++)
{
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click", function(){
		var clickedcolor=this.style.backgroundColor;
		if(clickedcolor===ri8color){
			messagedis.textContent="Correct!";
			windis(ri8color);
			h1.style.background=ri8color;
			resetbtn.textContent="Play again?"
		}
		else{
			messagedis.textContent="Try again";
            this.style.backgroundColor="rgba(230,230,250)";
		}
	});
}

function reset(numSq){
	colors=buildcolor(numSq);
	ri8color=colors[randmpick(numSq)];
	colordis.textContent=ri8color;
	for(var i=0;i<numSq;i++)
		squares[i].style.backgroundColor=colors[i];
	messagedis.textContent="";
	h1.style.backgroundColor="steelblue";
	resetbtn.textContent="New colors"
}

function randm(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}
function randmpick(numSq){
	return Math.floor(Math.random()*numSq);
}
function windis(color){
	for(var i=0;i<colors.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}