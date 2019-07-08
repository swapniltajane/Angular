import { Component, OnInit } from '@angular/core';
import { ProductsdataService } from '../productsdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private data: ProductsdataService, private router: Router) { }
  public products = [];
  public prodId;

  public GetDetails(product) {
    this.router.navigate(['products', product.Id]);
  }

  ngOnInit() {
    this.products = this.data.Getdata();
  }
}
