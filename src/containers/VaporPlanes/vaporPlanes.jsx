import React, {useState} from 'react'

import Sketch from 'react-p5'
import logo1 from '../../images/key_purp_open.png'
import logo2 from '../../images/pyramid_purp.png'
import logo3 from '../../images/key_purp_outline.png'
import logo4 from '../../images/key_solid_purp.png'
import logo5 from '../../images/pyramid_outline_purp.png'
import {Link} from 'react-router-dom'
import logo from '../../images/ps37-text-purp-09.png'

import '../Future/future.css'
const VaporPlanes = () => {
//  const [gridLake, setGridLake] = useState(false)
const [customSave, setCustomSave] = useState(null)
const [info, setInfo] = useState(false)
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
let gridLake;
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
		height=1080;
		width=1920;

		// width = 3840;
		// height = 2160;
    // height = p5.windowHeight;
    // width = p5.windowWidth;
    console.log('HEIGHT', height, 'weidth', width)
    p5.createCanvas(width, height, p5.WEBGL).parent(canvasParentRef)
    p5.angleMode(p5.DEGREES)
	  p5.imageMode(p5.CENTER);
    p5.rectMode(p5.CENTER)
    p5.pixelDensity(3)
		gridLake = false;
    
    
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


	// for scaling logo
	img.resize(0, height/9) 
  console.log('img in setup', img)
  // 

	customDraw(p5, img)
	setCustomSave(canvasParentRef)
  }

	const draw = (p5) => {
		// customDraw(p5, img)
	}

	const  customDraw = (p5, img) => {
		p5.background(primaryColor);
		createMoons(moonColors, p5)
		createMtns(mtnColors, p5)
		// p5.camera(0, 0, (height/4) / p5.tan(p5.PI/6), 0, 0, -45, 0, 1, 0);
		// p5.rotateX(89);
		// realityCheck(4, p5) ? p5.rotateY(180) : null; 
		flipItAll(p5)
		// p5.translate(-400, 0, -14, 0 ,0, 0);
		// p5.translate(0, 0, -100)
		// p5.perspective(p5.PI / 3.0, width / height, 0.1, 500);
		// interator()
		p5.camera(0, 0,1280, 0, 0, 0, 0, 1, 0);
		p5.plane(0, 0);
		p5.push()
		// p5.rotateX(-88)
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
		// p5.rotateX(-87)
		iterator(50, p5)
	
		// iterator(p5)
		p5.pop()
	// pop()
	}
  

  const iterator = (pct, p5) => {
    // for (var i = 0 ; i < width * 3; i += 22) {
    // let hLineY = hLine + i;
		let gridSize = 14
		p5.push()
		p5.stroke(lineColor);
    p5.strokeWeight(.3);
		
		if (realityCheck(10, p5)) {
			p5.rotateX(88)
			for (var x = 0; x < width; x += gridSize *1.2) {
				for (var y = 0; y < height; y += gridSize ) {
	
					p5.line(0-width/2, y  , width/2, y ) ;
					// p5.line(x-width/2, 0, x-width/2, height * 2);
				}
			}
		} else {

			p5.rotateX(88)
	
			for (var x = 0; x < width; x += gridSize *1.2) {
				for (var y = 0; y < height; y += gridSize ) {
	
					p5.line(0-width/2, y * 2, width/2, y *2) ;
					p5.line(x-width/2, 0, x-width/2, height * 2);
				}
			}

		}


    // if (hLine + move > height / 7 ) {
    //   hLine = -100;
    // } else {
    //   hLine += .01
    // }
    // move += .01;
  // }
	p5.pop()
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





function flipItAll(p5) {
  let x = realityCheck(6, p5) ? p5.rotateY(180) : null; 
  return x
}

function imageDecisions(p5, img) {
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

function realityCheck(percent, p5) {
	const check = p5.random(0,100);
	return percent > check ? true : false
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





class Sun {
	constructor (sunColor, p5) {
		this.circum = p5.random(145, 450)
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
		this.circum = p5.random(75, 220)
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


class Mtn {
	constructor (mtnColors, i, p5) {
		// this.circum = p5.random(125, 450)
		this.vert = p5.random(-400, 100)
		this.mtnSpot = Math.floor(p5.random(2,4))
		this.mtnColors = mtnColors
		this.colorIndex = Math.floor(p5.random(0,2))
		this.mtnColor = p5.color(this.mtnColors[this.colorIndex]);
		// this.mtnColor.setAlpha(128 + 128 * sin(millis() / 1000));
		this.mtnX = getX(i, p5)
		this.mtnWidth = p5.random(250, 650 )
		this.mtnX3 = this.mtnX + this.mtnWidth
		this.mtnHeight = p5.random(150, 300) * -1;
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

const invertMtnsCheck = (p5) => {
  let x = realityCheck(15, p5) ? p5.rotateX(180) : null
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







function keyPressed(p5) {
  if (p5.keyCode === p5.UP_ARROW) {
    p5.save()
  } else {
   return
  }
}

const  resetFrame = (p5) => {
	window.location.reload(false);
}

const saveMe = (e, p5) => {
 console.log('save', customSave)
 const canvas = document.querySelector('canvas')
 const dataUrl = canvas.toDataURL();
 setInfo(true)
 console.log(dataUrl)


}

  return (
    <div id='canvas-parent' className="future vaporplanes">
     <Sketch setup={setup}  preload={preload} keyPressed={keyPressed} draw={draw}/> 
      <div className="vp-content">
        <h3 onClick={resetFrame}>Create New Plane</h3>
				<h3 onClick={(e, p5) => saveMe(e, p5)}> Mint as NFT (coming soon)</h3>
				<div className="vapor-link">
					<Link to="/"> 
         		<div className="vaporlink-img"><img src={logo} /></div>
      		</Link>
			</div>
      </div>
			{info && <div className="nft-fo">
				<div className="close" onClick={() => setInfo(false)}>X</div>
				<p>Each vapor plane is randomly generated. There are billions of possible and unpredictable combinaations. The idea is that you can create as many new planes as you like and that once you find one that you like you can Mint it as an NFT. The final collection of 1000 will be the 1200 that our users have decided to mint. Each NFT will also be serialized. Holders of NFTs will be eligible for future Airdrops, NFT tickets to IRL or metaverse events, as well as merch.</p>
			</div> }
    </div>
  )
}

export default VaporPlanes