function Drop() {
  this.x = random(width);
  this.y = random(-600, -5);
  this.z = random(0, 20)
  this.yspeed = map(this.z, 0, 20, 0.001, 0.01);

  this.fall = function() {
    this.y = this.y + this.yspeed;
    var grav = map(this.z, 0, 20, 0, 0.002);
    this.yspeed = this.yspeed + grav;

    if (this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 0.001, 0.01);
    }
  }

  this.show = function() {
    var thick = map(this.z, 0, 20, 1, 6);
    strokeWeight(thick);
    stroke(138, 43, 226);
    point(this.x, this.y);
  }
}
