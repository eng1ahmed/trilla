const loginForm = document.getElementById("loginForm");
const userName = document.getElementById("username");
const password = document.getElementById("password");
const submitButton = document.querySelector("button");

// Retrieve stored username and password from sessionStorage
userName.value = sessionStorage.getItem("userName") || "";
password.value = sessionStorage.getItem("Password") || "";

// Store username and password in sessionStorage on blur
userName.onblur = () => {
  sessionStorage.setItem("userName", userName.value);
};
password.onblur = () => {
  sessionStorage.setItem("Password", password.value);
};

// Handle form submission
loginForm.onsubmit = (event) => {
  event.preventDefault(); // Prevent default form submission

  // Perform authentication here (e.g., send data to server)
  // For this example, we'll simulate successful authentication:

  if (
    userName.value === "your_username" &&
    password.value === "your_password"
  ) {
    // Store credentials in localStorage (for persistent storage)
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("Password", password.value);

    // Redirect to the desired page
    window.location.href = "page.html";
  } 
};

// Handle button click (optional)
submitButton.onclick = () => {
  // Redirect to the desired page (adjust the URL as needed)
  window.location.href = "page.html";
  
};
