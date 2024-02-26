const time = 10000 // 10 seconds
const random = (number = 10) => {
  return Math.floor(Math.random() * number);
}

setTimeout(async () => {
  // code
}, time + (random(10) * 1000)); // 1 seconds
