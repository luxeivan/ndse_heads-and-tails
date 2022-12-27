const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const currNum = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
console.log("Орел(1) или Решка(2)? Введите 1 или 2");

rl.on("line", (answer) => {
  if (currNum === Number(answer)) {
    console.log("Угадано");
    fs.appendFile(process.argv[2], `${new Date()} - Угадано\n`, { flags: "a" }, (err) => {
      if (err) console.log(err);
      process.exit(1);
    });
  } else if (currNum !== Number(answer)) {
    console.log("НЕ угадано");
    fs.appendFile(process.argv[2], `${new Date()} - НЕ угадано\n`, { flags: "a" }, (err) => {
      if (err) console.log(err);
      process.exit(1);
    });
  } else {
    fs.appendFile(process.argv[2], `${new Date()} - Введено не 1 и не 2\n`, { flags: "a" }, (err) => {
      if (err) console.log(err);
      process.exit(1);
    });
  }
});
