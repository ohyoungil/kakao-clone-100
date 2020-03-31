const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("span");

function getTime() {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}

function init() {
  getTime();
}

init();
