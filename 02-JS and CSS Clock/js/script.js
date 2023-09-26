const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
  const now = new Date();
  // for seconds hand
  const seconds = now.getSeconds();
  const secondDegrees = ((seconds/60)*360) + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`
  // for minutes hand
  const minutes = now.getMinutes();
  const minutesDegree = ((minutes/60)*360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
  // for hour hand
  const hour = now.getHours();
  const hourDegree = ((hour/12)*360) + 60;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  console.log(hourDegree);
}

setInterval(setDate, 1000);