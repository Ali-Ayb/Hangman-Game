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
    guess += "_";
  }
  let guessed = [];
  let tries = 0;

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
