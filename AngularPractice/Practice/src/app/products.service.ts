import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  constructor() { }
  public GetData() {
    return [
        {Name: 'Sparx', Price: 1200, Category: 'Shoes'},
        {Name: 'Mobile', Price: 14000, Category: 'Electronics'},
        {Name: 'Nike', Price: 5000, Category: 'Shoes'},
        {Name: 'TV', Price: 15000, Category: 'Electronics'}
    ];
  }
}
