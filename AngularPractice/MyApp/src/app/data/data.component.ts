import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  public products = [
    {Name: 'TV', Price: '45000', Category: 'Electronics'},
    {Name: 'Nike', Price: '4000', Category: 'Shoes'},
    {Name: 'Lee Cooper', Price: '3000', Category: 'Shoes'},
    {Name: 'Mobile', Price: '2000', Category: 'Electronics'}
  ];
  public selectedValue = 'All';
  public OnCategoryChanged(selectedValue) {
    this.selectedValue = selectedValue;
  }
}
