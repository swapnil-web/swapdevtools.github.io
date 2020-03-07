function lowertouppers(){
	var low = document.getElementById("lower").value;
	// var textupper = low.toUpperCase();
	document.getElementById("upper").value= low.toUpperCase();
}

function uppertouppers(){
	var ups = document.getElementById("uppers").value;
	// var textupper = low.toUpperCase();
	document.getElementById("lowers").value= ups.toLowerCase();
}

function copy1(){
	 var copyText = document.getElementById("upper");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  
}

function copy2(){
	 var copyText1 = document.getElementById("lowers");
  copyText1.select();
  copyText1.setSelectionRange(0, 99999)
  document.execCommand("copy");
 
}