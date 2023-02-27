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

  const words_list = {
    first_word: "ali",
    second_word: "hasan",
    third_word: "sami",
    fourth_word: "ayoub",
  };

  // Get the number of words in the object
  const num_words = Object.keys(words_list).length;

  // Generate a random index between 0 and the number of words - 1
  const random_index = Math.floor(Math.random() * num_words);

  // Get the word at the random index
  const random_word = Object.values(words_list)[random_index];

  // Print the random word
  console.log(random_word);
};
