window.onload = function () {
  const head = document.getElementById("head");
  const body = document.getElementById("body");
  const leftArm = document.getElementById("left-arm");
  const rightArm = document.getElementById("right-arm");
  const leftLeg = document.getElementById("left-leg");
  const rightLeg = document.getElementById("right-leg");

  head.classList.add("hidden");
  body.classList.add("hidden");
  leftArm.classList.add("hidden");
  rightArm.classList.add("hidden");
  leftLeg.classList.add("hidden");
  rightLeg.classList.add("hidden");

  const words = {
    first_name: "ali",
    second_name: "ayoub",
  };

  let word =
    Object.values(words)[
      Math.floor(Math.random() * Object.values(words).length)
    ];
  let guess = "";

  for (let i = 0; i < word.length; i++) {
    guess += "_ ";
  }
  let guessed = [];
  let tries = 0;

  const guessInput = document.getElementById("guess-input");
  const guessButton = document.getElementById("guess-button");
  const guess_field = document.getElementById("guess");
  guess_field.textContent = guess;
  guessButton.addEventListener("click", function () {
    let letter = guessInput.value;
    guessInput.value = "";
    if (letter.length !== 1) {
      alert("Please enter a single letter.");
    } else if (guessed.includes(letter)) {
      alert("You've already guessed that letter.");
    } else {
      guessed.push(letter);
      let index = word.indexOf(letter);
      if (index === -1) {
        tries++;
        updateHangman(tries);

        setTimeout(function () {
          alert(
            `Sorry, '${letter}' is not in the word. You have ${
              6 - tries
            } tries left.`
          );
        }, 100);
      } else {
        if (index !== -1) {
          guess =
            guess.substring(0, index * 2) +
            letter +
            guess.substring(index * 2 + 1);
          guess_field.textContent = guess;
          index = word.indexOf(letter, index + 1);
        }
      }
    }

    if (guess === word) {
      alert(
        `Congratulations! You guessed the word '${word}' with ${
          6 - tries
        } tries remaining.\n\n${words[word]}`
      );
    } else if (guess !== word && tries === 6) {
      alert(
        `Sorry, you ran out of tries. The word was '${word}'.\n\n${words[word]}`
      );
    }
  });

  function updateHangman(tries) {
    switch (tries) {
      case 1:
        head.classList.remove("hidden");
        break;
      case 2:
        body.classList.remove("hidden");
        break;
      case 3:
        leftArm.classList.remove("hidden");
        break;
      case 4:
        rightArm.classList.remove("hidden");
        break;
      case 5:
        leftLeg.classList.remove("hidden");
        break;
      case 6:
        rightLeg.classList.remove("hidden");
        break;
    }
  }
};
