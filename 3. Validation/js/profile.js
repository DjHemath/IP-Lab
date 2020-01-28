function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}

const profile = document.getElementById("profile");

profile.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;

  console.log(typeof age);
  if (name.length === 0) {
    alert("Name can't be empty!");
  } else if (email.length == 0 || !ValidateEmail(email)) {
    alert("Invalid Email!");
  } else if (age == "" || parseInt(age) < 18 || parseInt(age) > 64) {
    alert("Age should be between 18 and 64!");
  } else if (gender === "none") {
    alert("Gender must be selected!");
  } else {
    alert("Form submitted successfully!");
  }

  return false;
});
