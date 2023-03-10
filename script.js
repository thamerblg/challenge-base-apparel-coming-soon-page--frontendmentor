const form = document.querySelector(".container form");
const input = document.querySelector(".container form input[type= email]");
const formBlock = document.querySelector(".container .form");
const errorMsg = document.querySelector(".container .error_message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let emailValue = input.value;
  if (validateEmail(emailValue) === 0) {
    formBlock.classList.add("error");
    errorMsg.innerHTML = "The input field is empty";
  } else if (validateEmail(emailValue)) {
    formBlock.classList.remove("error");
    errorMsg.innerHTML = "";
  } else {
    formBlock.classList.add("error");
    errorMsg.innerHTML = "The email address is not formatted correctly";
  }
});

function validateEmail(email) {
  var validRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email === "") {
    return 0;
  } else {
    return validRegex.test(String(email).toLowerCase());
  }
}
