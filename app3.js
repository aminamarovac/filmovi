document.getElementsByClassName("trecijs")[0].style.backgroundColor =
  "rgba(255, 180, 180,0.7)";

document.getElementsByClassName("trecijs")[0].style.borderRadius = "11px";

document.getElementsByClassName("trecijs")[0].style.padding = "8px";

function validateUsername() {
  const usernameInput = document.getElementById("username");
  const usernameError = document.getElementById("usernameError");
  const username = usernameInput.value;

  if (!/^_[A-Za-z]{3,11}\d$/.test(username)) {
    usernameError.textContent =
      "Greška, korisničko ime mora sadržati znak _ na početku, imati najmanje 5, najviše 13 karaktera i završavati brojem.";
    document.getElementById("registerBtn").disabled = true;
  } else {
    usernameError.textContent = "";
    document.getElementById("registerBtn").disabled = false;
  }
}

function validateName() {
  const nameInput = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  const name = nameInput.value;

  if (!/^[A-Z][a-zA-Z]{2,}$/.test(name)) {
    nameError.textContent =
      "Greška, ime mora počinjati velikim početnim slovom i imati najmanje 3 karaktera.";
    document.getElementById("registerBtn").disabled = true;
  } else {
    nameError.textContent = "";
    document.getElementById("registerBtn").disabled = false;
  }
}

function validateSurname() {
  const surnameInput = document.getElementById("surname");
  const surnameError = document.getElementById("surnameError");
  const surname = surnameInput.value;

  if (!/^[A-Z][a-zA-Z]{4,}vić$/.test(surname)) {
    surnameError.textContent =
      "Greška, prezime mora počinjati velikim početnim slovom, imati najmanje 5 karaktera i završavati na 'vić'.";
    document.getElementById("registerBtn").disabled = true;
  } else {
    surnameError.textContent = "";
    document.getElementById("registerBtn").disabled = false;
  }
}

function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const email = emailInput.value;

  if (!/^[a-zA-Z]+[a-zA-Z0-9\-.]*@[a-zA-Z]+\.[a-zA-Z]+$/.test(email)) {
    emailError.textContent =
      "Greška, email mora sadržati slova, barem jedan znak (može biti srednja crta ili tačka), nakon čega sledi znak '@', pa nekoliko karaktera, pa tačka, pa nekoliko karaktera.";
    document.getElementById("registerBtn").disabled = true;
  } else {
    emailError.textContent = "";
    document.getElementById("registerBtn").disabled = false;
  }
}

function validatePassword() {
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  const password = passwordInput.value;

  if (!/^[A-Z].*[A-Za-z].{6,}$/.test(password)) {
    passwordError.textContent =
      "Greška, lozinka mora počinjati velikim slovom, imati najmanje 8 karaktera i sadržati barem jedan znak.";
    document.getElementById("registerBtn").disabled = true;
  } else {
    passwordError.textContent = "";
    document.getElementById("registerBtn").disabled = false;
  }
}

function enableSubmitButton() {
  const usernameError = document.getElementById("usernameError");
  const nameError = document.getElementById("nameError");
  const surnameError = document.getElementById("surnameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const submitBtn = document.getElementById("submitBtn");

  if (
    usernameError.textContent === "" &&
    nameError.textContent === "" &&
    surnameError.textContent === "" &&
    emailError.textContent === "" &&
    passwordError.textContent === ""
  ) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("input");
  inputs.forEach(function (input) {
    input.addEventListener("blur", enableSubmitButton);
  });
});

function submit() {
  window.location.href = "./poruka.html";
}

var currentLocation = window.location.href;
var navLinks = document.querySelectorAll("header ul li a");

for (var i = 0; i < navLinks.length; i++) {
  var link = navLinks[i];

  if (link.href === currentLocation) {
    link.classList.add("active");
  }
}
