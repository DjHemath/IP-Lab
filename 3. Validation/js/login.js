function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

const login = document.getElementById("login");

login.addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email.length == 0 || !ValidateEmail(email)) {
    alert("Invalid Email!");
  } else if (
    password.length == 0 ||
    (password.length < 6 && password.length > 8)
  ) {
    alert("Password should be between 6 to 8 characters!");
  } else {
    alert("Form submitted successfully!");
  }

  return false;
});
