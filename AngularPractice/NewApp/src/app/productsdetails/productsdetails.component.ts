import { Component, OnInit } from '@angular/core';
import { ProductsdataService } from '../productsdata.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productsdetails',
  templateUrl: './productsdetails.component.html',
  styleUrls: ['./productsdetails.component.css']
})
export class ProductsdetailsComponent implements OnInit {

  constructor(private data: ProductsdataService, private routes: ActivatedRoute, private router: Router) { }
  public products = [];
  public prodId;

  public PreviewClicked() {
    this.router.navigate(['preview', this.prodId], {relativeTo: this.routes});
  }

  ngOnInit() {
    this.products = this.data.Getdata();
    this.prodId = this.routes.snapshot.paramMap.get('id');
  }

}
