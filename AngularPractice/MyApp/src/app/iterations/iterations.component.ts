import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iterations',
  templateUrl: './iterations.component.html',
  styleUrls: ['./iterations.component.css']
})
export class IterationsComponent {
  public Name;
  public Price;
  public name;
  public price;
  public i;
  public id;
public products = [
{Id: 1, Name: 'TV', Price: 30000},
{Id: 2, Name: 'Shoe', Price: 5000}
];
public Id = this.products.length;

public addProduct() {
  if (this.Name == null || this.Price == null || this.Name === '' || this.Price === '') {
    alert('Enter the Information');
  } else {
  this.Id = this.products.length;
  this.Id++;
  this.products.push({Id: this.Id, Name: this.Name, Price: this.Price});
  alert('Record Inserted !');
  }
}
public deleteProduct(index) {
  const con = confirm('You want to delete this record ?');
  const temp = index;
  if (con === true) {
    this.products.splice(index, 1);
    for (let j = index++; this.products.length > j; j++) {
      this.products[1].Id = 4;
    }
  }
}
public editProduct(index) {
  this.name = this.products[index].Name;
  this.price = this.products[index].Price;
  this.Name = this.name;
  this.Price = this.price;
  this.Id = this.products[index].Id;
  this.i = index;
}
public saveProduct() {
  if (this.Name == null || this.Price == null || this.Name === '' || this.Price === '') {
    alert('Enter the Information');
  } else {
    this.id = this.products[this.i].Id;
    this.products.splice(this.i, 1, {Id: this.id, Name: this.Name, Price: this.Price});
    alert('Record Updated!');
  }
}
}
