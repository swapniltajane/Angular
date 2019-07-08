import { Injectable } from '@angular/core';

@Injectable()
export class ProductDataService {

  constructor() { }
  public data;
  public GetData() {
    this.data = [
      {Name: 'TV', Price: 40000},
      {Name: 'Mobile', Price: 11000}
    ];
    return this.data;
  }
}
