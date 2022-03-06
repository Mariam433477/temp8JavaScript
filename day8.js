var button=document.getElementById("button");
 button.addEventListener("click",randomColor);

var index=0;
 function randomColor(){   
 var myDiv=document.createElement("div");
 myDiv.setAttribute("class","container");
 
 
    var n=(Math.random()* 0xfffff * 1000000).toString(16);
    var value='#'+n.slice(0,6);

myDiv.style.backgroundColor=value;
var newDiv=document.getElementsByClassName("container")[index];
index++;
document.getElementsByClassName("div")[0].insertBefore(myDiv,newDiv);
 }