import React from 'react'

import Sketch from 'react-p5'
import logo1 from '../../images/key_purp_open.png'
import logo2 from '../../images/pyramid_purp.png'
import logo3 from '../../images/key_purp_outline.png'
import logo4 from '../../images/key_solid_purp.png'
import logo5 from '../../images/pyramid_outline_purp.png'

import '../Future/future.css'
const VaporPlanes = () => {
  
  var move;
var hLine;

let theme;
let primaryColor;

let sun;

let skyColor;
let sunColor;
let lineColor;
let mtnColors = [];
let moonColors = [];

let mtns = [];
let moons = [];
let img;
let img1;
let img2;
let img3;
let img4;
let img5;
let images = [];
let width;
// let width = 3840;
// let width = 2160;
let height;
// let height = 2160;
//need polar and black scheme
let THEME_ARRAY = [
	///Lavendar Plane
	["#BEFCFF", "#DEFFFA", "#FFDAF5", "#B0E1FF","#E6C6FF" ], 
	//MIDNIGHT BLUE PLANE
	["#fb321a", "#ff911a", "#e100f5", "#450eff", "#21006f"], 

	["#06f984", "#fde802", "#ffd11a", "#fc5d02", "#ff00f9"], 

	["#aafec6", "#42fe90", "#00d98a", "#018c77", "#02515d"],

	["#FFDAF5", "#DEFFFA", "#FFDAF5", "#B0E1FF","#fff" ],
	//black theme
	["#d84800", "#f07800", "#483018", "#f07800","#000" ],
		//BLAVENDAR
	["#6e0d60", "#DEFFFA", "#972688", "#B0E1FF","#000" ],

	///black theme

	///yellow theme
	["#c75001", "#d43acc", "#de689f", "#e79771","#fbf017", "#f1c344"]
]


  const preload = (p5) => {
    img1 = p5.loadImage(logo1);
    img2 = p5.loadImage(logo2);
    img3 = p5.loadImage(logo3);
    img4 = p5.loadImage(logo4);
    img5 = p5.loadImage(logo5);
    // img5 = null;
  
    images = [img1, img2, img3, img4, img5];
    // img = random(2,4) < 3 ? img1 : img2;
    // img = realityCheck(50) ? img1 : img2;
    img = images[Math.floor(p5.random(images.length))];

  }
  const setup = (p5, canvasParentRef) => {
    height = p5.windowHeight;
    width = p5.windowWidth;
    console.log('HEIGHT', height, 'weidth', width)
    p5.createCanvas(width, height, p5.WEBGL).parent(canvasParentRef)
    p5.angleMode(p5.DEGREES)
	  p5.imageMode(p5.CENTER);
    p5.rectMode(p5.CENTER)
    p5.pixelDensity(3)

    
    
	//theming
	const themeIndex = Math.floor(p5.random(THEME_ARRAY.length))
  const theme = THEME_ARRAY[themeIndex]
	console.log('theme', theme);
	// primaryColor = theme[4];
	primaryColor = theme[Math.floor(p5.random(theme.length))]
	// lineColor = theme[0]
	lineColor = theme[Math.floor(p5.random(theme.length))]
	// console.log('secondary', secondaryColor)
	sunColor = theme[Math.floor(p5.random(theme.length))]
  
	mtnColors.push(theme[2], theme[3])
	moonColors.push(theme[3], theme[4])
	

  // move = 1;
  hLine=0;
	p5.imageTint=255
	sun = new Sun(primaryColor, p5);
	createMoons(moonColors, p5)
	createMtns(mtnColors, p5)

	// for scaling logo
	img.resize(0, height/6) 
  console.log('img in setup', img)
  

	customDraw(p5, img)
  }
  
  // const draw = p5 => {
  //   p5.background(red=red+.5, green=green+.5, blue);
  //   p5.rotateX(88);
  //   // rotateX(90);
  // // rotateZ(10);
  //   p5.translate(0, 0, -14);
  // // translate(-width/2,-width/2, -2)
  //   iterator(p5)
	// // push()
	// // 	rotateX(-88)
	// // 	image(img, 0, -125, 340, 260);
	// // pop()
	//   p5.push()
	// 	// translate(-50, -200)  fill(255, 165, 0, 50);
	// 	p5.rotateX(-88);
	// 	p5.tint(255, p5.imageTint=p5.imageTint + .25);
	// 	if (p5.imageTint == 255) {
	// 		p5.tint(255, 255);
	// 	}
	// 	p5.image(img, 0, 0-img.height/1.85);
  //   img.resize(150,0)
  //   // p5.stroke(255, 100, 0);
	// 	p5.fill(222,222, 0);
	// 	// if(sun>-301){
	// 	// 	p5.circle(-300, sun=sun-1.4, sun1Width);
	// 	// }
	// 	// else if(sun<=-301){
	// 	// 	p5.circle(-300, sun, sun1Width);
	// 	// }
  //   if(sun1>=-20){
	// 		p5.circle(-300, sun1=sun1-1.4, sun1Width);
	// 	}
	// 	else if(sun1<=-20){
	// 		p5.circle(-300, -20, sun1Width);
	// 	}
	// 	//inner
	// 	p5.noStroke();
	// 	p5.fill(255, 100, 0, 145);
	// 	if(sun2>-300){
	// 		p5.circle(width/4, sun2=sun2 - 2.2, sun2Width);
	// 	}
	// 	else if(sun2<=-300){
	// 		p5.circle(width/4, sun2, sun2Width);
	// 	}  
	
	// 	p5.noStroke();
	// 	p5.fill(150, 75, 0);
	// 	p5.triangle(0 - width/2, 0, 0 - width/2 + 250, -300, 0 - width/2 + 500, 0);
	// 	p5.fill(150, 120, 20, 165);
  //   p5.triangle(width/4, 0, width/3, -200, width/2, 0);

  //   p5.pop()
  // }

  const iterator = p5 => {
    for (var i = 0 ; i < width * 3; i += 12) {
    let hLineY = hLine + i;
    p5.stroke(lineColor);
    p5.strokeWeight(.3);
    //vert line
  	p5.line(i - height, 0, i - height, height * height);
    //h line
  	p5.line(width * 2, hLine + i, 0 - height, hLine + i);
    // if (hLine + move > height / 7 ) {
    //   hLine = -100;
    // } else {
    //   hLine += .01
    // }
    // move += .01;
  }
}

class Sun {
	constructor (sunColor, p5) {
		this.circum = p5.random(195, 750)
		this.vert =  p5.random(-1290, 150)
		this.sunSpot = Math.floor( p5.random(2,4))
		this.horiz = this.sunSpot < 3 ? p5.random(-1400,-400) :  p5.random(1400, 400)
		console.log("SUN H", this.horiz)
		// this.horiz = random(-600,600)
		this.color = p5.color(sunColor);
		// this.color.setAlpha(128 + 128 * sin(millis() / 1000)); 
	}
  display(p5){
    p5.noStroke()
    p5.fill(sunColor);
    p5.circle(this.horiz, this.vert, this.circum);
	}
}

class Moon {
	constructor (moonColors, p5) {
		this.circum = p5.random(125, 400)
		this.vert = p5.random(-1250, -100)
		this.moonSpot = Math.floor(p5.random(2,4))
		this.horiz = this.moonSpot < 3 ? p5.random(-1900,-500) : p5.random(900, 400)
		this.moonColors = moonColors
		this.colorIndex = Math.floor(p5.random(0,2))
		this.moonColor = p5.color(this.moonColors[this.colorIndex]);
		// this.moonColor.setAlpha(128 + 128 * sin(millis() / 1000));
	}
  display(p5){
		p5.noStroke()
	
		p5.fill(this.moonColor);
		p5.circle(this.horiz, this.vert, this.circum);
	}
}

function createMoons (theme, p5) {
	let moonNumber = Math.floor(p5.random(0,3));
	for (let i=0; i < moonNumber; i++) {
		let newMoon = new Moon(theme, p5);
		moons.push(newMoon)
	}
	// return newMoons;
}

function displayMoons(p5) {
	for (let i=0; i < moons.length; i++) {
		moons[i].display(p5)
	}
}

function keyPressed(p5) {
  if (p5.keyCode === p5.UP_ARROW) {
    p5.save()
  } else {
   return
  }
}

class Mtn {
	constructor (mtnColors, i, p5) {
		this.circum = p5.random(125, 450)
		this.vert = p5.random(-400, 100)
		this.mtnSpot = Math.floor(p5.random(2,4))
		this.mtnColors = mtnColors
		this.colorIndex = Math.floor(p5.random(0,2))
		this.mtnColor = p5.color(this.mtnColors[this.colorIndex]);
		// this.mtnColor.setAlpha(128 + 128 * sin(millis() / 1000));
		this.mtnX = getX(i, p5)
		this.mtnWidth = p5.random(500, 1200 )
		this.mtnX3 = this.mtnX + this.mtnWidth
		this.mtnHeight = p5.random(300, 500) * -1;
	}
  display(p5){
		p5.noStroke()
		p5.fill(this.mtnColor);
    // p5.push()
		// realityCheck(25) ? rotateY
    p5.push()
    invertMtnsCheck(p5)
    // p5.rotateY(180)
    //// MEED TP FIX THIS FOR UPSIDE MTNS
		// () => { return realityCheck(50) ? p5.rotateY(180) : null};
		p5.triangle(this.mtnX, 0, this.mtnX + (this.mtnWidth/2), this.mtnHeight, this.mtnX3, 0);
		p5.pop()
	}
}

function invertMtnsCheck(p5){
  let x = realityCheck(5, p5) ? p5.rotateY(180) : null
  return x
}

function createMtns (theme, p5) {
	let mtnNumber = Math.floor(p5.random(0,4));
	// mtnNumber = 1;
	for (let i=0; i < mtnNumber; i++) {
		let newMtn = new Mtn(theme, i, p5);
		mtns.push(newMtn)
	}
	// return newMoons;
}

function displayMtns(p5) {
	for (let i=0; i < mtns.length; i++) {
		mtns[i].display(p5)
	}
}

function getX(i, p5) {
	let x;
	if (i%2 == 0 ) {
		x = p5.random(100, 800)
		return x
	}	else {
		x =p5.random(-1000, -100)
		x = -1500;
		return x
	}
	// return x
}

function customDraw(p5, img) {
	p5.background(primaryColor);
	// p5.camera(0, 0, (height/4) / p5.tan(p5.PI/6), 0, 0, -45, 0, 1, 0);
	p5.rotateX(88);
	// realityCheck(4, p5) ? p5.rotateY(180) : null; 
  flipItAll(p5)
	p5.translate(0, 0, -14, 0 ,0, 0);
	// interator()


	p5.push()
	p5.rotateX(-88)
	p5.tint(255, p5.imageTint+= .25);
	// createSky();
	// if (imageTint == 255) {
	// 	tint(255, 255);
	// }
	sun.display(p5)
	displayMoons(p5)
  console.log('IMG', img)
	// displayMtns();
	imageDecisions(p5, img)
  displayMtns(p5);
	//error card iterator
	p5.rotateX(-88)
	// interator()
	p5.pop()
	iterator(p5)
  

// pop()
}

function flipItAll(p5) {
  let x = realityCheck(6, p5) ? p5.rotateY(180) : null; 
  return x
}
function imageDecisions(p5, img) {
  console.log('IMG', img)
	if (realityCheck(85, p5)) {
		if (realityCheck(95, p5)) {
			return p5.image(img, 0, -img.height/2)
			} 
			else {
				return p5.image(img, p5.random(width/2), -img.height/2)
			}
	} 
	else return;
}


function createSky (p5) {
	let skyHeight = height/2;
	p5.fill('#000');
	let skyY = 0
	// console.log(skyY, 'SKYY')
	for (let i=0; i < skyHeight; i+=13) {
	// console.log('i sky', i)
	p5.stroke('#000')
	p5.strokeWeight(3);
	p5.line(0-width, skyY - i, width, skyY - i);
	}
}


function realityCheck(percent, p5) {
	const check = p5.random(0,100);
	return percent > check ? true : false
}




  return (
    <div className="future vaporplanes">
      <Sketch setup={setup}  preload={preload} keyPressed={keyPressed} />
      <div className="future-content">
        {/* <h3>Coming Soon to a Metaverse Near You</h3> */}
      </div>
    </div>
  )
}

export default VaporPlanes