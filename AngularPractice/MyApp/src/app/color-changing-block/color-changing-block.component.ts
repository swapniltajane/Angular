import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-changing-block',
  templateUrl: './color-changing-block.component.html',
  styleUrls: ['./color-changing-block.component.css']
})
export class ColorChangingBlockComponent {
  public position;
  public color = 'aqua';
  public rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  public colorChange(event) {
    this.position = event.clientX;
    if (this.position >= 0 && this.position < 123) {
      this.color = 'red';
    }
    if (this.position >= 123 && this.position < 239) {
      this.color = 'orange';
    }
    if (this.position >= 239 && this.position < 367) {
      this.color = '#FFF200';
    }
    if (this.position >= 367 && this.position < 476) {
      this.color = 'pink';
    }
    if (this.position >= 476 && this.position < 609) {
      this.color = 'lightblue';
    }
    if (this.position >= 609 && this.position < 728) {
      this.color = '#B97A57';
    }
    if (this.position >= 728 && this.position < 859) {
      this.color = 'yellow';
    }
    if (this.position >= 859 && this.position < 980) {
      this.color = 'blue';
    }
    if (this.position >= 980 && this.position < 1106) {
      this.color = '#99D9EA';
    }
    if (this.position >= 1106 && this.position < 1231) {
      this.color = '#B5E61D';
    }
    if (this.position >= 1231 && this.position < 1365) {
      this.color = 'violet';
    }
  }

  public colorBlock() {
    let obj = {
      'background-color': this.color
    };
    return obj;
  }
  public colorTable() {
    let obj1 = {
      'background-color': 'blue',
      animation : 'colorChange 1s infinite'
    };
    return obj1;
  }
}
