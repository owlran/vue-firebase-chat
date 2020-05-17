const randomMC = require('random-material-color');

const userMap = {};

export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
export function getRandomColorByUsername(name) {
  if (!userMap[name]) {
    userMap[name] = randomMC.getColor();
  }
  return userMap[name];
}
