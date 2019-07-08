import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  constructor() { }
  public cities = ['Select a city', 'Hyd', 'Delhi', 'Pune'];
  public isInValid;
  public isEvenInValid;

  public OnChange(value) {
    if (value == 'Select a city') {
      this.isInValid = true;
    } else {
      this.isInValid = false;
    }
  }
  public CheckEven(value) {
    if (value % 2 == 0) {
      this.isEvenInValid = false;
    } else {
      this.isEvenInValid = true;
    }
  }

  ngOnInit() {
  }
}
