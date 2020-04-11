const js_form = document.querySelector(".js-form");
const js_input = js_form.querySelector("input");
const js_greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_LS = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = js_input.value;
  loadGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  js_form.classList.add(SHOWING_LS);
  js_form.addEventListener("submit", handleSubmit);
}

function loadGreeting(text) {
  js_form.classList.remove(SHOWING_LS);
  js_greeting.classList.add(SHOWING_LS);
  js_greeting.innerText = `안녕하세요 ${text}님`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    loadGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
