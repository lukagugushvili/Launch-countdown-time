const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

// we get current Date and the full time of our birthday
const currentDate = new Date().getFullYear();
const previousData = new Date(`August 01 ${currentDate + 1} 00:00:00`);

// update countdown time
function getMyBirthday() {
  const currentTime = new Date();
  const diff = previousData - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor((diff / 1000 / 60 / 60) % 24);
  const m = Math.floor((diff / 1000 / 60) % 60);
  const s = Math.floor((diff / 1000) % 60);

  days.innerHTML = d;
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}

setInterval(getMyBirthday, 1000);
