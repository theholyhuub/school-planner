const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;


  if (username === 'user1' && password === '123') {
    window.location.href = 'index.html';
  } else {
    alert('Invalid username or password. Please try again.');
  }
});
