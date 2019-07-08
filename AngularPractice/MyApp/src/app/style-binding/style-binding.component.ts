import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent {
  public align = 'center';
  public background = 'Red';
  public color = 'white';
  public effectsObj() {
    let obj = {
      'text-align': this.align,
      'background-color': this.background,
      'color': this.color
    };
    return obj;
  }
}
