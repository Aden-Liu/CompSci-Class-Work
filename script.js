const hamletBar = document.getElementById("hamlet-health-bar");
const fortinbrasBar = document.getElementById("fortinbras-health-bar");
const bodied = document.getElementById("get-bodied");
const speechBubble = document.getElementById("dialogue-box");

let hamletHealth = 100;
let fortinbrasHealth = 100;
let fortinbrasDamage = 32;
let turnCounter = 0;

hamletBar.innerHTML = `${hamletHealth}/100`;
fortinbrasBar.innerHTML = `${fortinbrasHealth}/100`;

function fortinbrasThrust() {
  hamletHealth -= fortinbrasDamage;
  hamletBar.innerHTML = `${hamletHealth}/100`;
  if (hamletHealth <= 0) {
    gameover();
  }
  turnCounter += 1;
}

function skipDialogue() {
  speechBubble.innerHTML = "Hamlet doesn't want to act!";
  speechBubble.setAttribute("class", "box");
  speechBubble.removeEventListener("click", clearDialogue);
  speechBubble.addEventListener("click", continuationDialogue);
}

function continuationDialogue() {
  speechBubble.innerHTML = "Fortinbras uses Thrust!";
  speechBubble.removeEventListener("click", continuationDialogue);
  speechBubble.addEventListener("click", clearDialogue);
}

function clearDialogue() {
  speechBubble.innerHTML = "";
  speechBubble.removeAttribute("class", "box");
  fortinbrasThrust();
}

function gameover() {
  let cover = document.createElement("div");
  let message = document.createElement("h1");
  let subtext = document.createElement("h3");

  cover.setAttribute("class", "gameover-box");
  message.innerHTML = `Game Over!`;
  subtext.innerHTML = `Refresh the page to restart`;

  cover.appendChild(message);
  cover.appendChild(subtext);
  bodied.appendChild(cover);
}

function attack() {
  if (turnCounter % 2 == 1) {
    skipDialogue();
  } else {
    speechBubble.innerHTML = "Hamlet throws a pebble!";
    speechBubble.setAttribute("class", "box");
    speechBubble.removeEventListener("click", clearDialogue);
    speechBubble.addEventListener("click", continuationDialogue);
    fortinbrasHealth -= 7;
    fortinbrasBar.innerHTML = `${fortinbrasHealth}/100`;
  }

  if (fortinbrasHealth <= 0) {
    youWin();
  }
}

function youWin() {
  let cover = document.createElement("div");
  let message = document.createElement("h1");
  let subtext = document.createElement("h3");

  cover.setAttribute("class", "gameover-box");
  message.innerHTML = `Congratulations!`;
  subtext.innerHTML = `Refresh the page to restart`;

  cover.appendChild(message);
  cover.appendChild(subtext);
  bodied.appendChild(cover);
}

function defend() {
  if (turnCounter % 2 == 1) {
    skipDialogue();
  } else {
    fortinbrasDamage = fortinbrasDamage / 2;
    if (fortinbrasDamage <= 1) {
      fortinbrasDamage = 1;
    }
    speechBubble.innerHTML = "Hamlet braces Himself!";
    speechBubble.setAttribute("class", "box");
    speechBubble.removeEventListener("click", clearDialogue);
    speechBubble.addEventListener("click", continuationDialogue);
  }
}
function skill() {
  if (turnCounter % 2 == 1) {
    skipDialogue();
  } else {
    speechBubble.innerHTML =
      "Hamlet tries to unleash his hidden talents, but quickly realizes that he doesn't have any.";
    speechBubble.setAttribute("class", "box");
    speechBubble.removeEventListener("click", clearDialogue);
    speechBubble.addEventListener("click", continuationDialogue);
  }
}

function run() {
  if (turnCounter % 2 == 1) {
    skipDialogue();
  } else {
    speechBubble.innerHTML =
      "Hamlet runs but trips on a rock! Fortinbras takes this opportunity to strike!";
    fortinbrasDamage = 100;
    speechBubble.setAttribute("class", "box");
    speechBubble.removeEventListener("click", clearDialogue);
    speechBubble.addEventListener("click", continuationDialogue);
  }
}
