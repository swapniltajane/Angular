import { Component, OnInit } from '@angular/core';
import { ProductsdataService } from '../productsdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor(private data: ProductsdataService, private routes: ActivatedRoute) { }
  public prodId;
  public products;

  ngOnInit() {
    this.products = this.data.Getdata();
    this.prodId = this.routes.snapshot.paramMap.get('id');
  }

}
