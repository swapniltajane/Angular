import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mousedemo',
  templateUrl: './mousedemo.component.html',
  styleUrls: ['./mousedemo.component.css']
})
export class MousedemoComponent {
  public toppos;
  public leftpos;
  public imagePath = 'assets/audi.webp';
  public imagePath1 = 'assets/bulbOff.png';

  public ApplyPosition(event) {
    this.leftpos = event.clientX;
    this.toppos = event.clientY;
  }
  public Animate() {
    let obj = {
      'position': 'fixed',
      'top': this.toppos + 'px',
      'left': this.leftpos + 'px'
    };
    return obj;
  }

  public ShowRangeRover() {
    this.imagePath = 'assets/car1.jpg';
  }
  public ShowAudi() {
    this.imagePath = 'assets/audi.webp';
  }

  public ON() {
    this.imagePath1 = 'assets/bulbOn.png';
  }
  public OFF() {
    this.imagePath1 = 'assets/bulbOff.png';
  }
}
