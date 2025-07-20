import isLoggedIn from './app.js';

document.addEventListener('DOMContentLoaded', () => {
  $("#createRoomModal").modal("hide");
  const token = localStorage.getItem('token');

  if (!token) {
    window.location.href = 'login.html';
  }
  else {
    isLoggedIn().then((loggedIn) => {
      if (!loggedIn) {
        window.location.href = 'login.html';
      }
    }).catch(error => {
      console.error('Error checking login status:', error);
      window.location.href = 'login.html';
    } );
  }
});

$("#createRoom").on("click", () => {$("#createRoomModal").modal("show");});
$("#createRoom").on("submit", (e) => {
  e.preventDefault();
  const roomName = $("#roomName").val();

  if (roomName) {
    fetch('/api/rooms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ name: roomName })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        window.location.reload();
      } else {
        alert('Error creating room: ' + data.message);
      }
    })
    .catch(error => console.error('Error:', error));
  } else {
    alert('Please fill in all fields.');
  }
});