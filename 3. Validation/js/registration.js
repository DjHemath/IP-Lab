function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

const registration = document.getElementById("registration");

registration.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (name.length === 0) {
    alert("Name can't be empty!");
  } else if (email.length == 0 || !ValidateEmail(email)) {
    alert("Invalid Email!");
  } else if (
    password.length == 0 ||
    (password.length < 6 && password.length > 8)
  ) {
    alert("Password should be between 6 to 8 characters!");
  } else if (password !== confirmPassword) {
    alert("Both passwords should be the same!");
  } else {
    alert("Form submitted successfully!");
  }

  return false;
});
