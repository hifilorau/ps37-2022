export default class Bolt {
  constructor(startPt, endPt, thickness, p5) {
    this.start = startPt;
    this.end = endPt;
    this.thickness = thickness;
  }
  
  show(p5) {
    p5.stroke(255, 220);
    p5.strokeWeight(this.thickness);
    p5.line(this.start.x, this.start.y, this.end.x, this.end.y);
  }
  
}