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
  
  