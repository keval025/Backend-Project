const API = "http://localhost:5000/api/auth";

// REGISTER
function register() {
  axios.post(`${API}/register`, {
    name: rname.value,
    email: remail.value,
    password: rpassword.value
  })
  .then(res => msg.innerText = res.data.message)
  .catch(err => msg.innerText = err.response.data.error);
}

// LOGIN
function login() {
  axios.post(`${API}/login`, {
    email: lemail.value,
    password: lpassword.value
  })
  .then(res => {
    localStorage.setItem("token", res.data.token);
    window.location.href = "dashboard.html";
  })
  .catch(err => msg.innerText = err.response.data.error);
}

// PROFILE (Protected)
function getProfile() {
  const token = localStorage.getItem("token");

  axios.get(`${API}/profile`, {
    headers: { Authorization: token }
  })
  .then(res => data.innerText = JSON.stringify(res.data, null, 2))
  .catch(err => alert("Unauthorized"));
}

// LOGOUT
function logout() {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}
