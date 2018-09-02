// WELCOME TO JAVASCRIPT
// So, you may be wondering, "Where do I get started?" Well, you're in luck because you are a Vaqcoder!
// The following is just an example. You do not have to understand every little piece of it just yet.
// If you are inspired to learn more, please vist https://www.khanacademy.org/hourofcode/

let cnv, ball;

function setup() {
  cnv = createCanvas(400, 400);
  cnv.parent("canvas-container");
  
  // Here I created a ball object.
  ball = {
    "x": width / 2, // This is ball's x position; it starts in the middle of cnv
    "y": height / 2, // This is ball's y position; it starts in the middle of cnv
    "vx": Math.random() + 1, // This is ball's x velocity; it begins randomly
    "vy": Math.random() + 1, // This is ball's y velocity; it begins randomly
    "r": 50 // This is ball's radius
  };
}

// "What are you doing?" you may be asking. So far, I set up by creating a canvas. 
// I declared the canvas as a variable with the name of cnv.
// The canvas can be seen in the webpage below. I gave it a width of 400px and a height of 400px.
// I assigned its placement to be within a specific div element with an id of 'canvas-container' which can be seen in the HTML.

// This is the draw loop.
// Everything in here happens many times per second, just like the frames of a video.
function draw() {
  
  // This is the background function. It fills the canvas with a specified color.
  // The color is determined by three arguments: red, green, and blue. These numbers range from 0 to 255.
  // For example, 0,0,0 is black, 255,255,255 is white, 0,0,255 is green, and 255,255,0 is yellow.
  background(0, 0, 0);
  //         ^r ^g ^b
  
  // Here, I update the position of ball according to its current velocity.
  ball.x += ball.vx;
  ball.y += ball.vy;
  
  // Here, I check to see if ball collides with the edges of cnv.
  // If it does collide, then it must bonk.
  if (ball.x - ball.r <= 0  || ball.x + ball.r >= width)  ball.vx *= -1;
  if (ball.y  - ball.r <= 0 || ball.y + ball.r >= height) ball.vy *= -1;
  
  // Here, I draw the ball by using the ellipse function.
  // The ellipse function takes four arguments: x position, y position, width across, and height across.
  ellipse(ball.x, ball.y, ball.r * 2, ball.r * 2);
  //      ^ x     ^ y     ^ width     ^ height
}

// Visit https://p5js.org/reference/ for extra info and for discovering other functions to use. If you have any questions, please do not hesitate to ask the Discord server.
// If things begin to seem limited on codepen and Khan Academy, I invite you to visit https://editor.p5js.org/ for a different experience.
// Keep in mind that the setup function and draw function must both be declared in the js file in order to use the p5 library as intended.