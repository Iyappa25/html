

<script> 
// Dummy users for login simulation
const users = [
 

function login() {
  const usernameInput = document.getElementById("username").value.trim();
  const passwordInput = document.getElementById("password").value.trim();

  // Check if input is empty
  if (usernameInput === "" || passwordInput === "") {
    alert("Please enter both username and password.");
    return;
  }

  // Check credentials
  const user = users.find(user => user.username === usernameInput && user.password === passwordInput);

  if (user) {
    alert("Login successful! Welcome, " + user.username);
    // Redirect or display logged-in dashboard
    window.location.href = "index.html"; // Change as needed
  } else {
    alert("Invalid username or password. Try again.");
  }
}
let cartCount = 20;
function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}
<script/>