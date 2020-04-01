const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_LS = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  loadGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_LS);
  form.addEventListener("submit", handleSubmit);
}

function loadGreeting(text) {
  form.classList.remove(SHOWING_LS);
  greeting.classList.add(SHOWING_LS);
  greeting.innerText = `안녕하세요 ${text}님`;
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
