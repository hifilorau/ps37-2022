import React, {useState, useEffect} from 'react'

import Sketch from 'react-p5'
import logo1 from '../../images/key_purp_open.png'
import logo2 from '../../images/pyramid_purp.png'
import logo3 from '../../images/key_purp_outline.png'
import logo4 from '../../images/key_solid_purp.png'
import logo5 from '../../images/pyramid_outline_purp.png'
import {Link} from 'react-router-dom'
import logo from '../../images/ps37-text-purp-09.png'
import GridLoader from 'react-spinners/GridLoader'
import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import '../Future/future.css'
const VaporPlanes = () => {
const context = useWeb3React()
const { connector, library, chainId, account, activate, deactivate, active, error } = context
//  const [gridLake, setGridLake] = useState(false)
const [activatingConnector, setActivatingConnector] = useState()
const [customSave, setCustomSave] = useState(null)
const [info, setInfo] = useState(false)
  var move;
var hLine;
let attributes = {}
let theme;

let sun;
let isSun;
let skyColor;
let sunColor;
let lineColor;
let mtnColors = [];
let moonColors = [];
let gridLake;
let starColor;
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

const override = `
display: block;
margin: 0 auto;
border-color: red;
`;

useEffect(() => {
	if (activatingConnector && activatingConnector === connector) {
		setActivatingConnector(undefined)
	}
}, [activatingConnector, connector])


  const preload = (p5) => {
    img1 = p5.loadImage(logo1);
    img2 = p5.loadImage(logo2);
    img3 = p5.loadImage(logo3);
    img4 = p5.loadImage(logo4);
    img5 = p5.loadImage(logo5);
    // img5 = null;
  
    images = [img1, img2, img3, img4, img5];
    img = images[Math.floor(p5.random(images.length))];

  }

  const setup = (p5, canvasParentRef) => {
		height=1080;
		width=1920;
    console.log('HEIGHT', height, 'weidth', width)
    p5.createCanvas(width, height, p5.WEBGL).parent(canvasParentRef)
    p5.angleMode(p5.DEGREES)
	  p5.imageMode(p5.CENTER);
    p5.rectMode(p5.CENTER)
    p5.pixelDensity(3)
		gridLake = false;
		p5.colorMode(p5.HSB, 360, 100, 100, 100);

    
	//theming
	const themeIndex = Math.floor(p5.random(THEME_ARRAY.length))
	attributes.theme = setThemeAttribute(themeIndex);
  const theme = THEME_ARRAY[themeIndex]
	console.log('theme', attributes.theme);
  const skyIndex = Math.floor(p5.random(theme.length))
	skyColor = theme[skyIndex]
	theme.splice(skyIndex, 1);


	/// set up for sun
	if (realityCheck(80,p5)) {
		isSun = true;
		let sunIndex = Math.floor(p5.random(theme.length))
		sunColor = theme[sunIndex]
		theme.splice(sunIndex, 1);
		sun = new Sun(sunColor, p5);
		attributes.sun = true;
	}


	lineColor = theme[Math.floor(p5.random(theme.length))]
	// console.log('secondary', secondaryColor)
  starColor = theme[Math.floor(p5.random(theme.length))]
	mtnColors.push(theme[0], theme[1])
	moonColors.push(theme[1], theme[2])
	console.log('MoonCOlors', moonColors)

  // move = 1;
  hLine=0;
	p5.imageTint=255



	// for scaling logo
	// p5.rotateY(180)
	img.resize(0, height/6) 
	p5.background(skyColor);

	customDraw(p5, img)

	setCustomSave(canvasParentRef)
	console.log('ATTRIBUTES', attributes)
  }

	const draw = (p5) => {
		// customDraw(p5, img)
	}

	const  customDraw = (p5, img) => {
		// p5.push()
		// p5.translate(0,0,-10)

		newSky(p5)

		p5.push()
		if (realityCheck(99, p5)) {
			console.log('FLIING')
			// p5.rotateX(180)
		}

		// 
		
		createMoons(moonColors, p5)
		createMtns(mtnColors, p5)

		// p5.translate(-400, 0, -14, 0 ,0, 0);
		// p5.translate(0, 0, -100)
		// p5.perspective(p5.PI / 3.0, width / height, 0.1, 500);
		// interator()
		// p5.camera(0, 0,1640, 0, 0, 0, 0, 1, 0);
		// p5.plane(0, 0);
		// p5.push()
		// p5.rotateX(-88)
		p5.tint(255, p5.imageTint+= .25);

		// createSky();
		// if (imageTint == 255) {
		// 	tint(255, 255);
		// }
		if (isSun) {
			sun.display(p5)
		}

		displayMoons(p5)
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
		let gridSize = 12
		p5.push()
		p5.stroke(lineColor);
    p5.strokeWeight(.3);
		// p5.translate(0,0,100);
		if (realityCheck(10, p5)) {
			attributes.grid="horizontal"
			p5.rotateX(89)
			for (var x = 0; x < width * 1.3; x += gridSize*4) {
				for (var y = 0; y < height * 1.3; y += gridSize * 4 ) {
	
					p5.line(0-width * 1.3, y  , width * 1.3, y ) ;
					// p5.line(x-width/2, 0, x-width/2, height * 2);
				}
			}
		} else if (realityCheck(10, p5)) {
			attributes.grid="vertical"
			p5.rotateX(89)
      let modifier = p5.int(p5.random(1, 4))
			console.log('modifer', modifier)
			if (modifier == 2) {
				attributes.grid = "vertical abstract"
			}
			for (var x = 0; x < width * modifier; x += gridSize ) {
				for (var y = 0; y < height; y += gridSize ) {
	
					// p5.line(0-width/2, y * 2, width/2, y * 2  ) ;
					p5.line(x-width, 0, x-width, height* 2);
				}
			}

		} else if (realityCheck(60, p5)) {
		
			if (realityCheck(95, p5)) {
				p5.rotateX(89)
				attributes.grid="grid"
		 } else {
			attributes.grid="graph"
		 }

			for (var x = 0; x < width * 2; x += gridSize ) {
				for (var y = 0; y < height * 2; y += gridSize ) {
					// p5.circle(0-width/2, 0, 200, 200)
					p5.line(0-width * 1.3, y * 2, width * 1.3, y * 2  ) ;
					p5.line(x-width, 0, x-width, height * 2);
				}
			}

		} else {
			attributes.grid="none"
		}




		p5.pop()
    // if (hLine + move > height / 7 ) {
    //   hLine = -100;
    // } else {
    //   hLine += .01
    // }
    // move += .01;
  // }
}





function getX(i, p5) {
	let x;
	if (i%2 == 0 ) {
		x = p5.random(100, width/2)
		return x
	}	else {
		x =p5.random(-width/2, -450)
		// x = -1500;
		return x
	}	// return x
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


class Sun {
	constructor (sunColor, p5) {
		this.circum = p5.random(145, 450)
		this.vert =  p5.random(-height/2, 150)
		this.sunSpot = Math.floor( p5.random(2,4))
		this.horiz = this.sunSpot < 3 ? p5.random(-width/2,-400) :  p5.random(width/2, 400)
		console.log("SUN height, w", this.vert, this.horiz)
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
		this.vert = p5.random(-height/2, -100)
		this.moonSpot = Math.floor(p5.random(2,4))
		this.horiz = this.moonSpot < 3 ? p5.random(-width/2,-400) : p5.random(width/2, 400)
		this.moonColors = moonColors
		console.log('MOON height', this.vert)

		this.moonColor = p5.random(moonColors)
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
	attributes.moons = moonNumber;
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
  let x = realityCheck(25, p5) ? p5.rotateX(180) : null
  return x
}

function createMtns (theme, p5) {
	let mtnNumber = Math.floor(p5.random(0,5));
	attributes.mountains = mtnNumber;
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

function newSky(p5) {
	p5.translate(0,0,-1280)
  // p5.strokeWeight(25 / 15);
   let chooseSky = p5.int(p5.random(0,9))

	p5.fill(starColor)
	p5.noStroke()
	if (chooseSky == 0) {
		attributes.sky="matrix"
		for (var i = 0; i < width*3 ; i+=30) {
			for (var j = 0; j < height*1.5 ; j+= 15) {
				if (realityCheck(25, p5)) {
					p5.ellipse(i-width*1.5, j-height*1.5, 7, 7)
				}
			}
		}
	} 
	if (chooseSky == 1) {
		attributes.sky="stars"
		for (var i = 0; i < 2000 ; i+=1) {
		p5.ellipse(p5.random(-width*1.5, width*1.5),p5.random(-height*1.5), 5, 5 )
		}
	}
	else {
		return 
	}

}

const setThemeAttribute = (i) => {
	if (i = 0) {
		return "X"
	}
	if (i = 1) {
		return "Y"
	}
	if (i = 2) {
		return "Z"
	}
	if (i = 3) {
		return "XY"
	}
	if (i = 4) {
		return "ZX"
	}
	if (i = 5) {
		return "ZX"
	}
	if (i = 6) {
		return "ZX"
	}
	if (i = 7) {
		return "ZX"
	}
}

  return (
    <div id='canvas-parent' className="future vaporplanes">
     <div className="sketch-wrapper">
			<Sketch setup={setup}  preload={preload} keyPressed={keyPressed} draw={draw}/>
		 </div>
		 <div className="vapor-loading">
		 	<GridLoader color={'#6e0d60'} isLoading={true}
      	css={override} size={40} />
			 	
				 
				 <h4>What took a god 7 days..</h4>
			 	<p>creating new plane</p>
			 </div> 
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
				<p>Each vapor plane is randomly generated. There are billions of possible and unpredictable combinaations. The idea is that a user can create as many new planes as they like and once they find one that they like they can mint it as an NFT. The final collection will be the 1200 that users have decided to mint. Each NFT minted will also be serialized. Holders of vapor planes will be eligible for a variety of benefits related to PS37 including future airdrops, NFT tickets to IRL or metaverse events, as well as merchandise and physical art.</p>
			</div> }
    </div>
  )
}

export default VaporPlanes