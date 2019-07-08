import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdata',
  templateUrl: './productdata.component.html',
  styleUrls: ['./productdata.component.css']
})
export class ProductdataComponent {
  public products = [
    {Name: 'TV', Price: '45000', Category: 'Electronics'},
    {Name: 'Nike', Price: '4000', Category: 'Shoes'},
    {Name: 'Lee Cooper', Price: '3000', Category: 'Shoes'},
    {Name: 'Mobile', Price: '2000', Category: 'Electronics'}
  ];

  public selectedCategory = 'All';

  public onCategoryChanged(selectedCategory) {
    this.selectedCategory = selectedCategory;
  }
  public allCount() {
    return this.products.length;
  }
  public electronicsCount() {
    return this.products.filter(x => x.Category == 'Electronics').length;
  }
  public shoesCount() {
    return this.products.filter(x => x.Category == 'Shoes').length;
  }
}
