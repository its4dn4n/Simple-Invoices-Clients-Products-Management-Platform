const trace1 = document.getElementById('trace1');
const trace2 = document.getElementById('trace2');
const trace3 = document.getElementById('trace3');
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
let index= 1;


// change between pages 
/* if (index == 1){
}
if (index == 2){
}
if (index == 3){
}
 */
  //match writing with line
  
  let value1 = trace1.value;
  let wid = 5;
  let wid2 = 5;
  let wid3 = 4;
trace1.addEventListener("keydown",function(event){
	var keyPressed = event.key;

		if (keyPressed === "Backspace" && wid !== 5 ) {
			wid= wid-3.5;
		}
		else{
			wid= wid+3.5;
		}

	line1.style.width= wid+"%";
});
trace2.addEventListener("keydown",function(event){
	var keyPressed = event.key;

		if (keyPressed === "Backspace" && wid2 !== 5 ) {
			wid2= wid2-3.5;
		}
		else{
			wid2= wid2+3.5;
		}

	line2.style.width= wid2+"%";
});
let overflow=0;
trace3.addEventListener("keydown",function(event){
	var keyPressed = event.key;
           
		if (keyPressed === "Backspace" && wid3 !== 4 && overflow === 0) {
			wid3= wid3-4;
		}
		else if(keyPressed === "Backspace" && overflow !== 0){
			overflow = overflow -1;
		}
		else if (wid3 !== 100 && keyPressed !== "Backspace" && (event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)){
			wid3= wid3+4;
		}
		else{
			overflow= overflow+1;
		}
	line3.style.width= wid3+"%";
});
// button to send input to new user 
var myClickButton = document.getElementById('myClickButton');

myClickButton.addEventListener('click', function(event) {

  // Perform specific action for button click
});
// button delete a user 

function del(){
     // Perform specific action for button click
}

//nav click 
// change pages 
// 1    2   3
 //off on off   

//logout 
//go  to login
// 
const page1  = document.getElementById("page1");
const page2  = document.getElementById("page2");
const page3  = document.getElementById("page3");
const page1content  = document.getElementById("page1content");
const page2content  = document.getElementById("page2content");
const page3content  = document.getElementById("page3content");
//
const page1Border  = document.getElementById("page1Border");
const page2Border  = document.getElementById("page2Border");
const page3Border  = document.getElementById("page3Border");
//


page1.addEventListener("click",function(){
	//perform the logic 	
   page1Border.style.width="100%";
   page2Border.style.width="20%";
   page3Border.style.width="20%";
   page2content.style.display= "none";
   page1content.style.display= "block"; 
   page3content.style.display= "none"; 

});
page2.addEventListener("click",function(){
	//perform the logic 	
	page2Border.style.width="100%";
	page1Border.style.width="20%";
	page3Border.style.width="20%";
    page1content.style.display= "none";
    page2content.style.display= "block";
    page3content.style.display= "none";
});
page3.addEventListener("click",function(){
   //perform the logic 	
   page3Border.style.width="100%";
   page1Border.style.width="20%";
   page2Border.style.width="20%";
   page1content.style.display= "none";
   page2content.style.display= "none";
   page3content.style.display= "block";
});
logout.addEventListener("click",function(){
   //perform the logic 	
});