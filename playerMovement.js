function handlePlayerMovement(){
    // --- PLAYER MOVEMENT ---
    if (!isPlummeting) {
        if (isLeft) gameChar_x -= 5;
        if (isRight) gameChar_x += 5;
    } else {
        gameChar_y += 5;
        checkPlayerDie();
    }

	let standingOnPlatform = false;
    for (let i = 0; i < platforms.length; i++) {
        let p = platforms[i];
        if (
            gameChar_x > p.x &&
            gameChar_x < p.x + p.width &&
            gameChar_y + 5 >= p.y - 18 && 
            gameChar_y < p.y
        ) {
            standingOnPlatform = true;
            gameChar_y = p.y - 18;
            isFalling = false;
            isJumping = false;
        }
    }

    if (!standingOnPlatform && gameChar_y < groundheight - 18) {
        isFalling = true;
        gameChar_y += 3;
    } else if (!standingOnPlatform && !isPlummeting) { 
        isFalling = false;
        isJumping = false;
        gameChar_y = groundheight - 18;
    }

}
function keyReleased() {
    if (keyCode === 37) isLeft = false;
    else if (keyCode === 39) isRight = false;
}






function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        isLeft = true;
    } else if (keyCode === RIGHT_ARROW) {
        isRight = true;
    } else if (keyCode === 32) {  // Spacebar (Jump)
        if (!isJumping) {  
            isJumping = true;
            gameChar_y -= 100;
            jumpSound.play();
        } else if (canDoubleJump) {  // Allow double jump if power-up is active
            gameChar_y -= 80;
            canDoubleJump = false; // Only use it once
            jumpSound.play();
        }
    }
	if (keyCode === ENTER && showStartMessage) {
        showStartMessage = false; // Hide message and start game
    }
}
