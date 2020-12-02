const input = process.argv.slice(2);
let numbers = input.filter(num => {
  return num > 0;
});

const beeper = function() {
  for (let time of numbers) {
    setTimeout(() => {
      console.log(`beep!`);
      process.stdout.write('\x07');
    }, time * 1000);
  }
};

beeper(numbers);
