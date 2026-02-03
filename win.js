// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawWin() → what the win screen looks like
// 2) input handlers → how the player returns to the start screen
//
// This file is intentionally very similar to lose.js.
// The goal is to show that win/lose screens are often
// simple “end states” with minimal logic.

// ------------------------------------------------------------
// Main draw function for win screen
// ------------------------------------------------------------
// drawWin() is called from main.js
// only when currentScreen === "win"
function drawWin() {
  // Green-tinted background to communicate success
  background(200, 255, 200);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(30);
  text(
    "From either your rage, anxiety, gosh who knows, \na magical burst of firey light explodes out of you, \nthe first time anything like this has ever happened. \nThe Ogre is knocked out, dropping the ring it stole \nfrom the fairies behind you",
    width / 2,
    300,
  );

  // Instruction text
  textSize(20);
  text(
    "That burst of power wasn't for nothing, the fairies reveal to you that \nthey have been looking for the holder of the \nDragon Flame, which is revealed to be you \n \n\nClick or press R to return to Start.",
    width / 2,
    490,
  );
}

// ------------------------------------------------------------
// Mouse input for win screen
// ------------------------------------------------------------
// Any mouse click returns the player to the start screen
function winMousePressed() {
  currentScreen = "start";
}

// ------------------------------------------------------------
// Keyboard input for win screen
// ------------------------------------------------------------
// R is commonly used for “restart” in games
function winKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
