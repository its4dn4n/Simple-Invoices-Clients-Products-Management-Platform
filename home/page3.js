const button = document.getElementById('switch-profile');
const button2 = document.getElementById('switch-close');
const logout = document.getElementById('show-logout');
const show2 = document.getElementById('nav');

button.addEventListener('click', function() {
  logout.style.display="Block";
  button.style.display="none";
  button2.style.display="Block";
});

button2.addEventListener('click', function() {
	logout.style.display="none";
	button.style.display="block";
	button2.style.display="none";
  });

////////////////////////////////////////////////
const trace0 = document.getElementById('trace20');
const trace1 = document.getElementById('trace21');
const trace2 = document.getElementById('trace22');
const trace3 = document.getElementById('trace23');
const line0  = document.getElementById('line20');
const line1  = document.getElementById('line21');
const line2  = document.getElementById('line22');
const line3  = document.getElementById('line23');

  let wid0 = 4;
  let wid = 4;
  let wid2 = 4;
  let wid3 = 4;
  let overflow0=0;
  let overflow=0;
  let overflow2=0;
  let overflow3=0;

trace0.addEventListener("keydown",function(event){
	var keyPressed = event.key;
  
  if (keyPressed === "Backspace" && wid0 !== 4 && overflow0 === 0) {
    wid0= wid0-4;
  }
  else if(keyPressed === "Backspace" && overflow0 !== 0){
    overflow0 = overflow0 -1;
  }
  else if (wid0 !== 100 && keyPressed !== "Backspace" && (event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)){
    wid0= wid0+4;
  }
  else{
    overflow0= overflow0+1;
  }
	line0.style.width= wid0+"%";
});

trace1.addEventListener("keydown",function(event){
	var keyPressed = event.key;
  
  if (keyPressed === "Backspace" && wid !== 4 && overflow === 0) {
    wid= wid-4;
  }
  else if(keyPressed === "Backspace" && overflow !== 0){
    overflow = overflow -1;
  }
  else if (wid !== 100 && keyPressed !== "Backspace" && (event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)){
    wid= wid+4;
  }
  else{
    overflow= overflow+1;
  }
	line1.style.width= wid+"%";
});

trace2.addEventListener("keydown",function(event){
	var keyPressed = event.key;

	if (keyPressed === "Backspace" && wid2 !== 4 && overflow2 === 0) {
    wid2= wid2-4;
  }
  else if(keyPressed === "Backspace" && overflow2 !== 0){
    overflow2 = overflow2-1;
  }
  else if (wid2 !== 100 && keyPressed !== "Backspace" && (event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)){
    wid2= wid2+4;
  }
  else{
    overflow2= overflow2+1;
  }
	line2.style.width= wid2+"%";
});

trace3.addEventListener("keydown",function(event){
	var keyPressed = event.key;
           
		if (keyPressed === "Backspace" && wid3 !== 4 && overflow3 === 0) {
			wid3= wid3-4;
		}
		else if(keyPressed === "Backspace" && overflow3 !== 0){
			overflow3 = overflow3 -1;
		}
		else if (wid3 !== 100 && keyPressed !== "Backspace" && (event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)){
			wid3= wid3+4;
		}
		else{
			overflow3= overflow3+1;
		}
	line3.style.width= wid3+"%";
});
// button to send input to new user 
var myClickButton = document.getElementById('myClickButton');

myClickButton.addEventListener('click', function(event) {
  // Perform specific action for button click
});
// button logout 
const action_logout = document.getElementById(''); 
action_logout.addEventListener('click', function(event) {
  // Perform specific action for button click
});
// button delete user 
const delete_user = document.getElementById(''); 
delete_user.addEventListener('click', function(event) {
  // Perform specific action for button click
});
  