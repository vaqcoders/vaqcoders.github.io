// WELCOME TO JAVASCRIPT
// So, you may be wondering, "Where do I get started?" Well, you're in luck because you are a Vaqcoder!
// The following is just an example. You do not have to understand every little piece of it just yet.
// If you are inspired to learn more, please vist https://www.khanacademy.org/hourofcode/

function anchor(id) {
  let y = document.getElementById(id).getBoundingClientRect().top;
  window.scrollTo({
    top: y - 180,
    behavior: "smooth"
  });
}

// Visit https://p5js.org/reference/ for extra info and for discovering other functions to use. If you have any questions, please do not hesitate to ask the Discord server.
// If things begin to seem limited on codepen and Khan Academy, I invite you to visit https://editor.p5js.org/ for a different experience.
// Keep in mind that the setup function and draw function must both be declared in the js file in order to use the p5 library as intended.
