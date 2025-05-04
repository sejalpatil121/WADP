//index.html run karaychi 
// Simulate AJAX POST with localStorage
function ajaxPost(url, data, callback) {
    setTimeout(() => {
      if (url === '/register') {
        let users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push(data);
        localStorage.setItem('users', JSON.stringify(users));
        callback({ status: 200, message: 'Registered successfully' });
      }
    }, 300);
  }
  
  // Register Form Handling
  if (document.getElementById('register-form')) {
    document.getElementById('register-form').addEventListener('submit', function(e) {
      e.preventDefault();
  
      const user = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        mobile: document.getElementById('mobile').value.trim(),
        dob: document.getElementById('dob').value,
        city: document.getElementById('city').value.trim(),
        address: document.getElementById('address').value.trim(),
        username: document.getElementById('username').value.trim(),
        password: document.getElementById('password').value
      };
  
      // Validate all fields are filled
      if (Object.values(user).some(v => v === '')) {
        alert('Please fill out all fields.');
        return;
      }
  
      ajaxPost('/register', user, function(response) {
        if (response.status === 200) {
          alert(response.message);
          document.getElementById('register-form').reset();
        }
      });
    });
  }
  
  // Login Form Handling
  if (document.getElementById('login-form')) {
    document.getElementById('login-form').addEventListener('submit', function(e) {
      e.preventDefault();
  
      const username = document.getElementById('login-username').value.trim();
      const password = document.getElementById('login-password').value;
  
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const matchedUser = users.find(user => user.username === username && user.password === password);
  
      if (matchedUser) {
        alert('Login successful!');
        window.location.href = 'users.html';
      } else {
        alert('Invalid username or password.');
      }
    });
  }
  
  // Display Users in users.html
  if (document.getElementById('user-list')) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const list = document.getElementById('user-list');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.name} | ${user.email} | ${user.city}`;
      list.appendChild(li);
    });
  }
  