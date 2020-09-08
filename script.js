const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

//Functions

//if the input is not fit, a message will appear accordingly
function showError(input, message) {
  const formControl = input.parentElement; //getting input parent
  formControl.className = "form-control error"; //i don't use classlist.add since modifying can occur couple of times
  const small = formControl.querySelector("small"); //formControl is used as parent for small as 'document' is a parent for id,class..
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement; //getting input parent
  formControl.className = "form-control success";
}

function isEmailValid(email) {
  console.log(email);
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//Check input length
function checkLen(input, minVal, maxVal) {
  if (input.value.length < minVal) {
    showError(input, `${input.id} must be at least ${minVal} characters`);
    return false;
  } else if (input.value.length > maxVal) {
    showError(input, `${input.id} must be no longer than ${maxVal} characters`);
    return false;
  } else return true;
}

//Event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (username.value === "") {
    showError(username, "username is required");
  } else {
    if (checkLen(username, 3, 15)) showSuccess(username);
  }
  if (!isEmailValid(email.value)) {
    showError(email, "email is not valid");
  } else {
    showSuccess(email);
  }
  if (password.value === "") {
    showError(password, "password is required");
  } else {
    if (checkLen(password, 6, 30)) showSuccess(password);
  }
  if (password2.value === "" || password.value !== password2.value) {
    showError(password2, "failure in confirming the password");
  } else {
    showSuccess(password2);
  }
});
