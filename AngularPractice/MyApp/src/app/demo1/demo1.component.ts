import { Component, OnInit} from '@angular/core';
import { delay } from 'q';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component {
  public val = 1;
  public c1 = 4;
  public r1 = 4;
  public Print(r , c) {
    document.write(`<table border=2>`);
    for (let i = 0; i < r; i++) {
      document.write(`<tr>`);
      for (let j = 0; j < c ; j++) {
        document.write(`<td>row=${i} col=${j}</td>`);
      }
      document.write(`</tr>`);
    }
    document.write(`</table>`);
  }
}
const obj = new Demo1Component();

