const card = document.getElementById("card");

card.addEventListener("submit", e => {
  e.preventDefault();
  const cardNumber = document.getElementById("card-number").value;
  const expMonth = document.getElementById("expiration-month").value;
  const expYear = document.getElementById("expiration-year").value;
  const cvv = document.getElementById("cvv").value;

  console.log(expMonth);

  if (cardNumber.length !== 16) {
    alert("Card Number must be 16 digit long!");
  } else if (
    expMonth == "" ||
    parseInt(expMonth) > 12 ||
    parseInt(expMonth) < 1
  ) {
    alert("Invalid Expiration Month!");
  } else if (
    expYear == "" ||
    expYear.length !== 4 ||
    parseInt(expYear) < 2020
  ) {
    alert("Invalid Expiration Year");
  } else if (cvv.length !== 3) {
    alert("CVV must be 3 characters!");
  } else {
    alert("Form submitted successfully!");
  }

  return false;
});
