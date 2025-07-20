document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signupForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    try {
      const res = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (res.ok) {
        alert('Signup successful! Please login.');
        window.location.href = '/login.html';
      } else {
        const data = await res.json();
        alert(data.error || 'Signup failed');
      }
    } catch (err) {
      alert('Network error');
    }
  });
});
