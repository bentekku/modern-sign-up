const SIGNUP = document.querySelector("#btn-sign-up");
const FNAME = document.querySelector("#inp-first-name");
const LNAME = document.querySelector("#inp-last-name");
const EMAIL = document.querySelector("#inp-email");
const PASS = document.querySelector("#inp-password");
const CONFPASS = document.querySelector("#inp-conf-password");

SIGNUP.addEventListener("click", checkPasswordMatch);

function checkPasswordMatch() {
  if (PASS === CONFPASS) {
    alert("Details have been submitted");
    FNAME.textContent = "";
    LNAME.textContent = "";
    EMAIL.textContent = "";
    PASS.textContent = "";
    CONFPASS.textContent = "";
  } else {
    alert("Passwords do not match");
  }
}
