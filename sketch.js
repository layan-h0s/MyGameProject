/*
====================================
   GAME CODE 
====================================
*/

// Game State Variables
var showStartMessage = true;
var gameScore = 0;
var lives = 3;
var timer = 60;
var cameraPosX = 0;
var isDying = false;
var isPlummeting = false;
var canDoubleJump = false;
var hasDoubleJumpEffect = false;

// Character Position Variables
var groundheight;
var gameChar_x, gameChar_y, respawnX, respawnY;
var isLeft, isRight, isFalling, isJumping;

// Game Elements
var flagpole;
var clouds, mountains, trees_x, platforms, enemies, canyon, collectables;
var doubleJumpPowerUp;

// Sound Effects
var jumpSound, bgSound, flagSound, deathSound, collectSound;

/*
====================================
   PRELOAD ASSETS
====================================
*/
function preload() {
    soundFormats('mp3', 'wav');

    // Load Sounds
    jumpSound = loadSound('assets/jump.wav');
    bgSound = loadSound('assets/bg-music.mp3');
    flagSound = loadSound('assets/flag.wav');
    deathSound = loadSound('assets/death.wav');
    collectSound = loadSound('assets/collect.wav');

    // Set Sound Volumes
    jumpSound.setVolume(0.1);
    bgSound.setVolume(0.1);
    flagSound.setVolume(0.3);
    deathSound.setVolume(0.3);
    collectSound.setVolume(0.2);
}


function setup() {
    createCanvas(1000, 576);
    groundheight = height * 3 / 4;
	
	bgSound.loop();
	

    // Character spawn position
    respawnX = 50;
    respawnY = groundheight - 18;

    gameChar_x = respawnX;
    gameChar_y = respawnY;

    // Movement and state variables
    isLeft = false;
    isRight = false;
    isJumping = false;
    isFalling = false;
    isPlummeting = false;

    // Initialize Game Objects
    initializeGameObjects();
    
    // Timer countdown
    setInterval(() => {
        if (timer > 0 && lives > 0 && !flagpole.isReached) {
            timer--;
        }
    }, 1000);
}
/*
====================================
   DRAW FUNCTION
====================================
*/
function draw() {
    background(170, 220, 240);
    drawGround();
    drawFluffyGrass();
    
    // Smooth Camera Movement
    var cameraSmoothness = 0.1;
    cameraPosX += (gameChar_x - cameraPosX - width / 2) * cameraSmoothness;
    push();
    translate(-cameraPosX, 0);

    // Draw Game Elements
    drawclouds();
    drawmountains();
    drawtrees();
    drawCanyon(canyon);
    checkCanyon(canyon);
    drawCollectables();
    drawPlatforms();
    drawEnemies();
    drawPowerUp();
    checkPowerUp();
    drawCharacterGlow();
    drawSparkles();
    drawCanyonFire();
    drawStartMessage();
    drawDoubleJumpMessage();
    renderFlagpole();
    drawKawaiiCastle()

    // Check Flagpole Status
    if (!flagpole.isReached) {
        checkFlagpole();
    }

    // Draw Character
    drawCharacter();

    // Player Movement Logic
    handlePlayerMovement();
    
    // Check Game Over or Level Completion
    checkGameStatus();

    pop();
    drawHUD();
}


/*
====================================
   GAME INITIALIZATION
====================================
*/
function initializeGameObjects() {
    canyon = [
        { pos_x: 600, width: 100, hasFire: true },
        { pos_x: 1200, width: 130, hasFire: true }
    ];
    
    clouds = [
        { x: 100, y: 100, size: 80 },
        { x: 400, y: 120, size: 100 },
        { x: 800, y: 90, size: 60 }
    ];
    
    mountains = [
        { baseX: 300, width: 200, height: 150 },
        { baseX: 700, width: 300, height: 250 },
        { baseX: 850, width: 250, height: 200 }
    ];
    
    trees_x = [
        { x: 150, y: groundheight, size: 50 },
        { x: 400, y: groundheight, size: 60 },
        { x: 700, y: groundheight, size: 70 }
    ];
    
    collectables = [
        { pos_x: 200, pos_y: groundheight - 120, isFound: false },
        { pos_x: 400, pos_y: groundheight - 150, isFound: false },
        { pos_x: 530, pos_y: groundheight - 200, isFound: false },
        { pos_x: 850, pos_y: groundheight - 120, isFound: false },
        { pos_x: 1300, pos_y: groundheight - 90, isFound: false }
    ];
    
    enemies = [
        { x: 350, y: groundheight - 20, range: 100, speed: 2, direction: 1, x_start: 350 },
        { x: 1000, y: groundheight - 20, range: 150, speed: 1.5, direction: 1, x_start: 1000 }
    ];
    
    platforms = [
        { x: 250, y: groundheight - 80, width: 100 },
        { x: 500, y: groundheight - 150, width: 120 },
        { x: 800, y: groundheight - 100, width: 90 }
    ];
    
    doubleJumpPowerUp = {
        x: 300,
        y: platforms[1].y + 20,
        size: 30,
        glow: 0,
        collected: false
    };
    
    flagpole = { x_pos: 1500, isReached: false };
}
