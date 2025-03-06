////charecter 
{

	function drawCharacter(){
		// Draw character
		if (isLeft && isFalling) jumpingfacingleft();
		else if (isRight && isFalling) jumpingfacingright();
		else if (isLeft) walkingleft();
		else if (isRight) walkingright();
		else if (isFalling || isJumping) JumpingFacingForward();
		else standingFacingForward();
	}



	function jumpingfacingleft()
	{
		// add your jumping-left code
		stroke(2)
		strokeWeight(3)
		fill(255,192,203)
		beginShape()
		vertex(gameChar_x+9 ,gameChar_y-35)
		vertex(gameChar_x+14,gameChar_y-7)
		vertex(gameChar_x+19,gameChar_y-2)
		vertex(gameChar_x-7,gameChar_y-2)
		vertex(gameChar_x - 2, gameChar_y-7)
		vertex(gameChar_x+1, gameChar_y-35)
		endShape(CLOSE)
		stroke(1)
		fill(255,235,205);
		ellipse(gameChar_x+5, gameChar_y -50, 32, 32);
		fill(0)
		ellipse(gameChar_x-2 , gameChar_y -52, 7,8)
		ellipse(gameChar_x+10 , gameChar_y -52, 7,8)
		noStroke()
		fill(255)
		ellipse(gameChar_x-3 , gameChar_y -50, 4,4)
		ellipse(gameChar_x+9 , gameChar_y -50, 4,4)
		stroke(3)
		fill(255,99,71)
		arc(gameChar_x +4,gameChar_y-44, 5, 5 , 0, PI)
		noStroke()
		ellipse(gameChar_x+12 ,gameChar_y-45, 6,3)
		ellipse(gameChar_x-5, gameChar_y-45, 6,3)

		stroke(2)
		strokeWeight(3); 
		
		line(gameChar_x+9, gameChar_y-35, gameChar_x+20,gameChar_y-15)
		line(gameChar_x, gameChar_y-35, gameChar_x-18, gameChar_y-29)
		line(gameChar_x+9,gameChar_y-2,gameChar_x+13,gameChar_y+10)
		line(gameChar_x, gameChar_y-2, gameChar_x, gameChar_y+10)
		stroke(2)
		strokeWeight(3);
		fill(0);
		arc(gameChar_x +5, gameChar_y -58, 30, 30, PI, TWO_PI); // Semi-circle hair
		// Bangs
		noStroke();
		fill(0);
		ellipse(gameChar_x - 17, gameChar_y - 55, 15, 20); // Left bang
		ellipse(gameChar_x + 26, gameChar_y -54, 15, 20); // Right bang
	}




	function jumpingfacingright()
	{
		// add your jumping-right code
		stroke(2)
		strokeWeight(3)
		fill(255,192,203)
		beginShape()
		vertex(gameChar_x+9 ,gameChar_y-35)
		vertex(gameChar_x+14,gameChar_y-7)
		vertex(gameChar_x+19,gameChar_y-2)
		vertex(gameChar_x-7,gameChar_y-2)
		vertex(gameChar_x - 2, gameChar_y-7)
		vertex(gameChar_x+1, gameChar_y-35)
		endShape(CLOSE)
			stroke(1)
		fill(255,235,205);
		ellipse(gameChar_x+5, gameChar_y -50, 32, 32);
		fill(0)
		ellipse(gameChar_x-2 , gameChar_y -52, 7,8)
		ellipse(gameChar_x+10 , gameChar_y -52, 7,8)
		noStroke()
		fill(255)
		ellipse(gameChar_x-1 , gameChar_y -50, 4,4)
		ellipse(gameChar_x+12 , gameChar_y -50, 4,4)
		stroke(3)
		fill(255,99,71)
		arc(gameChar_x +4,gameChar_y-44, 5, 5 , 0, PI)
		noStroke()
		ellipse(gameChar_x+12 ,gameChar_y-45, 6,3)
		ellipse(gameChar_x-5, gameChar_y-45, 6,3)
		
		stroke(2)
		strokeWeight(3);
		
		line(gameChar_x+9, gameChar_y-35, gameChar_x+28,gameChar_y-29)
		line(gameChar_x, gameChar_y-35, gameChar_x-8, gameChar_y-14)
		line(gameChar_x+9,gameChar_y-2,gameChar_x+9,gameChar_y+10)
		line(gameChar_x, gameChar_y-2, gameChar_x-5, gameChar_y+10)
		stroke(2)
		strokeWeight(3);
		fill(0);
		arc(gameChar_x +5, gameChar_y -58, 30, 30, PI, TWO_PI); // Semi-circle hair
		// Bangs
		noStroke();
		fill(0);
		ellipse(gameChar_x - 17, gameChar_y - 55, 15, 20); // Left bang
		ellipse(gameChar_x + 26, gameChar_y -54, 15, 20); // Right bang
	}

	function walkingleft(){
		// add your walking left code
		stroke(2)
		strokeWeight(3)
	fill(255,192,203)
	beginShape()
	vertex(gameChar_x+9 ,gameChar_y-35)
	vertex(gameChar_x+14,gameChar_y-7)
	vertex(gameChar_x+19,gameChar_y-2)
	vertex(gameChar_x-7,gameChar_y-2)
	vertex(gameChar_x - 2, gameChar_y-7)
	vertex(gameChar_x+1, gameChar_y-35)
	endShape(CLOSE)
		stroke(1)
	fill(255,235,205);
	ellipse(gameChar_x+5, gameChar_y -50, 32, 32);
	fill(0)
	ellipse(gameChar_x-2 , gameChar_y -52, 7,8)
	ellipse(gameChar_x+10 , gameChar_y -52, 7,8)
	noStroke()
	fill(255)
	ellipse(gameChar_x-3, gameChar_y -52, 4,4)
	ellipse(gameChar_x+9 , gameChar_y -52, 4,4)
	stroke(3)
	fill(255,99,71)
	arc(gameChar_x +4,gameChar_y-44, 5, 5 , 0, PI)
	noStroke()
	ellipse(gameChar_x+12 ,gameChar_y-45, 6,3)
	ellipse(gameChar_x-5, gameChar_y-45, 6,3)

	stroke(2)
	strokeWeight(3);
	
	line(gameChar_x+9, gameChar_y-35, gameChar_x+10,gameChar_y-12)
	line(gameChar_x, gameChar_y-35, gameChar_x-10, gameChar_y-12)
	line(gameChar_x+9,gameChar_y-2,gameChar_x+15,gameChar_y+18)
	line(gameChar_x, gameChar_y-2, gameChar_x+2, gameChar_y+18)
	stroke(2)
	strokeWeight(3);
	fill(0);
	arc(gameChar_x +5, gameChar_y -58, 30, 30, PI, TWO_PI); // Semi-circle hair
	// Bangs
	noStroke();
	fill(0);
	ellipse(gameChar_x - 17, gameChar_y - 55, 15, 20); // Left bang
	ellipse(gameChar_x + 26, gameChar_y -54, 15, 20); // Right bang

	}

	function walkingright(){
		// add your walking right code
		stroke(2)
		strokeWeight(3)
	fill(255,192,203)
	beginShape()
	vertex(gameChar_x+9 ,gameChar_y-35)
	vertex(gameChar_x+14,gameChar_y-7)
	vertex(gameChar_x+19,gameChar_y-2)
	vertex(gameChar_x-7,gameChar_y-2)
	vertex(gameChar_x - 2, gameChar_y-7)
	vertex(gameChar_x+1, gameChar_y-35)
	endShape(CLOSE)
		stroke(1)
	fill(255,235,205);
	ellipse(gameChar_x+5, gameChar_y -50, 32, 32);
	fill(0)
	ellipse(gameChar_x-2 , gameChar_y -52, 7,8)
	ellipse(gameChar_x+10 , gameChar_y -52, 7,8)
	noStroke()
	fill(255)
	ellipse(gameChar_x-1 , gameChar_y -52, 4,4)
	ellipse(gameChar_x+11 , gameChar_y -52, 4,4)
	stroke(3)
	fill(255,99,71)
	arc(gameChar_x +4,gameChar_y-44, 5, 5 , 0, PI)
	noStroke()
	ellipse(gameChar_x+12 ,gameChar_y-45, 6,3)
	ellipse(gameChar_x-5, gameChar_y-45, 6,3)

	stroke(2)
	strokeWeight(3);
	
	line(gameChar_x+9, gameChar_y-35, gameChar_x+23,gameChar_y-12)
	line(gameChar_x, gameChar_y-35, gameChar_x+2, gameChar_y-12)
	line(gameChar_x+9,gameChar_y-2,gameChar_x+10,gameChar_y+18)
	line(gameChar_x, gameChar_y-2, gameChar_x-5, gameChar_y+18)
	stroke(2)
	strokeWeight(3);
	fill(0);
	arc(gameChar_x +5, gameChar_y -58, 30, 30, PI, TWO_PI); // Semi-circle hair
	// Bangs
	noStroke();
	fill(0);
	ellipse(gameChar_x - 17, gameChar_y - 55, 15, 20); // Left bang
	ellipse(gameChar_x + 26, gameChar_y -54, 15, 20); // Right bang

	}
	function standingFacingForward(){
		stroke(2)
		strokeWeight(3)
		fill(255,192,203)
		beginShape()
		vertex(gameChar_x+9 ,gameChar_y-35)
		vertex(gameChar_x+14,gameChar_y-7)
		vertex(gameChar_x+19,gameChar_y-2)
		vertex(gameChar_x-7,gameChar_y-2)
		vertex(gameChar_x - 2, gameChar_y-7)
		vertex(gameChar_x+1, gameChar_y-35)
		endShape(CLOSE)
			stroke(1)
		fill(255,235,205);
		ellipse(gameChar_x+5, gameChar_y -50, 32, 32);
		fill(0)
		ellipse(gameChar_x-2 , gameChar_y -52, 7,8)
		ellipse(gameChar_x+10 , gameChar_y -52, 7,8)
		noStroke()
		fill(255)
		ellipse(gameChar_x-2 , gameChar_y -52, 4,4)
		ellipse(gameChar_x+10 , gameChar_y -52, 4,4)
		stroke(3)
		fill(255,99,71)
		arc(gameChar_x +4,gameChar_y-44, 5, 5 , 0, PI)
		noStroke()
		ellipse(gameChar_x+12 ,gameChar_y-45, 6,3)
		ellipse(gameChar_x-5, gameChar_y-45, 6,3)
		
		stroke(2)
		strokeWeight(3);
		  
		line(gameChar_x+9, gameChar_y-35, gameChar_x+18,gameChar_y-12)
		line(gameChar_x, gameChar_y-35, gameChar_x-7, gameChar_y-12)
		line(gameChar_x+9,gameChar_y-2,gameChar_x+9,gameChar_y+18)
		line(gameChar_x, gameChar_y-2, gameChar_x, gameChar_y+18)
		stroke(2)
		strokeWeight(3);
		fill(0);
		arc(gameChar_x +5, gameChar_y -58, 30, 30, PI, TWO_PI); // Semi-circle hair
		   // Bangs
		noStroke();
		fill(0);
		ellipse(gameChar_x - 17, gameChar_y - 55, 15, 20); // Left bang
		ellipse(gameChar_x + 26, gameChar_y -54, 15, 20); // Right bang
		
	}

	function JumpingFacingForward(){
		stroke(2)
	strokeWeight(3)
	fill(255,192,203)
	beginShape()
	vertex(gameChar_x+9 ,gameChar_y-35)
	vertex(gameChar_x+14,gameChar_y-7)
	vertex(gameChar_x+19,gameChar_y-2)
	vertex(gameChar_x-7,gameChar_y-2)
	vertex(gameChar_x - 2, gameChar_y-7)
	vertex(gameChar_x+1, gameChar_y-35)
	endShape(CLOSE)
		stroke(1)
	fill(255,235,205);
	ellipse(gameChar_x+5, gameChar_y -50, 32, 32);
	fill(0)
	ellipse(gameChar_x-2 , gameChar_y -52, 7,8)
	ellipse(gameChar_x+10 , gameChar_y -52, 7,8)
	noStroke()
	fill(255)
	ellipse(gameChar_x-2 , gameChar_y -50, 4,4)
	ellipse(gameChar_x+10 , gameChar_y -50, 4,4)
	stroke(3)
	fill(255,99,71)
	arc(gameChar_x +4,gameChar_y-44, 5, 5 , 0, PI)
	noStroke()
	ellipse(gameChar_x+12 ,gameChar_y-45, 6,3)
	ellipse(gameChar_x-5, gameChar_y-45, 6,3)
	
	stroke(2)
	strokeWeight(3);
	  
	line(gameChar_x+9, gameChar_y-35, gameChar_x+28,gameChar_y-29)
	line(gameChar_x, gameChar_y-35, gameChar_x-18, gameChar_y-29)
	line(gameChar_x+9,gameChar_y-2,gameChar_x+9,gameChar_y+10)
	line(gameChar_x, gameChar_y-2, gameChar_x, gameChar_y+10)
	stroke(2)
	strokeWeight(3);
	fill(0);
	arc(gameChar_x +5, gameChar_y -58, 30, 30, PI, TWO_PI); // Semi-circle hair
	   // Bangs
	noStroke();
	fill(0);
	ellipse(gameChar_x - 17, gameChar_y - 55, 15, 20); // Left bang
	ellipse(gameChar_x + 26, gameChar_y -54, 15, 20); // Right bang
	
	}
}