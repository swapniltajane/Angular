import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsdataService {

  constructor() { }
  public GetData() {
    return [
      {Id: 1, Name: 'TV', Price: 45000, Path: './assets/img/tv.jpg'},
      {Id: 2, Name: 'Shoe', Price: 5000, Path: './assets/img/shoe.jpeg'}
    ];
  }
}
