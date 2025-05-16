// ===== FORM HANDLING =====
document.addEventListener('DOMContentLoaded', function() {
    // Handle login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Login successful (mock)! Redirecting to movie page...');
        window.location.href = 'watch.html';
      });
    }
  
    // Handle signup form submission
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
      signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Account created (mock)! Redirecting to movie page...');
        window.location.href = 'watch.html';
      });
    }
  
    // ===== MOCK CHAT FUNCTIONALITY =====
    const chatInput = document.querySelector('.chat-box input[type="text"]');
    if (chatInput) {
      chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && this.value.trim() !== '') {
          const messagesContainer = document.querySelector('.messages');
          const newMessage = document.createElement('p');
          newMessage.innerHTML = `<strong>You:</strong> ${this.value}`;
          messagesContainer.appendChild(newMessage);
          this.value = '';
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
      });
    }
  });