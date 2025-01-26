let minNum = 1;
let maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0;
let guess;
let running = true;
while (running) {
  guess = window.prompt(`Guess any number between ${minNum}-${maxNum}`);
  guess = Number(guess);
  if (isNaN(guess)) {
    window.alert("Please enter a valid NUM");

  }
  else if (guess < minNum || guess > maxNum) {
    window.alert("Please enter a valid number")

  }
  else {
    attempts++;
    if (guess < answer) {
      window.alert("Too low!! Try again")
    }
    else if (guess > answer) {
      window.alert("To high!! Try again!");
    }
    else {
      window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts`)
      running = false
    }
  }
}
let div = document.createElement('div');
let p = document.createElement('p');
if (guess = answer) {
  p.innerHTML = "You have won the match 🎈💙💥";
  document.body.appendChild(p);
  p.setAttribute('class', 'one');
  p.classList.add('one');
}
console.log(p);
