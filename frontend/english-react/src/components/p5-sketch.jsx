import React from "react";
import p5 from 'p5';


var ysize = 490;
var xsize = 800;
var midSquareSize = 10;
var borderSize = 10;
var black = 0;
var white = 255;
var barSize = 70;
var barDist = 20;
var barLarge = 10;
var ballDeb = 150;
var ballDirx = 1;
var ballDiry = 1;
var ballSize = 10;
var barSpeed = 70.0;
var ballSpeed = 2.0;
var oneScore = 0;
var twoScore = 0;
var menuSize = 7 * midSquareSize + 2 * borderSize;
var	ballx = xsize / 2 - ballDeb;
var bally = borderSize * 2 + menuSize + (ysize - borderSize * 2 - menuSize) / 2;
var oneBary = borderSize * 2 + menuSize + 10;
var twoBary = borderSize * 2 + menuSize + 10;

function drawMidline(p)
{
	p.fill(white);
	var area = ysize - borderSize * 3 - menuSize;
	var tmp = area / midSquareSize;
	tmp = Math.floor(tmp);
	tmp = tmp / 2;
	tmp = Math.floor(tmp);
	var i = borderSize * 2 + menuSize + (area - (midSquareSize * (tmp * 2 - 1))) / 2;
	while (i < ysize - borderSize - midSquareSize)
	{
		p.rect(xsize / 2 - midSquareSize / 2, i, midSquareSize, midSquareSize);
		i = i + midSquareSize * 2;
	}
	p.rect(xsize / 2 - midSquareSize / 2, borderSize - 1, midSquareSize, menuSize + 2);
}

function drawBorder(p)
{
	p.fill(black);
	p.rect(borderSize, borderSize, xsize - borderSize * 2, menuSize);
	p.rect(borderSize, borderSize * 2 + menuSize, xsize - borderSize * 2, ysize - borderSize * 3 - menuSize);
}

function drawBar(p)
{
	p.rect(borderSize + barDist, oneBary, barLarge, barSize);
	p.rect(xsize - borderSize - barDist - barLarge, twoBary, barLarge, barSize);
	p.rect(ballx, bally, ballSize, ballSize);
}

function redrawtwoBar(p, newy)
{
	// p.fill(black);
	// p.rect(xsize - borderSize - barDist - barLarge, twoBary, barLarge, barSize);
	p.fill(white);
	twoBary = newy;
	p.rect(xsize - borderSize - barDist - barLarge, twoBary, barLarge, barSize);

}

function drawOne(p, x)
{
	p.rect(x + midSquareSize * 3, borderSize + midSquareSize, midSquareSize, midSquareSize * 7);
	p.rect(x + midSquareSize * 2, borderSize + midSquareSize * 2, midSquareSize, midSquareSize);
}

function drawTwo(p, x)
{
	p.rect(x, borderSize + midSquareSize, midSquareSize * 4, midSquareSize);
	p.rect(x + midSquareSize * 3, borderSize + midSquareSize, midSquareSize, midSquareSize * 4);
	p.rect(x , borderSize + midSquareSize * 4, midSquareSize * 4, midSquareSize);
	p.rect(x , borderSize + midSquareSize * 4, midSquareSize, midSquareSize * 3);
	p.rect(x , borderSize + midSquareSize * 7, midSquareSize * 4, midSquareSize);
}

function drawThree(p, x)
{
	p.rect(x, borderSize + midSquareSize, midSquareSize * 4, midSquareSize);
	p.rect(x + midSquareSize * 3, borderSize + midSquareSize, midSquareSize, midSquareSize * 4);
	p.rect(x , borderSize + midSquareSize * 4, midSquareSize * 4, midSquareSize);
	p.rect(x + midSquareSize * 3 , borderSize + midSquareSize * 4, midSquareSize, midSquareSize * 3);
	p.rect(x , borderSize + midSquareSize * 7, midSquareSize * 4, midSquareSize);
}

function drawFour(p, x)
{
	p.rect(x, borderSize + midSquareSize, midSquareSize, midSquareSize * 4);
	p.rect(x + midSquareSize * 3, borderSize + midSquareSize, midSquareSize, midSquareSize * 4);
	p.rect(x , borderSize + midSquareSize * 4, midSquareSize * 4, midSquareSize);
	p.rect(x + midSquareSize * 3 , borderSize + midSquareSize * 4, midSquareSize, midSquareSize * 3);
}

function drawFive(p, x)
{
	p.rect(x, borderSize + midSquareSize, midSquareSize * 4, midSquareSize);
	p.rect(x, borderSize + midSquareSize, midSquareSize, midSquareSize * 4);
	p.rect(x , borderSize + midSquareSize * 4, midSquareSize * 4, midSquareSize);
	p.rect(x + midSquareSize * 3 , borderSize + midSquareSize * 4, midSquareSize, midSquareSize * 3);
	p.rect(x , borderSize + midSquareSize * 7, midSquareSize * 4, midSquareSize);
}

function drawSix(p, x)
{
	p.rect(x, borderSize + midSquareSize, midSquareSize * 4, midSquareSize);
	p.rect(x, borderSize + midSquareSize, midSquareSize, midSquareSize * 4);
	p.rect(x , borderSize + midSquareSize * 4, midSquareSize * 4, midSquareSize);
	p.rect(x + midSquareSize * 3 , borderSize + midSquareSize * 4, midSquareSize, midSquareSize * 3);
	p.rect(x , borderSize + midSquareSize * 7, midSquareSize * 4, midSquareSize);
	p.rect(x , borderSize + midSquareSize * 4, midSquareSize, midSquareSize * 3);
}

function drawSeven(p, x)
{
	p.rect(x, borderSize + midSquareSize, midSquareSize * 4, midSquareSize);
	p.rect(x + midSquareSize * 3 , borderSize + midSquareSize, midSquareSize, midSquareSize * 7);
}

function drawEight(p, x)
{
	p.rect(x, borderSize + midSquareSize, midSquareSize * 4, midSquareSize);
	p.rect(x, borderSize + midSquareSize, midSquareSize, midSquareSize * 4);
	p.rect(x , borderSize + midSquareSize * 4, midSquareSize * 4, midSquareSize);
	p.rect(x + midSquareSize * 3 , borderSize + midSquareSize * 4, midSquareSize, midSquareSize * 3);
	p.rect(x , borderSize + midSquareSize * 7, midSquareSize * 4, midSquareSize);
	p.rect(x , borderSize + midSquareSize * 4, midSquareSize, midSquareSize * 3);
	p.rect(x + midSquareSize * 3, borderSize + midSquareSize, midSquareSize, midSquareSize * 4);
}

function drawNine(p, x)
{
	p.rect(x, borderSize + midSquareSize, midSquareSize * 4, midSquareSize);
	p.rect(x, borderSize + midSquareSize, midSquareSize, midSquareSize * 4);
	p.rect(x , borderSize + midSquareSize * 4, midSquareSize * 4, midSquareSize);
	p.rect(x + midSquareSize * 3 , borderSize + midSquareSize * 4, midSquareSize, midSquareSize * 3);
	p.rect(x , borderSize + midSquareSize * 7, midSquareSize * 4, midSquareSize);
	p.rect(x + midSquareSize * 3, borderSize + midSquareSize, midSquareSize, midSquareSize * 4);
}

function drawZero(p, x)
{
	p.rect(x, borderSize + midSquareSize, midSquareSize * 4, midSquareSize);
	p.rect(x, borderSize + midSquareSize, midSquareSize, midSquareSize * 4);
	p.rect(x + midSquareSize * 3 , borderSize + midSquareSize * 4, midSquareSize, midSquareSize * 3);
	p.rect(x , borderSize + midSquareSize * 7, midSquareSize * 4, midSquareSize);
	p.rect(x , borderSize + midSquareSize * 4, midSquareSize, midSquareSize * 3);
	p.rect(x + midSquareSize * 3, borderSize + midSquareSize, midSquareSize, midSquareSize * 4);
}

function drawNumber(p, nb, x)
{
	if (nb === 0)
		drawZero(p, x);
	if (nb === 1)
		drawOne(p, x);
	if (nb === 2)
		drawTwo(p, x);
	if (nb === 3)
		drawThree(p, x);
	if (nb === 4)
		drawFour(p, x);
	if (nb === 5)
		drawFive(p, x);
	if (nb === 6)
		drawSix(p, x);
	if (nb === 7)
		drawSeven(p, x);
	if (nb === 8)
		drawEight(p, x);
	if (nb === 9)
		drawNine(p, x);
}

function scoreOne(p, nb)
{
	p.fill(black);
	p.rect(midSquareSize * 2, borderSize + midSquareSize, 4 * midSquareSize, 7 * midSquareSize);
	p.fill(white);
	drawNumber(p, nb, midSquareSize * 2);
}

function scoreTwo(p, nb)
{
	p.fill(black);
	p.rect(xsize - 6 * midSquareSize, borderSize + midSquareSize, 4 * midSquareSize, 7 * midSquareSize);
	p.fill(white);
	drawNumber(p, nb, xsize - 6 * midSquareSize);
}

function redrawOneBar(p, newy)
{
	// p.fill(black);
	// p.rect(borderSize + barDist, oneBary - 1, barLarge, barSize + 2);
	// p.fill(white);
	oneBary = newy;
	p.rect(borderSize + barDist, oneBary, barLarge, barSize);

}

function ballRedir()
{
	if (bally + ballSize + ballSpeed >= ysize - borderSize)
		ballDiry = -1;
	if (bally - ballSpeed <= borderSize * 2 + menuSize)
		ballDiry = 1;
	if (ballx <= borderSize + barLarge + barDist && ballx >= borderSize + barDist && bally <= oneBary + barSize && bally >= oneBary)
		ballDirx = 1;
	if (ballx + ballSize >= xsize - borderSize - barLarge - barDist && ballx + ballSize <= xsize - borderSize - barDist && bally + ballSize / 2 <= twoBary + barSize && bally + ballSize / 2 >= twoBary)
		ballDirx = -1;
}

function score(p)
{
	if (ballx + ballSize >= xsize - borderSize - barDist)
	{
		oneScore++;
		scoreOne(p, oneScore);
		ballx = xsize / 2 + ballDeb;
		bally = borderSize * 2 + menuSize + (ysize - borderSize * 2 - menuSize) / 2;
		ballDirx = -1;
		ballDiry = 1;
	}
	if (ballx < borderSize + barDist / 2)
	{
		twoScore++;
		scoreTwo(p, twoScore);
		ballx = xsize / 2 - ballDeb;
		bally = borderSize * 2 + menuSize + (ysize - borderSize * 2 - menuSize) / 2;
		ballDirx = 1;
		ballDiry = 1;
	}
}

// var shadonex = -1;
// var shadoney = -1;
// var shadtwox = -1;
// var shadtwoy = -1;
// var shadthreex = -1;
// var shadthreey = -1;


function redrawBall(p)
{
	// if (ballDiry == 1)
	// 	p.rect(ballx - ballSpeed, bally - ballSpeed, ballSize + 10, ballSpeed);
	// if (ballDirx == 1)
	// 	p.rect(ballx - ballSpeed, bally - ballSpeed, ballSpeed, ballSize + 10);
	// if (ballDirx == -1)
	// 	p.rect(ballx + ballSize, bally - ballSpeed, ballSpeed, ballSize + 10);
	// if (ballDiry == -1)
	// 	p.rect(ballx - ballSpeed, bally + ballSize, ballSize + 10, ballSpeed);
	// 
	// shadthreex = shadtwox;
	// shadthreey = shadtwoy;
	// shadtwox = shadonex;
	// shadtwoy = shadoney;
	// shadonex = ballx;
	// shadoney = bally;
	// if (shadthreey !== -1)
	// {
	// 	p.fill('black');
	// 	p.rect(shadthreex, shadthreey, ballSize, ballSize);
	// }
	// if (shadtwoy !== -1)
	// {
	// 	p.fill('#212121');
	// 	p.rect(shadtwox, shadtwoy, ballSize, ballSize);
	// }
	// if (shadoney !== -1)
	// {
	// 	p.fill('#404040');
	// 	p.rect(shadonex, shadoney, ballSize, ballSize);
	// }
	// 

	p.fill('white');



	ballRedir();
	ballx = ballx + ballDirx * ballSpeed;
	bally = bally + ballDiry * ballSpeed;
	p.rect(ballx, bally, ballSize, ballSize);
}

export default class Pong extends React.Component {
	constructor(props) {
		super(props)
		this.myRef = React.createRef()
	}

	Sketch = (p) => {

		p.setup = () => {
			p.createCanvas(xsize, ysize);
			p.noStroke();
			p.background(white);
			drawBorder(p);
			drawMidline(p);
			drawBar(p);
			p.frameRate(30);
			scoreOne(p, 0);
			scoreTwo(p, 0);
			p.fill(white);
			p.rect(ballx, bally, ballSize, ballSize);
		}
		p.draw = () => {
			if (p.keyCode === p.DOWN_ARROW && p.keyIsPressed)
			{
			  if (oneBary + barSize < ysize - borderSize)
				redrawOneBar(p, oneBary + p.deltaTime / 1000 * barSpeed);
			}
			if (p.keyCode === p.UP_ARROW && p.keyIsPressed)
			{
			  if (oneBary > borderSize * 2 + menuSize)
				redrawOneBar(p, oneBary - p.deltaTime / 1000 * barSpeed);
			}
			if (p.keyCode === p.LEFT_ARROW && p.keyIsPressed)
			{
			  if (twoBary + barSize < ysize - borderSize)
				redrawtwoBar(p, twoBary + p.deltaTime /1000 * barSpeed);
			}
			if (p.keyCode === p.RIGHT_ARROW && p.keyIsPressed)
			{
			  if (twoBary > borderSize * 2 + menuSize)
				redrawtwoBar(p, twoBary - p.deltaTime / 1000 * barSpeed);
			}
			p.fill('black');
			p.rect(borderSize, menuSize + borderSize * 2, xsize - 2 * borderSize, ysize - borderSize * 3 - menuSize)
			p.fill('white');
			score(p);
			drawBar(p);
			redrawBall(p);
			drawMidline(p);
		}
	}
	componentDidMount() {
		this.myP5 = new p5(this.Sketch, this.myRef.current)
		return this.myP5.remove;
	}
	render() {
		return (
			<div ref={this.myRef}></div>
		)
	}
}
