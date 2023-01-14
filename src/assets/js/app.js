// Imports the GSAP library
import gsap from "gsap";

// Selects the loading bar and counter elements
const bar = document.querySelector(".loading__bar--inner");
const bar_num = document.querySelector(".loading__counter--number");

// Sets a counter variable to 0
let c = 0;

// Sets an interval to increase the counter variable and update the loading bar and counter elements
let bar_interval = setInterval(() => {
  // If the counter is greater than or equal to 101, clear the interval and animate the loading elements
  if (c >= 101) {
    clearInterval(bar_interval);

    // Animates an element with the class "loading__bar" to rotate 90 degrees and move 1000% to the left over a duration of 5 seconds.
    gsap.to(".loading__bar", {
      duration: 5,
      rotate: "90deg",
      left: "1000%",
    });

    // Animates elements with the classes "loading__text" and "loading__counter" to fade out over a duration of 0.5 seconds.
    gsap.to(".loading__text,.loading__counter", {
      duration: 0.5,
      opacity: 0,
    });

    // Animates an element with the class "loading__box" to increase its height to 500px and round its corners over a duration of 1 second.
    gsap.to(".loading__box", {
      duration: 1,
      height: "500px",
      borderRadius: "50%",
    });

    // Animates an element with the class "loading__svg" to fade in and rotate 360 degrees over a duration of 10 seconds.
    gsap.to(".loading__svg", {
      duration: 10,
      opacity: 1,
      rotate: "360deg",
    });

    // Animates an element with the class "loading__box" to remove its border after a delay of 2 seconds.
    gsap.to(".loading__box", {
      delay: 2,
      border: "none",
    });

    // Animates an element with the class "loading" to change its background and opacity after a delay of 2 seconds, over a duration of 2 seconds.
    gsap.to(".loading", {
      delay: 2,
      duration: 2,
      background: "transparent",
      opacity: 0.5,
      zIndex: 1,
    });

    // Animates an element with the class "loading__svg" to fade in and rotate 360 degrees after a delay of 2 seconds, over a duration of 100 seconds.
    gsap.to(".loading__svg", {
      delay: 2,
      duration: 100,
      opacity: 1,
      rotate: "360deg",
    });

    // If the counter is less than 101, increase the counter variable and update the loading bar and counter elements
  } else {
    bar.style.width = c + "%";
    bar_num.innerHTML = c + "%";
    c++;
  }
}, 20);

const questions = [...document.querySelectorAll(".question")];
questions.map((question) => {
  let q_text = question.querySelector("h3");
  question.addEventListener("click", () => {
    questions
      .filter((q) => q !== question)
      .map((q) => q.classList.remove("open"));
    question.classList.toggle("open");
  });
});
