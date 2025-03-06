/*
====================================
   GAME LOGIC
====================================
*/
function checkPlayerDie() {
    if (gameChar_y > height && !isDying) {
        isDying = true; // Prevent multiple deductions
        lives--;
        deathSound.play();

        if (lives > 0) {
            setTimeout(() => {
                isPlummeting = false;
                isDying = false; // Reset flag
                startGame();
            }, 500);
        } else {
            noLoop(); // Game Over
        }
    }
}

function checkGameStatus(){;
    // Check game over or level complete
    if (lives < 1 || timer === 0) {
       textSize(32);
       fill(255, 0, 0);
       text("Game Over", gameChar_x - 150, height / 2);
       noLoop(); // Stop the game
    } else if (flagpole.isReached) {
       textSize(32);
       fill(0, 255, 0);
       text("Level Complete!", gameChar_x - 200, height / 2);
    
       // Pause the game only after the flag reaches the top
       if (flagpole.flagY <= groundheight - 200) {
           noLoop(); // Stop the game
       }
    }
    }

function startGame() {
        gameChar_x = respawnX;
        gameChar_y = groundheight - 18;
    
        // Reset all states
        isPlummeting = false;
        isFalling = false;
        isJumping = false;
        isLeft = false;
        isRight = false;
        isDying = false; // Reset the death flag
    }

function drawStartMessage() {
    if (showStartMessage) {
         fill(255, 182, 193);
         textSize(24);
          textAlign(CENTER);
         text("Press Space to Jump, Left & Right to Move! 🎀",15, 280);
         text("Press ENTER to Start!", 15, 250);
     }
 }   
        
    // Add HUD
 function drawHUD() {
     fill(0);
     textSize(16);
     text("Score: " + gameScore, 20, 20);
     text("Lives: " + lives, 20, 40);
     text("Time Left: " + timer + "s", 20, 60);

      // Draw life tokens
     for (var i = 0; i < lives; i++) {
    fill(255, 0, 0);
    ellipse(100 + i * 20, 30, 15, 15);
     }
 }

 // Floating Arrow & Double Jump Message
function drawDoubleJumpMessage() {
    if (!doubleJumpPowerUp.collected) {
        fill(255, 182, 193);
        textSize(16);
        textAlign(CENTER);
        text("✨ This is Double Jump! You can only use it once! ✨", doubleJumpPowerUp.x+ 110, doubleJumpPowerUp.y -150);
        stroke(255, 182, 193);
        strokeWeight(3);
        line(doubleJumpPowerUp.x, doubleJumpPowerUp.y -150, doubleJumpPowerUp.x, doubleJumpPowerUp.y - 10);
        noStroke();
    }
}