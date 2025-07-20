import isLoggedIn from './app.js';

document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('token');

  if (!token) {
    window.location.href = '/login.html';
  }
  else {
    isLoggedIn().then((loggedIn) => {
      if (!loggedIn) {
        window.location.href = '/login.html';
      }
    }).catch(error => {
      console.error('Error checking login status:', error);
      window.location.href = '/login.html';
    } );
  }
});
