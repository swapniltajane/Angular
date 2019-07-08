import { Component, OnInit } from '@angular/core';
import { MongodataService } from '../mongodata.service';

@Component({
  selector: 'app-consumeapi',
  templateUrl: './consumeapi.component.html',
  styleUrls: ['./consumeapi.component.css']
})
export class ConsumeapiComponent implements OnInit {

  constructor(private data: MongodataService) { }
  public products = [];
  public data1 = {};

  ngOnInit() {
    this.data.GetProducts().subscribe(data => this.products = data);
  }

  public SubmitProductData(data) {
    this.data1 = data;
    this.data.AddProduct(data);
    alert('Record Inserted....');
  }

}
