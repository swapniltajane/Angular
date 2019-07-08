import { Injectable } from '@angular/core';

@Injectable()
export class ProductsdataService {

  constructor() { }
  public Getdata() {
    return [
      {Id: 1, Name: 'TV', Price: 45000, Img: './assets/img/tv.jpg'},
      {Id: 2, Name: 'Shoe', Price: 5000, Img: './assets/img/shoe.jpeg'}
    ];
  }
}
