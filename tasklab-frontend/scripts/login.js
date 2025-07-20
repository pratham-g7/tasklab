document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
      const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (res.ok) {
        localStorage.setItem('token', (await res.json()).token);
        window.location.href = 'dashboard.html';
      } else {
        const data = await res.json();
        alert(data.error || 'Login failed');
      }
    } catch (err) {
      alert('Network error');
    }
  });
});
