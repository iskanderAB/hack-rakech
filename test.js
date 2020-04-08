const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


<div class="overlay-panel overlay-right">
<h1>Hello, Friend!</h1>
<p>Enter your personal details and start journey with us</p>
<button class="ghost" id="signUp">Sign Up</button>
</div>