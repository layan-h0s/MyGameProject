/*
====================================
   DRAW GAME ELEMENTS
====================================
*/
function drawPlatforms() {
    for (let i = 0; i < platforms.length; i++) {
        let p = platforms[i];
        push();
        translate(p.x, p.y);
        stroke(220, 120, 255);
        strokeWeight(3);
        fill(255, 182, 193);
        rect(0, 0, p.width, 15, 10);
        pop();
    }
}

function drawEnemies() {
    for (var i = 0; i < enemies.length; i++) {
        var enemy = enemies[i];

        push();
        translate(enemy.x, enemy.y);

        // **Enemy changes color when near player**
        let distance = dist(gameChar_x, gameChar_y, enemy.x, enemy.y);
        if (distance < 100) {
            fill(255, 105, 180); // Bright pink (aggressive mode)
        } else {
            fill(255, 182, 193); // Soft pastel pink (normal)
        }

        // **Round Body (Chibi style)**
        noStroke();
        ellipse(0, -15, 40, 40); // Head
        ellipse(0, 5, 35, 25);  // Body

        // **Sparkly Big Eyes**
        fill(255);
        ellipse(-10, -18, 12, 15); // Left eye
        ellipse(10, -18, 12, 15); // Right eye
        fill(0);
        ellipse(-10, -18, 5, 7); // Pupils
        ellipse(10, -18, 5, 7);
        fill(255);
        ellipse(-12, -20, 4, 4); // Eye sparkle
        ellipse(8, -22, 4, 4);

        // **Evil Eyebrows**
        stroke(0);
        strokeWeight(2);
        line(-14, -24, -6, -22); // Left eyebrow
        line(6, -22, 14, -24); // Right eyebrow

        // **Small Bat Wings (Flapping Animation)**
        noFill();
        strokeWeight(3);
        stroke(180, 105, 255); // Light purple wings
        let wingOffset = sin(frameCount * 0.2) * 5;
        line(-20, -5 + wingOffset, -30, -15 + wingOffset); // Left wing
        line(20, -5 + wingOffset, 30, -15 + wingOffset); // Right wing

        // **Wiggly Tail**
        stroke(255, 105, 180);
        strokeWeight(2);
        line(0, 10, 0, 15 + sin(frameCount * 0.2) * 3); // Tail wiggle effect

        pop();

        // **Enemy Movement Logic**
        enemy.x += enemy.speed * enemy.direction;
        if (enemy.x > enemy.x_start + enemy.range || enemy.x < enemy.x_start) {
            enemy.direction *= -1;
        }

        // **Player Collision (Enemy hurts you)**
        if (dist(gameChar_x, gameChar_y, enemy.x, enemy.y) < 30 && !isDying) {
            isDying = true;
            lives--;
            deathSound.play();

            if (lives > 0) {
                setTimeout(() => {
                    isDying = false;
                    startGame();
                }, 500);
            } else {
                noLoop();
            }
        }
    }
}


function drawCollectables() {
    for (var i = 0; i < collectables.length; i++) {
        drawCollectable(collectables[i]);
        checkCollectable(collectables[i]);
    }
}


function checkCollectable(t_collectable) {
    if (
        !t_collectable.isFound &&
        dist(gameChar_x, gameChar_y, t_collectable.pos_x, t_collectable.pos_y) < 30
    ) {
        t_collectable.isFound = true;
		collectSound.play();
        gameScore++; // Increment score when collected
    }
}

function drawCollectable(t_collectable) {
    if (!t_collectable.isFound) {
        push();
        translate(t_collectable.pos_x, t_collectable.pos_y + sin(frameCount * 0.1) * 5); // Floating effect
        rotate(radians(frameCount * 2)); // Rotation effect

        //Glowing Effect
        noStroke();
        fill(255, 105, 180, 120 + sin(frameCount * 0.1) * 80); // Soft pink glow (Hot Pink)
        ellipse(0, 0, 45, 45); // Outer glow

        // Crystal Shape
        fill(255, 20, 147); 
        beginShape();
        vertex(0, -12);
        vertex(8, 0);
        vertex(0, 12);
        vertex(-8, 0);
        endShape(CLOSE);

        // **Light Reflection**
        fill(255, 182, 193, 200); // Soft light pink highlight
        ellipse(0, -8, 5, 5);

        pop();
    }
}

function drawCanyonFire() {
    for (let i = 0; i < canyon.length; i++) {
        let c = canyon[i];

        if (c.hasFire) {
            let fireX = c.pos_x;
            let fireY = groundheight + 85

            push();
            translate(fireX, fireY);

           

            // Core Flames 
            for (let x = 0; x < c.width; x += 10) {
                let flicker = sin(frameCount * 0.1 + x * 0.2) * 12;
                fill(255, 20, 147, 200); // Hot pink core
                beginShape();
                vertex(x, 60);  
                vertex(x + 5, 30 + flicker);
                vertex(x + 10, 60);
                endShape(CLOSE);
            }

            //  Secondary Layer (Deeper flames)
            for (let x = 5; x < c.width; x += 15) {
                let flicker = cos(frameCount * 0.15 + x * 0.3) * 10;
                fill(255, 160, 200, 180); // Lighter pink
                beginShape();
                vertex(x, 55);  
                vertex(x + 5, 25 + flicker);
                vertex(x + 10, 55);
                endShape(CLOSE);
            }

            // Inner Yellow Flames (Brightest core
            for (let x = 8; x < c.width; x += 20) {
                let flicker = sin(frameCount * 0.2 + x * 0.4) * 8;
                fill(255, 240, 180, 200); // Yellow-hot flames
                beginShape();
                vertex(x, 65);
                vertex(x + 6, 35 + flicker);
                vertex(x + 12, 65);
                endShape(CLOSE);
            }

            // Floating Ember
            for (let j = 0; j < 6; j++) {
                let sparkX = random(0, c.width);
                let sparkY = random(-50, 20);
                let size = random(3, 6);
                let opacity = random(100, 200);
                fill(255, 220, 255, opacity);
                ellipse(sparkX, sparkY - frameCount % 30, size, size);
            }

            pop();
        }
    }
}




function drawPowerUp() {
    if (!doubleJumpPowerUp.collected) {
        push();
        translate(doubleJumpPowerUp.x, doubleJumpPowerUp.y + sin(frameCount * 0.1) * 5); // Floating animation
        
        // **Glowing Outer Aura**
        noStroke();
        fill(255, 204, 0, 100 + sin(frameCount * 0.1) * 50); // Yellow glow
        ellipse(0, 0, doubleJumpPowerUp.size + 20);

        // **Rotating Energy Orb**
        push();
        rotate(frameCount * 0.05); // Slow rotation
        fill(255, 215, 0); // Bright gold
        ellipse(0, 0, doubleJumpPowerUp.size);
        pop();

        // **Lightning Bolt Icon**
        fill(255, 255, 255);
        beginShape();
        vertex(-5, -10);
        vertex(5, 0);
        vertex(0, 0);
        vertex(5, 10);
        vertex(-5, 0);
        vertex(0, 0);
        endShape(CLOSE);

        pop();
    }
}

function checkPowerUp() {
    if (!doubleJumpPowerUp.collected && dist(gameChar_x, gameChar_y, doubleJumpPowerUp.x, doubleJumpPowerUp.y) < 30) {
        doubleJumpPowerUp.collected = true;
        canDoubleJump = true; // Enable double jump
        hasDoubleJumpEffect = true; // Activate glow effect
        powerUpEffect(); // Show power-up animation
        setTimeout(() => {
            hasDoubleJumpEffect = false; // Remove glow after 5 sec
        }, 5000);
    }
}

function powerUpEffect() {
    push();
    fill(255, 255, 0, 150); // Yellow glow effect
    ellipse(gameChar_x, gameChar_y - 20, 50, 50);
    pop();
}

// **Character Glow Effect When Double Jump is Available**
function drawCharacterGlow() {
    if (hasDoubleJumpEffect) {
        push();
        noStroke();
        fill(255, 255, 0, 120 + sin(frameCount * 0.2) * 50);
        ellipse(gameChar_x, gameChar_y - 20, 60, 60);
        pop();
    }
}






function renderFlagpole() {
    push();
    
    // **Pink Flagpole**
    strokeWeight(6);
    stroke(255, 182, 193); // Soft pastel pink
    line(flagpole.x_pos, groundheight, flagpole.x_pos, groundheight - 200); // Pole

    // **Flag Animation (Moves Up)**
    if (flagpole.isReached) {
        if (flagpole.flagY > groundheight - 200) {
            flagpole.flagY -= 2; // Moves up smoothly
        }
    } else {
        flagpole.flagY = groundheight - 50; // Default position (near ground)
    }

    // **Waving Flag**
    push();
    translate(flagpole.x_pos, flagpole.flagY);
    fill(255, 105, 180); // Pink flag
    noStroke();
    beginShape();
    vertex(0, 0);
    vertex(40, 5 + sin(frameCount * 0.1) * 3);  // Waving effect
    vertex(40, 25 + sin(frameCount * 0.1) * 3);
    vertex(0, 30);
    endShape(CLOSE);
    pop();

    // **Heart Symbol on the Flag**
    fill(255, 255, 255); // White heart
    beginShape();
    vertex(flagpole.x_pos + 10, flagpole.flagY + 10);
    vertex(flagpole.x_pos + 20, flagpole.flagY + 5);
    vertex(flagpole.x_pos + 30, flagpole.flagY + 10);
    vertex(flagpole.x_pos + 20, flagpole.flagY + 25);
    endShape(CLOSE);

    pop();
}

// **Checking When Player Reaches the Flag**
function checkFlagpole() {
    var d = abs(gameChar_x - flagpole.x_pos); 
    if (d < 15) { 
        flagpole.isReached = true; 
		flagSound.play();
    }
}

function drawKawaiiCastle() {
    push();
    translate(flagpole.x_pos + 200, groundheight - 200); // Position the castle after the flagpole

    // **Castle Base (Soft Pastel Pink)**
    fill(255, 182, 193); // Pastel pink
    noStroke();
    rect(0, 0, 400, 200, 20); // Wider base with rounded corners

    // **Castle Towers (Aligned to Base)**
    fill(255, 182, 193);
    rect(50, -150, 100, 150, 20); // Left tower (aligned to base)
    rect(250, -150, 100, 150, 20); // Right tower (aligned to base)
    rect(150, -200, 100, 200, 20); // Central tower (taller and aligned to base)

    // **Tower Roofs (Pastel Purple with Cute Details)**
    fill(200, 160, 200); // Pastel purple
    triangle(50, -150, 100, -250, 150, -150); // Left tower roof
    triangle(250, -150, 300, -250, 350, -150); // Right tower roof
    triangle(150, -200, 200, -350, 250, -200); // Central tower roof

    // **Tower Windows (Cute and Round)**
    fill(255, 255, 255); // White
    ellipse(100, -100, 40, 40); // Left tower window
    ellipse(300, -100, 40, 40); // Right tower window
    ellipse(200, -150, 60, 60); // Central tower window

    // **Window Details (Sparkles and Hearts)**
    fill(255, 105, 180); // Hot pink
    ellipse(100, -100, 10, 10); // Left window sparkle
    ellipse(300, -100, 10, 10); // Right window sparkle
    ellipse(200, -150, 20, 20); // Central window sparkle

    // **Castle Door (Adorable Arch with Heart Knob)**
    fill(255, 105, 180); // Hot pink
    arc(200, 0, 100, 150, 0, PI); // Arch-shaped door

    // **Door Details (Heart Knob)**
    fill(255, 255, 255); // White
    ellipse(200, 50, 20, 20); // Heart base
    beginShape();
    vertex(200, 40);
    vertex(205, 45);
    vertex(210, 40);
    vertex(205, 35);
    vertex(200, 40);
    endShape(CLOSE);

    // **Castle Flags (Cute and Wavy)**
    fill(255, 105, 180); // Hot pink
    // Left tower flag
    beginShape();
    vertex(100, -250);
    vertex(50, -230);
    vertex(100, -210);
    endShape(CLOSE);
    // Right tower flag
    beginShape();
    vertex(300, -250);
    vertex(350, -230);
    vertex(300, -210);
    endShape(CLOSE);
    // Central tower flag
    beginShape();
    vertex(200, -350);
    vertex(150, -330);
    vertex(200, -310);
    endShape(CLOSE);

    // **Castle Decorations (Stars and Sparkles)**
    fill(255, 255, 153); // Soft yellow
    star(200, -330, 10, 20, 5); // Star on central flag
    star(75, -230, 5, 10, 5); // Star on left flag
    star(325, -230, 5, 10, 5); // Star on right flag

    // **Sparkles Around the Castle**
    for (let i = 0; i < 15; i++) {
        let x = random(-50, 450);
        let y = random(-350, 0);
        fill(255, 255, 255, random(100, 200)); // White sparkles
        ellipse(x, y, random(3, 6), random(3, 6));
    }

    pop();
}

// **Helper Function to Draw Stars**
function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius2;
        let sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}