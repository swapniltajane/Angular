import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component {
  public title = 'Products';
  public products = ['Mobile', 'Tv', 'AC'];
  public shopping = [
    {categoery: 'Electronics', products: ['Mobile', 'Tv']},
    {categoery: 'Shoes', products: ['Nike', 'Sparx']}
  ];
  public personalInfo = [
    {id: 1, name: 'Ankit', age: '18yrs'},
    {id: 2, name: 'Ganesh', age: '21yrs'}
  ];
  public width = 400;
  public border = 2;
}
