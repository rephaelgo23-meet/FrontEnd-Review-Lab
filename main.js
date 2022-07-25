var bool = false;

function changeBackgroundColor(color, color2){
	if(!bool)
	{
		bool = true;
		document.body.style.background = color;
	}
	else
	{
		bool = false;
		document.body.style.background = color2;
	}
	
}

changeBackgroundColor("lightgreen");

function linkcolor(color){
	document.getElementsByTagName("a")[0].style.color = color;
}