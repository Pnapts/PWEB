
function toggleForm(formType) {
  if (formType === 'register') {
      document.getElementById('loginFormContainer').style.display = 'none';
      document.getElementById('registerFormContainer').style.display = 'block';
  } else {
      document.getElementById('loginFormContainer').style.display = 'block';
      document.getElementById('registerFormContainer').style.display = 'none';
  }
}


document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const newUsername = document.getElementById("newUsername").value;
  const newPassword = document.getElementById("newPassword").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  
  if (users.some(user => user.username === newUsername)) {
      alert("Esse nome de usuário já está em uso.");
      return;
  }

  
  users.push({ username: newUsername, password: newPassword });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Cadastro realizado com sucesso!");
  toggleForm('login');  
});


document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
      
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "index.html";
  } else {
      alert("Usuário ou senha inválidos");
  }
});


function logout() {
    localStorage.removeItem("user"); 
    window.location.href = "login.html"; 
}


if (window.location.pathname.includes('login.html')) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    
    window.location.href = "index.html";
  }
}


if (window.location.pathname.includes('index.html')) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    
    window.location.href = "login.html";
  }
}
