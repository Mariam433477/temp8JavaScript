 

var img1=document.getElementById("img1");
var img2=document.getElementById("img2");
var img3=document.getElementById("img3");
var img4=document.getElementById("img4");
 img1.addEventListener("click",click1);
 img2.addEventListener("click",click2);
 img3.addEventListener("click",click3);
 
function click1(){
  
   img4.setAttribute("src","coffe.jpg")
}
function click2(){
     
   img4.setAttribute("src","ice.jpg")
 }
 function click3(){
  img4.setAttribute("src","pizza.jpg")
 }



 var newWindow;
 document.getElementsByTagName("input")[0].onclick=openWindow;
 function openWindow(){
     newWindow=window.open(" "," ","width=600,height=600");
    var NewImage=document.createElement("img");
    
   newWindow.document.write("<img src ="+ document.getElementById('img4').getAttribute('src')+">");
 }
 document.getElementsByTagName("input")[1].onclick=closeWindow;
function closeWindow(){
 newWindow.close();
}