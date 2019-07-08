import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private data: ProductsService) { }
  public selectedCategory = 'All';
  public products = [];

  public OnCategoryChanged(category) {
    this.selectedCategory = category;
  }

  public GetAllCount() {
    return this.products.length;
  }

  public GetElectronicsCount() {
    return this.products.filter(x => x.Category == 'Electronics').length;
  }

  public GetShoesCount() {
    return this.products.filter(x => x.Category == 'Shoes').length;
  }

  ngOnInit() {
    this.products = this.data.GetData();
  }

}
