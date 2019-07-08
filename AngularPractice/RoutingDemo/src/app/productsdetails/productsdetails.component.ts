import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsdataService } from '../productsdata.service';

@Component({
  selector: 'app-productsdetails',
  templateUrl: './productsdetails.component.html',
  styleUrls: ['./productsdetails.component.css']
})
export class ProductsdetailsComponent implements OnInit {

  constructor(private routes: ActivatedRoute, private data: ProductsdataService) { }
  public getId;
  public products = [];

  ngOnInit() {
    this.getId = this.routes.snapshot.paramMap.get('id');
    this.products = this.data.GetData();
  }

}
