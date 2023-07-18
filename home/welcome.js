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
  
/* const container=document.getElementById("iframe");
function page(id){
    if (id == 1)
    container.src= 'welcome.html';
    if (id == 2)
    container.src= 'page2.html';
    if (id == 3)
    container.src= 'page3.html';
    if (id == 4)
    container.src= 'page4.html';
    if (id == 5)
    container.src= 'page5.html';
}
   */