
/*
====================================
   DRAW ENVIRONMENT
====================================
*/
function drawGround() {
    noStroke();
    fill(225, 185, 185);
    rect(0, groundheight, width * 3, groundheight);
    fill(200, 160, 170);
    rect(0, groundheight + 30, width * 3, 50);
    fill(195, 255, 195);
    rect(0, groundheight, width * 3, 20);
    drawFluffyGrass();
    drawSparkles();
}

function drawFluffyGrass() {
    push();
    translate(cameraPosX, 0);
    noStroke();
    fill(185, 240, 185);
    for (let x = 0; x < width * 3; x += 40) {
        let isOnCanyon = false;
        for (let i = 0; i < canyon.length; i++) {
            let c = canyon[i];
            if (x >= c.pos_x && x <= c.pos_x + c.width) {
                isOnCanyon = true;
                break;
            }
        }
        if (!isOnCanyon) {
            ellipse(x, groundheight, 12, 6);
            ellipse(x + 8, groundheight - 2, 16, 8);
            ellipse(x + 16, groundheight, 12, 6);
        }
    }
    pop();
}

function drawSparkles() {
    for (let i = 0; i < 15; i++) {
        let x = random(width * 3);
        let y = random(groundheight - 20, groundheight - 5);
        let insideCanyon = false;
        for (let i = 0; i < canyon.length; i++) {
            let c = canyon[i];
            if (x > c.pos_x - 10 && x < c.pos_x + c.width + 10) {
                insideCanyon = true;
                break;
            }
        }
        if (!insideCanyon) {
            fill(255, 230, 255, random(100, 200));
            noStroke();
            ellipse(x, y, 5, 5);
            ellipse(x + 2, y - 2, 3, 3);
        }
    }
}


function drawclouds() {
    for (var i = 0; i < clouds.length; i++) {
        var cloud = clouds[i];
        noStroke();
        fill(255, 240, 245);
        ellipse(cloud.x, cloud.y, cloud.size * 2, cloud.size);
        ellipse(cloud.x - 20, cloud.y + 10, cloud.size * 1.5, cloud.size * 0.8);
        ellipse(cloud.x + 20, cloud.y + 10, cloud.size * 1.5, cloud.size * 0.8);
        cloud.x += 1;
        if (cloud.x > width * 2) {
            cloud.x = -50;
            cloud.y = random(50, 150); // Randomize y-position
            cloud.size = random(50, 100); // Randomize size
        }
    }
}

function drawmountains() {
    for (var i = 0; i < mountains.length; i++) {
        var mountain = mountains[i];
        fill(220, 180, 200); // Base color
        triangle(
            mountain.baseX, groundheight,
            mountain.baseX + mountain.width / 2, groundheight - mountain.height,
            mountain.baseX + mountain.width, groundheight
        );
        fill(200, 150, 180); // Darker shade
        triangle(
            mountain.baseX, groundheight,
            mountain.baseX + mountain.width / 2, groundheight - mountain.height,
            mountain.baseX + mountain.width / 4, groundheight
        );
        fill(255, 245, 250); // Snowcap
        triangle(
            mountain.baseX + mountain.width / 2 - 20, groundheight - mountain.height + 20,
            mountain.baseX + mountain.width / 2, groundheight - mountain.height,
            mountain.baseX + mountain.width / 2 + 20, groundheight - mountain.height + 20
        );
    }
}

function drawtrees() {
    for (var i = 0; i < trees_x.length; i++) {
        var tree = trees_x[i];
        stroke(34, 139, 34);
        strokeWeight(2);
        line(tree.x, tree.y, tree.x, tree.y - tree.size);
        noStroke();
        fill(60, 179, 113);
        ellipse(tree.x - 4, tree.y - tree.size, tree.size / 2, tree.size / 3);
        ellipse(tree.x + 4, tree.y - tree.size, tree.size / 2, tree.size / 3);
        ellipse(tree.x, tree.y - tree.size - 3, tree.size / 3, tree.size / 3);
    }
}


function drawCanyon(t_canyon) {
    for (var i = 0; i < t_canyon.length; i++) {
        var t_canyonItem = t_canyon[i];
        fill(170, 220, 240);
        rect(t_canyonItem.pos_x, groundheight, t_canyonItem.width, height - groundheight);
        fill(160, 130, 100);
        rect(t_canyonItem.pos_x - 37, groundheight, 50, 150);
        rect(t_canyonItem.pos_x + t_canyonItem.width, groundheight, 50, 150);
    }
}

function checkCanyon(t_canyon) {
    for (var i = 0; i < t_canyon.length; i++) {
        if (
            gameChar_x > t_canyon[i].pos_x &&
            gameChar_x < t_canyon[i].pos_x + t_canyon[i].width &&
            gameChar_y >= groundheight - 18 // Ensure character is on the ground
        ) {
            isPlummeting = true;
            isLeft = false; // Prevent moving while falling
            isRight = false;
            break;
        }
    }
}




