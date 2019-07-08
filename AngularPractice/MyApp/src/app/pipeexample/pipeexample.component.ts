import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeexample',
  templateUrl: './pipeexample.component.html',
  styleUrls: ['./pipeexample.component.css']
})
export class PipeexampleComponent {
  public msg = 'welcome to ANGULAR';
  public number = 100000;
  public date = new Date();
  public per = 0.2;
  public data = {
    name: 'swapnil',
    age: 21
  };
  public cities = ['Hyd', 'Delhi', 'Pune'];
}
