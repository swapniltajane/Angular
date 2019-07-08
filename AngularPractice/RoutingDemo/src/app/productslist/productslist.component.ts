import { Component, OnInit } from '@angular/core';
import { ProductsdataService } from '../productsdata.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {

  constructor(private data: ProductsdataService, private router: Router) { }

  public products = [];
  public GetDetails(item) {
    this.router.navigate(['product', item.Id]);
  }

  ngOnInit() {
    this.products = this.data.GetData();
  }

}
