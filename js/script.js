const hours = document.querySelector('.hour');
const minutes = document.querySelector('.minute');
const seconds = document.querySelector('.second');
const ampm = document.querySelector('.am-pm');
const body = document.body;

setInterval(() => {
  const data = new Date();

  let h = data.getHours();
  let m = data.getMinutes();
  let s = data.getSeconds();

  h < 10 ? (hours.innerHTML = '0' + h) : (hours.innerHTML = h);
  m < 10 ? (minutes.innerHTML = '0' + m) : (minutes.innerHTML = m);
  s < 10 ? (seconds.innerHTML = '0' + s) : (seconds.innerHTML = s);

  if (h >= 18) {
    body.classList.add('night');
    // ampm.innerHTML = 'PM';
  } else {
    body.classList.remove('night');
    // ampm.innerHTML = 'AM';
  }
}, 1000);
