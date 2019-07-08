import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component {
  public product = [
    {Name: 'iPhone', Category: 'Electronics', Price: '15000', Photo: 'assets/elec3.jpeg'},
    {Name: 'Sparx', Category: 'Shoes', Price: '1500'},
    {Name: 'Nike Casual', Category: 'Shoes', Price: '5000'},
    {Name: 'Samsung Tv', Category: 'Electronics', Price: '30000'}
  ];
  public btnText = 'Hide Preview';
  public preview = true;
  public Preview() {
    if (this.preview === false) {
      this.btnText = 'Hide Prewiew';
      this.preview = true;
    } else if (this.preview === true) {
      this.btnText = 'Show Prewiew';
      this.preview = false;
    }
  }
}
