const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const getRotation = (percent) => (percent * 360) + 90;
const getStyle = (deg) => `rotate(${deg}deg)`;
const none = 'none'
const all = 'all 0.05s;'

const setDate = () => {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsDegree = (seconds / 60);
  const minutesDegree = (minutes / 60);
  const hoursDegree = (hours / 12);

  if (seconds === 0) secondHand.style.transition = none;
  else secondHand.style.transition = all;

  if (minutes === 0) minuteHand.style.transition = none;
  else minuteHand.style.transition = all;

  if (hours === 0) hourHand.style.transition = none;
  else hourHand.style.transition = all;

  secondHand.style.transform = getStyle(secondsDegree);
  minuteHand.style.transform = getStyle(minutesDegree);
  hourHand.style.transform = getStyle(hoursDegree);
}

setInterval(setDate, 1000);
