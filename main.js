// while (true) {}
let words = document.querySelectorAll(".blog");
console.log(words[0]);
isclass = true;

function animated(a) {
  setTimeout(() => {
    a(words[0]);
    setTimeout(() => {
      a(words[1]);
      setTimeout(() => {
        a(words[2]);
        setTimeout(() => {
          a(words[3]);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

const animate = (word) => {
  word.classList.add("animate");
  console.log(word);
  // word.style = "hidden";
};

words.style = "hidden";

setInterval(() => {
  animated(animate);
}, 1000);
// animated(animate);

// animated(animate);
