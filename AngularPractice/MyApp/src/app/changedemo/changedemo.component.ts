import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changedemo',
  templateUrl: './changedemo.component.html',
  styleUrls: ['./changedemo.component.css']
})
export class ChangedemoComponent {
public categories = [
  'Select a Category', 'Electronics', 'Shoes'
];
public electronics = [
  'Select a Category', 'Samsung TV', 'Mobile'
];
public shoes = [
  'Select a Category', 'Nike Casual', 'Lee Cooper'
];
public data = [
  {Name: 'Samsung TV', Price: 30000, Photo: 'assets/tv.jpg'},
  {Name: 'Mobile', Price: 10000, Photo: 'assets/mobile.jpg'},
  {Name: 'Nike Casual', Price: 5000, Photo: 'assets/shoes.jpg'},
  {Name: 'Lee Cooper', Price: 3000, Photo: 'assets/shoes1.jpeg'}
];
 public category;
 public productList = [];
 public product;
 public prodName;
 public prodPrice;
 public prodPhoto;
 public prodQty = 0;
 public prodDetails = [];
 public grandTotal = 0;
 public total;
 public displayDetails = 'none';
 public displayTable = 'none';

 public HideDetails() {
   let obj = {
     'display': this.displayDetails
   };
   return obj;
 }

 public HideTable() {
   let obj = {
     'display': this.displayTable
   };
   return obj;
 }

 public GetData(index) {
  this.prodName = this.data[index].Name;
  this.prodPrice = this.data[index].Price;
  this.prodPhoto = this.data[index].Photo;
 }

 public CategoryChanged() {
   switch (this.category) {
      case 'Electronics':
       this.productList = this.electronics;
       break;
      case 'Shoes':
        this.productList = this.shoes;
        break;
      default:
        this.productList = ['Please Select a Category'];
   }
 }

 public ProductChanged() {
   switch (this.product) {
      case 'Samsung TV':
        this.GetData(0);
        break;
        case 'Mobile':
        this.GetData(1);
        break;
        case 'Nike Casual':
        this.GetData(2);
        break;
        case 'Lee Cooper':
        this.GetData(3);
        break;
   }
   this.displayDetails = 'block';
 }
 public AddDetails() {
   this.total = this.prodPrice * this.prodQty;
   this.prodDetails.push({Name: this.prodName, Price: this.prodPrice, Quantity: this.prodQty, Preview: this.prodPhoto, Total: this.total});
   this.grandTotal += this.total;
   this.displayTable = 'block';
 }
 public DeleteRec(index) {
   this.grandTotal -= (this.prodDetails[index].Price * this.prodDetails[index].Quantity);
   this.prodDetails.splice(index, 1);
 }
}
